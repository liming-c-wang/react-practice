import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>Page2</h1>
      <Link to="/page2/8888">URL Parameter</Link>
      <br />
      <Link to="/page2/8888?name=wang">URL Parameter</Link>
    </div>
  );
};
