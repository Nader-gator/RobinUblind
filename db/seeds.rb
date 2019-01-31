# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
module LifeCycle
  RESET ||= 'reset'
end

require 'csv'
 
User.destroy_all
demo_user = User.create!(email: "demouser@demo.com", password: "starwars", bankroll: 16450)

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


Transaction1 = Transaction.create!(
  category: 'buy-in',
  user_id: demo_user.id,
  stock_id: stock1.id,
  price: 0,
  date: "01/01/2016",
  amount: 0,
  bankroll: 50000
)
Transaction2 = Transaction.create!(
  category: 'buy',
  user_id: demo_user.id,
  stock_id: stock1.id,
  price: 156,
  date: "08/02/2018",
  amount: 100,
  bankroll: 34400
)
Transaction2 = Transaction.create!(
  category: 'buy',
  user_id: demo_user.id,
  stock_id: stock1.id,
  price: 169,
  date: "01/05/2018",
  amount: 150,
  bankroll: 9050
)
Transaction2 = Transaction.create!(
  category: 'sell',
  user_id: demo_user.id,
  stock_id: stock1.id,
  price: 224,
  date: "05/10/2018",
  amount: 100,
  bankroll: 31450
)
Transaction3 = Transaction.create!(
  category: 'buy',
  user_id: demo_user.id,
  stock_id: stock2.id,
  price: 105,
  date: "10/10/2018",
  amount: 150,
  bankroll: 16450
)