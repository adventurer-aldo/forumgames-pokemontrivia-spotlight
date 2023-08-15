# frozen_string_literal: true

# Where everything happens.
class MainController < ApplicationController
  def index
    @date = "#{Time.now.day}/#{Time.now.mon}/#{Time.now.year} #{Time.now.hour}:#{Time.now.min < 10 ? '0' : ''}#{Time.now.min}"
  end

  def table
    @players = Player.all.sort_by { |player| -1 * player.points.map(&:value).sum }
    @games = Game.all
  end

  def tata
    Game.last.update(date: Date.new)
  end
end
