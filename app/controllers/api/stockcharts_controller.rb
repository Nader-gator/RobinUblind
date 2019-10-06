class Api::StockchartsController < ApplicationController
  def show
    ::RestClient.log = Rails.logger
    stock_code = params[:stock_code]
    range = params[:range]
    keys = ENV["key"] .split(",")
    price_info = keys.each do |key|
      fetched_info = RestClient::Request.new({
        method: "get",
        url: "https://cloud.iexapis.com/stable/stock/#{stock_code}/batch?types=quote,chart&range=#{range}&token=#{key}",
        headers: {accept: :json, content_type: :json},
      }).execute { |response, request, result|
        case response.code
        when 200
          JSON.parse response
        end
      }
      break fetched_info if fetched_info
    end
    if price_info == keys
      return render json: {error: "API dead"}, status: 418
    else
      return render json: price_info
    end
  end
end
