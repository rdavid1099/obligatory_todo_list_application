defmodule ObligatoryTodoListApplicationWeb.PageControllerTest do
  use ObligatoryTodoListApplicationWeb.ConnCase

  test "GET /", %{conn: conn} do
    conn = get(conn, "/")
    assert html_response(conn, 200) =~ "<div id=\"react-app\"></div>"
  end
end
