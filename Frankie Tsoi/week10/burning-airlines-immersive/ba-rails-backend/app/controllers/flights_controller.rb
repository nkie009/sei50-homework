class FlightsController < ApplicationController

  def index
    render json: Flight.all
  end #index
  
  def search

    flights = Flight.where origin: params[:origin], destination: params[:destination]

    render json: flights, include: {
      airplane:{
        only: [:name]
      }
    }

  end

  def show
    flight = Flight.find(params[:id])

    # this is include when getting data json
    render json: flight, include: {
      airplane: {},
      reservations: {
        only: [:row, :col, :user_id],
        include: { 
          user: {
            only: [:name, :email]
          } # user 
        }
      } # reservations
    } # include
  end #show


end #class Flight
