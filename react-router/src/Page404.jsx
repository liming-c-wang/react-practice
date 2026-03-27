import { Link } from "react-router-dom";
export const Page404 = () => {
  return (
    <div>
      <br />
      <p>ページがみつかりません</p>
      <Link to="/">TOPに戻る</Link>
    </div>
  );
};
