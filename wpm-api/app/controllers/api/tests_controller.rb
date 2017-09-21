class Api::TestsController < ApplicationController

  def index
    render json: Test.all.order('wpm DESC')
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
    render json: Test.find_by(id: params[:id])
  end

  def update
    test = Test.find_by(id: params[:id])
    if test.update(test_params)
      render json: test
    else
      render json: { message: test.errors }, status: 400
    end
  end

  private

    def test_params
      params.require(:test).permit(:team, :wpm, :length, :likes)
    end
end