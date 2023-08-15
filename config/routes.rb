Rails.application.routes.draw do
  namespace :api do
    resources :teams
    resources :points
    resources :games
    resources :histories
    resources :players
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root 'main#index'

  get '/table', to: 'main#table'
  get '/tata', to: 'main#tata'
end
