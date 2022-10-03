# frozen_string_literal: true

# Table that contains the users that play the game.
class Player < ApplicationRecord
  validates :name, exclusion: { in: [''], message: 'Name cannot be empty string.' }
  belongs_to :team
  has_many :points, dependent: :destroy
end
