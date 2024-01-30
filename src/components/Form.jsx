import { v4 } from "uuid";
import axios from "axios";

const Form = ({ setTodos }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const title = e.target[0].value;
    const status = e.target[1].value;

    if (!title) {
      return alert("Please Add a Note...");
    }

    const newTodo = {
      title: title,
      status: status,
      id: v4(),
      date: new Date().toLocaleDateString(),
    };

    console.log(newTodo);

    // fetch("http://localhost:3000/todos",{
    //     method: 'POST',
    //     body: JSON.stringify(newTodo),
    // })

    // .then(() => setTodos((prev) => [newTodo, ...prev ]))

    // .catch(() => alert('We Apologilize,Something Went Wrong'))

    axios
      .post("/todos", newTodo)

      .then(() => setTodos((todos) => [newTodo, ...todos]))

      .catch(() => alert("We Apologilize,Something Went Wrong"));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex justify-content-center gap-3 my-5"
    >
      <input
        placeholder="Add a Note..."
        className="form-control shadow"
        type="text"
      />

      <select className="form-select w-50 shadow">
        <option>Medium</option>
        <option value={"important"}>Urgent</option>
        <option value={"daily"}>Low</option>
        <option value={"job"}>High</option>
      </select>

      <button type="submit" className="btn btn-secondary shadow">
        Send
      </button>
    </form>
  );
};

export default Form;
