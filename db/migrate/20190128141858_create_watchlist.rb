class CreateWatchlist < ActiveRecord::Migration[5.2]
  def change
    create_table :watchlists do |t|
      t.integer :user_id, null: false
      t.integer :stock_id, null: false
      t.timestamps
    end
    add_index :watchlists, :user_id
    add_index :watchlists, :stock_id
  end
end
