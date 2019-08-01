defmodule ObligatoryTodoListApplicationWeb.Api.TodoView do
  use ObligatoryTodoListApplicationWeb, :view

  def render("index.json", %{todos: todos}) do
    %{
      todos: Enum.map(todos, &todo_json/1)
    }
  end

  def render("create.json", %{result: {_status, todo}}) do
    todo
      |> todo_json
  end

  def render("delete.json", _) do
    %{
      status: "Todo successfully deleted"
    }
  end

  def todo_json(todo) do
    %{
      id: todo.id,
      title: todo.title,
      inserted_at: todo.inserted_at,
      updated_at: todo.updated_at
    }
  end
end
