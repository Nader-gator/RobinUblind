class Stock < ApplicationRecord
  validates :nasdaq_code, :company_name, presence: true, uniqueness:true
end