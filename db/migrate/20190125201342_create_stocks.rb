class CreateStocks < ActiveRecord::Migration[5.2]
  def change
    create_table :stocks do |t|
      t.string :nasdaq_code, null: false
      t.string :company_name, null: false
    end
  end
end
