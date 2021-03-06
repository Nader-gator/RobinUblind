# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_10_05_233836) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "stocks", force: :cascade do |t|
    t.string "nasdaq_code", null: false
    t.string "company_name", null: false
    t.index ["company_name"], name: "index_stocks_on_company_name", unique: true
    t.index ["nasdaq_code"], name: "index_stocks_on_nasdaq_code", unique: true
  end

  create_table "transactions", force: :cascade do |t|
    t.string "category", null: false
    t.integer "user_id", null: false
    t.integer "stock_id", null: false
    t.integer "price", null: false
    t.datetime "date", null: false
    t.integer "amount", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "bankroll", null: false
    t.index ["date"], name: "index_transactions_on_date"
    t.index ["stock_id"], name: "index_transactions_on_stock_id"
    t.index ["user_id"], name: "index_transactions_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "bankroll", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.jsonb "price_history"
    t.date "ph_last_accessed"
    t.text "company_list", array: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

  create_table "watchlists", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "stock_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["stock_id"], name: "index_watchlists_on_stock_id"
    t.index ["user_id"], name: "index_watchlists_on_user_id"
  end

end
