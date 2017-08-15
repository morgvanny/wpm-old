class Api::TestsController < ApplicationController

  def index
    render json: Test.all
  end

  def create
    test = Test.new(test_params)
    if test.save
      render json: test
    else
      render json: { message: test.errors }, status: 400
    end
  end

  def show
    render Test.find_by(id: params[:id])
  end

  private

    def test_params
      params.require(:test).permit(:team, :wpm, :length)
    end
end