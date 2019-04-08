class AddNullContraint < ActiveRecord::Migration[5.2]
  def change
    change_column_null(:transactions, :bankroll, false)
    add_index :transactions, :date
  end
end
