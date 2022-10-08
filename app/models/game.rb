# frozen_string_literal: true

# Table that contains the games the players will play
class Game < ApplicationRecord
  validates :name, exclusion: { in: [''], message: 'Name cannot be empty string.' }
  has_many :points, dependent: :destroy
  after_create :changer

  def changer
    History.create!(action: "Added a new game: #{name}", done_at: Time.zone.now)
  end

  def self.current_ids
    Game.where(date: Time.now.to_date).map(&:id)
  end
end
