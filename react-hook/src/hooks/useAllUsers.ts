import { useState } from "react";
import axios from "axios";
import type { userProfile } from "../types/userProfile";
import type { User } from "../types/api/user";

export const useAllUsers = () => {
  const [userProfiles, setUserProfiles] = useState<Array<userProfile>>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getUsers = () => {
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

  //配列返す、またはオブジェクト返す、二通りある
  return { getUsers, userProfiles, loading, error };
};
