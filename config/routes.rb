Rails.application.routes.draw do

  get 'home/questions'

  namespace :api do
    resources :countries, only: [:index]
  end
end
