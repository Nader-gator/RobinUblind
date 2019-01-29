Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "static_pages#root"

  namespace :api, defaults: {format: :json} do 
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
    resource :stock, only: [:show]
    resources :user, only: [] do
      resource :watchlist, only: [:show,:create, :destroy]
      resource :transaction, only: [:show,:create]
    end
  end
end
