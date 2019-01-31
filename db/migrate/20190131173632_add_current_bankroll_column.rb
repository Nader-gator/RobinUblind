class AddCurrentBankrollColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :transactions, :bankroll, :integer
  end
end
