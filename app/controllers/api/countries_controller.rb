module API
	class CountriesController < ApplicationController

		def index
			render json: Country.all
		end

	end
end