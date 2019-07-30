defmodule ObligatoryTodoListApplication.Repo do
  use Ecto.Repo,
    otp_app: :obligatory_todo_list_application,
    adapter: Ecto.Adapters.Postgres
end
