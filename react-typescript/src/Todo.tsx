import type { FC } from "react";
import type { TodoType } from "./types/todo";

// type TodoType = {
//   userId: number;
//   title: string;
//   completed?: boolean;
// };

export const Todo: FC<Omit<TodoType, "id">> = (
  //   props: Pick<TodoType, "userId" | "title" | "completed">,
  props,
) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark} ${title}(ユーザー：${userId})`}</p>;
};

// props: Omit<TodoType, "id">
