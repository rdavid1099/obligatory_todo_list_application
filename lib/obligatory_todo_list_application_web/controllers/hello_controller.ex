defmodule ObligatoryTodoListApplicationWeb.HelloController do
  use ObligatoryTodoListApplicationWeb, :controller

  def index(conn, _params) do
    render(conn, :index)
  end
end
