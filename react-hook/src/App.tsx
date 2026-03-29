import { UserCard } from "./components/UserCard";

const user = {
  id: 1,
  name: "wang liming",
  email: "test@test.com",
  address: "TOKYO Chiba",
};

export const App = () => {
  return (
    <div>
      <p>react hook practice</p>
      <UserCard user={user} />
    </div>
  );
};
