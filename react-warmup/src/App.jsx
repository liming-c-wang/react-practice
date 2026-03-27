import { useState } from "react";
import { ChildArea } from "./components/ChildArea";
import { useCallback } from "react";

export const App = () => {
  console.log("--App--");
  // const [count, setCount] = useState(0);
  // const onClickCount = () => setCount(count + 1);
  const [inputTxt, setInputTxt] = useState("");
  const [open, setOpen] = useState(false);
  const onChangeTxt = (e) => setInputTxt(e.target.value);
  const onClickOpen = () => setOpen(!open);
  const onClickClose = useCallback(() => setOpen(false), [open]);
  return (
    <div>
      {/* <p>my react exercise page</p>
      <button onClick={onClickCount}>click me</button>
      <p>{count}</p> */}
      <input value={inputTxt} onChange={onChangeTxt} />
      <br />
      <br />
      <br />
      <button onClick={onClickOpen}>display</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
};
