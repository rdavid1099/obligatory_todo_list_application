defmodule ObligatoryTodoListApplicationWeb.PageController do
  use ObligatoryTodoListApplicationWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
