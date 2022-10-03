class Api::PointsController < ApplicationController

  # GET /points or /points.json
  def index
    @points = Point.all
  end

  # GET /points/1 or /points/1.json
  def show
  end

  # GET /points/new
  def new
    @point = Point.new
  end

  # GET /points/1/edit
  def edit
  end

  # POST /points or /points.json
  def create
    @pointer = Point.where(player_id: point_params['player_id'].to_i, game_id: Game.current_ids)
    return unless @pointer.exists?
    @pointed = @pointer.first
    @pointed.value -= 1
    @pointed.save!
  end

  # PATCH/PUT /points/1 or /points/1.json
  def update
    @pointer = Point.where(player_id: point_params['player_id'].to_i, game_id: Game.current_ids).where('value < 10')
    return unless @pointer.exists?
    @pointed = @pointer.first
    @pointed.value += 1
    @pointed.save!
  end

  # DELETE /points/1 or /points/1.json
  def destroy
    @point.destroy

    respond_to do |format|
      format.html { redirect_to points_url, notice: "Point was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_point
      @point = Point.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def point_params
      params.fetch(:point, {}).permit(:player_id, :game_id, :value)
    end
end
