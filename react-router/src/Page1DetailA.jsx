import { useLocation, useNavigate } from "react-router-dom";

export const Page1DetailA = () => {
  // const location = useLocation();
  // console.log(location);
  const navigate = useNavigate();

  const onClickBack = () => navigate(-1); //前画面に戻る、navigate(1):次へ進む
  const { state } = useLocation();
  console.log(state);
  return (
    <div>
      <h1>Page1 Detail A</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
