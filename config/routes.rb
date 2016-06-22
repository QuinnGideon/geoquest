Rails.application.routes.draw do

	root 'home#questions'
  # get '/home/questions'

  namespace :api do
    resources :countries, only: [:index]
  end
end
