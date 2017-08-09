Rails.application.routes.draw do
  namespace :api do
    resources :tests, except: [:new, :edit]
  end
end
