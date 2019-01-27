# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'csv'
 
User.destroy_all
demo_user = User.create!(email: "demouser@demo.com", password: "starwars")


Stock.destroy_all
csv_text = File.read(Rails.root.join('lib', 'seeds', 'companylist.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  t = Stock.new
  t.nasdaq_code = row["Symbol"]
  t.company_name = row["Name"]
  t.save
end