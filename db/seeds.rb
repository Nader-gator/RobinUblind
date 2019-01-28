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

#comment this back in when production is over
# Stock.destroy_all
# csv_text = File.read(Rails.root.join('lib', 'seeds', 'companylist.csv'))
# csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
# csv.each do |row|
#   t = Stock.new
#   t.nasdaq_code = row["Symbol"]
#   t.company_name = row["Name"]
#   t.save
# end

Watchlist.destroy_all
test_watclist1 = Watchlist.create(user_id: demo_user.id, stock_id: Stock.find_by_nasdaq_code("AAPL").id)
test_watclist2 = Watchlist.create(user_id: demo_user.id, stock_id: Stock.find_by_nasdaq_code("MSFT").id)
test_watclist3 = Watchlist.create(user_id: demo_user.id, stock_id: Stock.find_by_nasdaq_code("MU").id)