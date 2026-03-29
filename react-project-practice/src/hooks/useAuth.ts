import { useCallback, useState } from "react";
import type { user } from "../types/api/user";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useMessage } from "./useMessage";

export const useAuth = () => {
  const navigate = useNavigate();
  const { showMessage } = useMessage();
  const [loading, setLoading] = useState(false);
  const login = useCallback(
    (id: string) => {
      setLoading(true);
      axios
        .get<user>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            showMessage({ title: "ログインしました", status: "success" });
            navigate("/home");
          } else {
            showMessage({ title: "ユーザーが見つかりません", status: "info" });
            // alert("ユーザーが見つかりません");
          }
        })
        // .catch(() => alert("ログインできません"))
        .catch(() =>
          showMessage({ title: "ログインできません", status: "info" }),
        )
        .finally(() => setLoading(false));
    },
    [navigate, showMessage],
  );
  return { login, loading };
};
