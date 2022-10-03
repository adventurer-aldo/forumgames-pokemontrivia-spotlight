# frozen_string_literal: true

# Table that contains each point for each game for each player
class Point < ApplicationRecord
  belongs_to :game
  belongs_to :player
end
