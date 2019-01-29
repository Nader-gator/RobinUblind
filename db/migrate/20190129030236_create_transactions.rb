class CreateTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :transactions do |t|
      t.string :category, null: false
      t.integer :user_id, null: false
      t.integer :stock_id, null: false
      t.integer :price, null: false
      t.datetime :date, null: false
      t.integer :amount, null: false
      t.timestamps
    end
    add_index :transactions, :user_id
    add_index :transactions, :stock_id
  end
end
      # t.integer :day, null: false
      # t.integer :month, null: false
      # t.integer :year, null: false