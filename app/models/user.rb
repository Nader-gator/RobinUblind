class User < ApplicationRecord

  has_many :watchlist
  has_many :stocks,
    through: :watchlist,
    source: :stock
  has_many :transactions
  
  attr_reader :password

  validates :email, :password_digest, :session_token, :bankroll, presence: true
  validates :email, :session_token, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}
  
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }

  after_initialize :ensure_session_token, :ensure_bankroll

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    return user.valid_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  
  def reset_session_token
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

# transaction methods begin here

  def purchases
    self.transactions.where(category: 'buy')
  end

  def sales
    self.transactions.where(category: 'sell')
  end

  def positions(date = nil)
    transaction_hash = {}
    transactions = self.transactions
    transactions = self.transactions.where("date <= ?",date) if date
    transactions.each do |transaction|
      transaction_hash[transaction.stock_id] = [] unless transaction_hash[transaction.stock_id]
      transaction_hash[transaction.stock_id] << transaction
    end
    return transaction_hash
  end

  def positions_for_comapny(compnay_code)
    transaction_hash = {}
    stock = Stock.find_by_nasdaq_code(compnay_code)

    transactions = self.transactions.where(stock_id: stock.id)

    transactions.each do |transaction|
      transaction_hash[transaction.stock_id] = [] unless transaction_hash[transaction.stock_id]
      transaction_hash[transaction.stock_id] << transaction
    end
    return transaction_hash
  end

  def closed_position?(array)
    count = 0
    array.each do |transaction|
      if transaction.category == "buy"
        count += transaction.amount
      elsif transaction.category == 'sell'
        count -= transaction.amount
      end
    end

    return false if count > 0
    return true
    
  end


  def self.calculate_holding(transaction_array)
    num_stocks = 0

    transaction_array.each do |hash|
      if hash[:category] == 'buy'
        num_stocks += hash[:amount]
      elsif hash[:category] == 'sell'
        num_stocks -= hash[:amount]
      end
    end

    return {holding: num_stocks}
  end




  def sorted_transactions
    hash = {closed: {}, open: {}}

    self.positions.each do |code, transaction_array|
      if self.closed_position?(transaction_array)
        hash[:closed][Stock.find_code(code)] = {data: transaction_array,
          stats: User.calculate_holding(transaction_array),
        }
      else
        hash[:open][Stock.find_code(code)] = {data: transaction_array,
          stats: User.calculate_holding(transaction_array),
        }
      end
      
    end

    return hash
  end

  def sorted_transactions_upto(date)
    hash = {closed: {}, open: {}}

    self.positions(date).each do |code, transaction_array|
      if self.closed_position?(transaction_array)
        hash[:closed][Stock.find_code(code)] = {data: transaction_array,
          stats: User.calculate_holding(transaction_array),
        }
      else
        hash[:open][Stock.find_code(code)] = {data: transaction_array,
          stats: User.calculate_holding(transaction_array),
        }
      end
      
    end

    return hash
  end


  
  private

  def ensure_bankroll
    self.bankroll ||= "0.00"
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(64)
  end
end