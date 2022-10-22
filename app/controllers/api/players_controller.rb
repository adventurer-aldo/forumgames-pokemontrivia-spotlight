class Api::PlayersController < ApplicationController
  before_action :set_player, only: %i[ show edit update destroy ]

  # GET /players or /players.json
  def index
    @players = Player.all.map do |player|
      { id: player.id, name: player.name, team: player.team_id, points: player.points.map(&:value).sum,
        can_earn: player.points.where('value < 10').where(game_id: Game.current_ids).exists?, complete: player.points.where(game_id: Game.current_ids).length == player.points.where(game_id: Game.current_ids, value: 10).length,
        added: player.points.where(game_id: Game.current_ids).map(&:value).sum, eligible: player.points.order(game_id: :desc).limit(5).map(&:value).sum == 50 }
    end

    render json: @players || []
  end

  # GET /players/1 or /players/1.json
  def show
  end

  # GET /players/new
  def new
    @player = Player.new
  end

  # GET /players/1/edit
  def edit
  end

  # POST /players or /players.json
  def create
    @player = Player.new(player_params)
    @player.save!

    Game.all.each do |game|
      Point.create(player_id: @player.id, game_id: game.id)
    end
  end

  # PATCH/PUT /players/1 or /players/1.json
  def update
    respond_to do |format|
      if @player.update(player_params)
        format.html { redirect_to player_url(@player), notice: "Player was successfully updated." }
        format.json { render :show, status: :ok, location: @player }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @player.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /players/1 or /players/1.json
  def destroy
    @player.destroy

    respond_to do |format|
      format.html { redirect_to players_url, notice: "Player was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_player
      @player = Player.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def player_params
      params.fetch(:player, {}).permit(:name, :team_id)
    end
end
