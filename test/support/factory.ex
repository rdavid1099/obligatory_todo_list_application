defmodule ObligatoryTodoListApplication.Factory do
  use ExMachina.Ecto, repo: ObligatoryTodoListApplication.Repo

  def todo_factory do
    %ObligatoryTodoListApplication.Task.Todo{
      title: "Learn Phoenix and Elixir"
    }
  end
end
