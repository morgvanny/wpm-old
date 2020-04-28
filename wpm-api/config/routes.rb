# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api do
    resources :users
    resources :sessions, only: %i[new create destroy]
    resources :tests, except: %i[new edit]
  end
end
