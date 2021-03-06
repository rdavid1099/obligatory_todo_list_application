defmodule ObligatoryTodoListApplicationWeb.Api.TodoControllerTest do
  use ObligatoryTodoListApplicationWeb.ConnCase
  import ObligatoryTodoListApplication.Factory
  import Ecto.Query, only: [from: 2]

  alias ObligatoryTodoListApplicationWeb.Router.Helpers
  alias ObligatoryTodoListApplication.Repo
  alias ObligatoryTodoListApplication.Task.Todo

  test "GET /", %{conn: conn} do
    todo = insert(:todo)
    conn = get(conn, Helpers.todo_path(conn, :index))
    assert json_response(conn, 200) == %{
      "todos" => [%{
        "id" => todo.id,
        "title" => todo.title,
        "inserted_at" => NaiveDateTime.to_iso8601(todo.inserted_at),
        "updated_at" => NaiveDateTime.to_iso8601(todo.updated_at)
      }]
    }
  end

  test "POST /", %{conn: conn} do
    conn = post(conn, Helpers.todo_path(conn, :create, %{"title" => "Finish this test"}))
    expected = json_response(conn, 200)
    result = from(Todo, where: [title: "Finish this test"], limit: 1) |> Repo.all
    assert Repo.all(Todo) |> Enum.count == 1
    assert result[:id] == expected[:id]
    assert result[:title] == expected[:title]
  end

  test "PUT /", %{conn: conn} do
    todo = insert(:todo)
    conn = put(conn, Helpers.todo_path(conn, :update, todo.id, %{"title" => "Finish this test"}))
    expected = json_response(conn, 200)
    result = from(Todo, where: [title: "Finish this test"], limit: 1) |> Repo.all
    assert Repo.all(Todo) |> Enum.count == 1
    assert result[:id] == expected[:id]
    assert result[:title] == expected[:title]
  end

  test "DELETE /", %{conn: conn} do
    todo = insert(:todo)
    conn = delete(conn, Helpers.todo_path(conn, :delete, todo.id))
    assert json_response(conn, 200) == %{
      "status" => "Todo successfully deleted"
    }
    assert Repo.all(Todo) |> Enum.count == 0
  end
end
