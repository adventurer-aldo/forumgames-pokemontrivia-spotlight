# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 0) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "games", id: :serial, force: :cascade do |t|
    t.text "name", null: false
    t.integer "section", limit: 2, null: false
    t.date "date", null: false
    t.text "url"
  end

  create_table "histories", id: :integer, default: -> { "nextval('history_id_seq'::regclass)" }, force: :cascade do |t|
    t.text "action", null: false
    t.datetime "done_at", precision: nil, null: false
  end

  create_table "players", id: :serial, force: :cascade do |t|
    t.integer "team_id", null: false
    t.text "name", null: false
    t.index ["name"], name: "name", unique: true
  end

  create_table "points", id: :integer, default: -> { "nextval('game_points_id_seq'::regclass)" }, force: :cascade do |t|
    t.integer "player_id", null: false
    t.integer "game_id", null: false
    t.integer "value", limit: 2, default: 0, null: false
  end

  create_table "teams", id: :serial, force: :cascade do |t|
    t.text "name", null: false
  end

end
