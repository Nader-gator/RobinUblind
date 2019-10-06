class AddCompanyDataToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :company_list, :text, array: true, null: true
  end
end
