Pusher::Application.routes.draw do

  devise_for :internals

  devise_for :clients

  devise_for :administrators

  root :to => 'home#index'

  match 'gnip_data' => 'gnip_data#create'
end
