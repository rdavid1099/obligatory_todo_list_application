defmodule ObligatoryTodoListApplicationWeb.Router do
  use ObligatoryTodoListApplicationWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  # Other scopes may use custom stacks.
  scope "/api", ObligatoryTodoListApplicationWeb.Api do
    pipe_through :api

    resources "/todo", TodoController, only: [:index, :create, :update, :delete]
  end

  scope "/", ObligatoryTodoListApplicationWeb do
    pipe_through :browser

    get "/*path", PageController, :index
  end
end
