import { memo } from "react";

export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  const style = {
    width: "100%",
    height: "200px",
    backgroundColor: "khaki",
  };
  console.log("--child area rendering--");
  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("...");
  });
  return (
    <>
      {open ? (
        <div style={style}>
          <p>child component</p>
          <button onClick={onClickClose}>close</button>
        </div>
      ) : null}
    </>
  );
});
