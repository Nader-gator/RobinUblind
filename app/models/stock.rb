class Stock < ApplicationRecord
  validates :nasdaq_code, :company_name, presence: true, uniqueness:true
  
  has_many :watchlists
  has_many :transactions

  def self.find_code(id)
    stock = Stock.find_by(id: id)
    return stock.nasdaq_code
  end
end