import { useLocation, useParams } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  return (
    <div>
      <h1>UrlParameter Page</h1>
      <p>id: {id}</p>
      <p>クエリパラメーターは{query.get("name")}</p>
    </div>
  );
};
