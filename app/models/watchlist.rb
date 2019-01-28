class Watchlist < ApplicationRecord
  validates :user_id, :stock_id, presence: true

  belongs_to :user
  belongs_to :stock
end