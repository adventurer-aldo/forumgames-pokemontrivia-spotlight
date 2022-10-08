# frozen_string_literal: true

# Where everything happens.
class MainController < ApplicationController
  def index
    History.destroy_all
    Player.destroy_all
    Game.destroy_all
    Point.destroy_all
    @date = "#{Time.now.day}/#{Time.now.mon}/#{Time.now.year} #{Time.now.hour}:#{Time.now.min}"
    puts Game.current_ids
  end
end
