export const TodoInput = (props) => {
  const { onChange, todoText, onClick, disabled } = props;
  return (
    <div>
      <input
        onChange={onChange}
        placeholder="please enter a todo"
        value={todoText}
        disabled={disabled}
      />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
