import axios from "axios";
import { UserCard } from "./components/UserCard";
import type { User } from "./types/api/user";
import { useState } from "react";
import type { userProfile } from "./types/userProfile";

const user = {
  id: 1,
  name: "wang liming",
  email: "test@test.com",
  address: "TOKYO Chiba",
};

export const App = () => {
  const [userProfiles, setUserProfiles] = useState<Array<userProfile>>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onClickFetchUser = () => {
    setLoading(true);
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const data = res.data.map((user) => ({
          id: user.id,
          name: `${user.name}(${user.username})`,
          email: user.email,
          address: `${user.address.city} ${user.address.suite} ${user.address.street}`,
        }));
        setUserProfiles(data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div>
      <p>react hook practice</p>
      <button onClick={onClickFetchUser}>データ取得</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>データ取得に失敗しました</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {userProfiles?.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
};
