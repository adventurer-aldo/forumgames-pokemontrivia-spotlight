# frozen_string_literal: true

# Table that contains the users that play the game.
class Player < ApplicationRecord
  validates :name, exclusion: { in: [''], message: 'Name cannot be empty string.' }
  belongs_to :team
  has_many :points, dependent: :destroy
  after_create :history_new

  def history_new
    History.create!(action: "Added a new player: \"#{name}\"", done_at: Time.zone.now)
  end
end
