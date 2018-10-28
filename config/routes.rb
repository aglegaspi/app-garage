Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  root 'home#index'

  get '/search', to: 'search#index'

  resources :apps, only: :show
end
