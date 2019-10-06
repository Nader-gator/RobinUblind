class AddPriceDataToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :price_history, :jsonb, null: true
    add_column :users, :ph_last_accessed, :date, null: true
  end
end
