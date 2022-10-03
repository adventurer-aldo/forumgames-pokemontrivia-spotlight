# frozen_string_literal: true

# Table that contains the teams to which the players belong.
class Team < ApplicationRecord
  has_many :players, dependent: :destroy
  has_many :points, through: :players

  def score
    points.map(&:value).sum
  end
end
