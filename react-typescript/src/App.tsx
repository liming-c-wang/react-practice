import axios from "axios";
import { useState } from "react";
import "./App.css";
import { Todo } from "./Todo";
import type { TodoType } from "./types/todo";
import { Text } from "./Text";
import { UserProfile } from "./UserProfile";

// type TodoType = {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// };
const user = {
  name: "wang liming",
  // hobbies: ["映画", "芸術"],
};

export const App = () => {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const onClickFetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };
  return (
    <div>
      <button onClick={onClickFetchData}>データ取得</button>
      <UserProfile user={user} />
      <Text color="red" fontSize="16px" />
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        ></Todo>
      ))}
    </div>
  );
};
