Rails.application.routes.draw do
  resources :histories
  namespace :api do
    resources :teams
    resources :points
    resources :games
    resources :players
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root 'main#index'
end
