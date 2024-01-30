import { useEffect, useState } from "react";
import Form from "./components/Form";
import Loader from "./components/Loader";
import ListItem from "./components/ListItem";
import axios from "axios";

axios.defaults.baseURL = `http://localhost:3000`;

function App() {
  const [todos, setTodos] = useState(null);

  const [page, setPage] = useState(1);

  const [maxPageCount, setMaxPageCount] = useState();

  useEffect(() => {
    // fetch("http://localhost:3000/todos")
    // .then((res) => res.json())
    // .then((data) => setTodos(data))

    axios
      .get("/todos", {
        timeout: 3000,
        timeoutErrorMessage: "Timeout",
        params: {
          _per_page: 7,
          _page: page,
        },
      })

      .then((res) => {
        setMaxPageCount(res.data.pages);
        setTodos(res.data.data);
      })

      .catch((err) => {
        console.log(err);
        if (err.message === "Timeout") {
          alert("Timeout");
        }
      });
  }, [page]);

  return (
    <div className="container p-3 p-md-5">
      <h2 className="text-center text-primary">CRUD - TODO</h2>

      <Form setTodos={setTodos} />
      {!todos && <Loader />}

      <ul className="list-group">
        {todos?.map((todo) => (
          <ListItem
            key={todo.id}
            todo={todo}
            setTodos={setTodos}
            todos={todos}
          />
        ))}
      </ul>

      <div className="d-flex justify-content-between my-5">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="btn btn-primary"
        >
          {"< Previous"}
        </button>
        <span>{page}</span>
        <button
          disabled={page === maxPageCount}
          onClick={() => setPage(page + 1)}
          className="btn btn-primary"
        >
          {"Next >"}
        </button>
      </div>
    </div>
  );
}

export default App;
