class StockAddIndex < ActiveRecord::Migration[5.2]
  def change
    add_index :stocks, :nasdaq_code, unique: true
    add_index :stocks, :company_name, unique: true
  end
end
