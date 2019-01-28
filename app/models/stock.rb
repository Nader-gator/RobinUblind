class Stock < ApplicationRecord
  validates :nasdaq_code, :company_name, presence: true, uniqueness:true
  
  has_many :watchlists
end