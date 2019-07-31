defmodule ObligatoryTodoListApplication.Repo.Migrations.CreateTodosTable do
  use Ecto.Migration

  def up do
    create table("todos") do
      add :title, :string, null: false

      timestamps()  # inserted_at and updated_at
    end
  end

  def down do
    drop table("todos")
  end
end
