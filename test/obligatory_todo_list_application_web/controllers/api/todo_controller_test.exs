defmodule ObligatoryTodoListApplicationWeb.Api.TodoControllerTest do
  use ObligatoryTodoListApplicationWeb.ConnCase
  import ObligatoryTodoListApplication.Factory

  alias ObligatoryTodoListApplicationWeb.Router.Helpers

  test "GET /", %{conn: conn} do
    todo = insert(:todo)
    conn = get(conn, Helpers.todo_path(conn, :index))
    inser = NaiveDateTime.to_iso8601(todo.inserted_at)
    assert json_response(conn, 200) == %{
      "todos" => [%{
        "id" => todo.id,
        "title" => todo.title,
        "inserted_at" => NaiveDateTime.to_iso8601(todo.inserted_at),
        "updated_at" => NaiveDateTime.to_iso8601(todo.updated_at)
      }]
    }
  end
end
