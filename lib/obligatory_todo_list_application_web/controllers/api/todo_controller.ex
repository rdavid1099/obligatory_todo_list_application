defmodule ObligatoryTodoListApplicationWeb.Api.TodoController do
  use ObligatoryTodoListApplicationWeb, :controller
  import Ecto.Query, only: [from: 2]

  alias ObligatoryTodoListApplication.Repo
  alias ObligatoryTodoListApplication.Task.Todo

  def index(conn, _params) do
    todos = from(Todo, order_by: [asc: :id]) |> Repo.all
    render(conn, "index.json", todos: todos)
  end

  def create(conn, params) do
    todo = %Todo{}
      |> Todo.changeset(params)
      |> Repo.insert

    render(conn, "create.json", result: todo)
  end

  def update(conn, params) do
    todo = Repo.get(Todo, params["id"])
      |> Ecto.Changeset.change(title: params["title"])
      |> Repo.update
    render(conn, "create.json", result: todo)
  end

  def delete(conn, params) do
    Repo.get(Todo, params["id"])
      |> Repo.delete
    render(conn, "delete.json")
  end
end
