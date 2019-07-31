defmodule ObligatoryTodoListApplicationWeb.Api.TodoController do
  use ObligatoryTodoListApplicationWeb, :controller

  alias ObligatoryTodoListApplication.Repo
  alias ObligatoryTodoListApplication.Task.Todo

  def index(conn, _params) do
    render(conn, "index.json", todos: Repo.all(Todo))
  end
end
