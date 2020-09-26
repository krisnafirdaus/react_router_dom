import React, { useState } from "react";

export default function Todos() {
  const [textInput, setTextInput] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, todo: "membuat todos" },
    { id: 2, todo: "belajar state" },
  ]);

  const handleChange = (e) => {
    setTextInput(e.target.value);
  };

  const submitTodo = (e) => {
    e.preventDefault();

    let newTodo = {
      id: 1,
      todo: textInput,
    };

    if (todos.length > 0) {
      newTodo.id = todos[todos.length - 1].id + 1;
    }

    setTodos([...todos, newTodo]);
    setTextInput("");
  };

  const deleteTodo = (itemDel) => {
    let newTodos = todos.filter((item) => item.id !== itemDel.id);

    setTodos(newTodos);
    console.log(newTodos);
  };

  const [scracth, setscratch] = useState("");

  const styles = {
    "text-decoration-line": scracth,
    display: "inline",
  };

  const onScratch = (itemScratch) => {
    todos.filter((item) => item.id !== itemScratch.id);
    setscratch("line-through");
  };

  return (
    <div>
      <form>
        <textarea
          name="textInput"
          onChange={handleChange}
          placeholder="insert your to do list"
        ></textarea>
        <button onClick={submitTodo}>Submit</button>
      </form>
      <ul>
        {todos.map((item) => (
          <div key={item.id} style={styles}>
            <li>{item.todo}</li>
            <button
              onClick={() => {
                deleteTodo(item);
              }}
            >
              Delete
            </button>
            <button onClick={() => onScratch(item)}>Completed</button>
          </div>
        ))}
      </ul>
    </div>
  );
}
