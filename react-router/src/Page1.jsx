import { Link, Outlet, useNavigate } from "react-router-dom";
export const Page1 = () => {
  const arr = [...Array(100).keys()];
  const navigate = useNavigate();
  const onClickNavigate = () => navigate("/page1/detailB");
  return (
    <div>
      <h1>Page1</h1>
      <Link to="/page1/detailA" state={arr}>
        page1 detail A
      </Link>
      <br />
      <Link to="/page1/detailB">page1 detail B</Link>
      <br />
      <button onClick={onClickNavigate}>DetailA</button>
    </div>
  );
};

// 自動画面遷移時の値渡す
// navigate("/page1/detailA", {
//   state: { data: "hello" },
// });
