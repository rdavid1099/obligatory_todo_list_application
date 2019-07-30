defmodule ObligatoryTodoListApplicationWeb.HelloController do
  use ObligatoryTodoListApplicationWeb, :controller

  def index(conn, params) do
    render(conn, :index, your_name: params["your_name"] || "user")
  end

  def show(conn, %{"messenger" => messenger}) do
    render(conn, :show, messenger: messenger)
  end
end
