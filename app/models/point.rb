# frozen_string_literal: true

# Table that contains each point for each game for each player
class Point < ApplicationRecord
  belongs_to :game
  belongs_to :player
  before_update :changer

  def changer
    History.create!(action: "#{player.name}'s points for #{game.name} have #{Point.find_by(id:).value > value ? 'decreased' : 'increased'} to #{value}.", done_at: Time.zone.now)
  end
end
