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

# # comment this back in when production is over
Stock.destroy_all
csv_text = File.read(Rails.root.join('lib', 'seeds', 'companylist.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  t = Stock.new
  t.nasdaq_code = row["Symbol"]
  t.company_name = row["Name"]
  t.save
end



Watchlist.destroy_all
test_watclist1 = Watchlist.create(user_id: demo_user.id, stock_id: Stock.find_by_nasdaq_code("AAPL").id)
test_watclist2 = Watchlist.create(user_id: demo_user.id, stock_id: Stock.find_by_nasdaq_code("MSFT").id)
test_watclist3 = Watchlist.create(user_id: demo_user.id, stock_id: Stock.find_by_nasdaq_code("MU").id)

stock1= Stock.find_by_nasdaq_code('AAPL')
stock2= Stock.find_by_nasdaq_code('MSFT')
stock3= Stock.find_by_nasdaq_code('MU')


Transaction.destroy_all
#date format for psotgres is ddmmyyyy

Transaction1a = Transaction.create!(
  category: 'buy',
  user_id: demo_user.id,
  stock_id: stock1.id,
  price: 172,
  date: "25/01/2017",
  amount: 20,

)
Transaction1b = Transaction.create!(
  category: 'buy',
  user_id: demo_user.id,
  stock_id: stock1.id,
  price: 172,
  date: "25/04/2017",
  amount: 25,

)
Transaction1c = Transaction.create!(
  category: 'sell',
  user_id: demo_user.id,
  stock_id: stock1.id,
  price: 172,
  date: "25/08/2017",
  amount: 5,

)
Transaction2a = Transaction.create!(
  category: 'buy',
  user_id: demo_user.id,
  stock_id: stock2.id,
  price: 50,
  date: "05/11/2016",
  amount: 15,

)
Transaction2b = Transaction.create!(
  category: 'buy',
  user_id: demo_user.id,
  stock_id: stock2.id,
  price: 150,
  date: "05/07/2018",
  amount: 40,

)

Transaction2c = Transaction.create!(
  category: 'buy',
  user_id: demo_user.id,
  stock_id: stock2.id,
  price: 50,
  date: "09/11/2016",
  amount: 15,

)
Transaction3a = Transaction.create!(
  category: 'buy',
  user_id: demo_user.id,
  stock_id: stock3.id,
  price: 50,
  date: "09/11/2017",
  amount: 15,

)
Transaction3b = Transaction.create!(
  category: 'buy',
  user_id: demo_user.id,
  stock_id: stock3.id,
  price: 150,
  date: "05/07/2018",
  amount: 40,

)

