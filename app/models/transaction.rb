class Transaction < ApplicationRecord
  validates :user_id, :stock_id, :amount, :price, :date, :amount, :category, :bankroll, presence: true

  belongs_to :user
  belongs_to :stock

  def self.get_time_map(range)
    range = range + 1
    result_array = []
    range.times do |i|
      result_array << Date.today - i if i > 30 ? i.even? : true
    end

    result_array.reverse.concat([Date.today - 1, Date.today])
  end
end
