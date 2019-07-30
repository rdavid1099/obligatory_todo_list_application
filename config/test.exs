use Mix.Config

# Configure your database
config :obligatory_todo_list_application, ObligatoryTodoListApplication.Repo,
  username: "postgres",
  password: "postgres",
  database: "obligatory_todo_list_application_test",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :obligatory_todo_list_application, ObligatoryTodoListApplicationWeb.Endpoint,
  http: [port: 4002],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn
