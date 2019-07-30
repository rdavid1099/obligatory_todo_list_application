defmodule ObligatoryTodoListApplicationWeb.HelloController do
  use ObligatoryTodoListApplicationWeb, :controller

  def index(conn, %{"your_name" => your_name}) do
    render(conn, :index, your_name: your_name)
  end

  def index(conn, _params) do
    render(conn, :index, your_name: "user")
  end

  def show(conn, %{"messenger" => messenger}) do
    render(conn, :show, messenger: messenger)
  end
end
