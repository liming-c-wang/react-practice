import axios from "axios";
export const App = () => {
  const onClickUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onClickUser1 = () => {
    // https://jsonplaceholder.typicode.com/users/3
    axios.get("https://jsonplaceholder.typicode.com/users?id=1").then((res) => {
      console.log(res);
    });
  };
  return (
    <div>
      <p>hello</p>
      <button onClick={onClickUsers}>users</button>
      <br />
      <button onClick={onClickUser1}>id=1のuser</button>
    </div>
  );
};
