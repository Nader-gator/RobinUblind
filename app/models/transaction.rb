class Transaction < ApplicationRecord
  validates :user_id ,:stock_id ,:amount,:price,:date,:amount,:category, presence: true

  belongs_to :user
  belongs_to :stock

end