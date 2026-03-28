import axios from "axios";
import { useState } from "react";

export const App = () => {
  const [todos, setTodos] = useState<any>([]);
  const onClickFetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setTodos(res.data);
    });
  };
  return (
    <div>
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <p>{todo.title}</p>
      ))}
    </div>
  );
};
