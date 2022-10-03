class Api::GamesController < ApplicationController
  before_action :set_game, only: %i[ show edit update destroy ]

  # GET /games or /games.json
  def index
    @games = Game.where(date: Time.now.to_date).map do |game|
      { id: game.id, name: game.name}
    end

    render json: @games
  end

  # GET /games/1 or /games/1.json
  def show
  end

  # GET /games/new
  def new
    @game = Game.new
  end

  # GET /games/1/edit
  def edit
  end

  # POST /games or /games.json
  def create
    @game = Game.new(name: game_params['name'], section: game_params['section'], date: Time.now.to_date)
    @game.save!
    Player.all.each do |player|
      Point.create(player_id: player.id, game_id: @game.id)
    end
  end

  # PATCH/PUT /games/1 or /games/1.json
  def update
  end

  # DELETE /games/1 or /games/1.json
  def destroy
    @game.destroy

    respond_to do |format|
      format.html { redirect_to games_url, notice: "Game was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
  
  # Use callbacks to share common setup or constraints between actions.
  def set_game
    @game = Game.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def game_params
    params.fetch(:game, {}).permit(:name, :section)
  end
end
