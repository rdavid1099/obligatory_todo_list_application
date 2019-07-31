defmodule ObligatoryTodoListApplicationWeb.Api.TodoView do
  use ObligatoryTodoListApplicationWeb, :view

  def render("index.json", %{todos: todos}) do
    %{
      todos: Enum.map(todos, &todo_json/1)
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
