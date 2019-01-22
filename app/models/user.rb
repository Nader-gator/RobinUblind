class User < ApplicationRecord
  
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
  
  private

  def ensure_bankroll
    self.bankroll ||= 0
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(64)
  end
end