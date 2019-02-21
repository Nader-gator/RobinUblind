class Transaction < ApplicationRecord
  validates :user_id ,:stock_id ,:amount,:price,:date,:amount,:category,:bankroll, presence: true

  belongs_to :user
  belongs_to :stock


  def self.get_time_map(range)
    range = range + 1
    result_array = []
    range.times do |i|
      if i.even?
        result_array << Date.today - i
      else
        result_array << nil
      end
    end

    result_array.reverse.concat([Date.today - 1,Date.today])
  end
end