const style = {
  backgroundColor: '#c6e5d9',
  borderRadius: '8px',
  width: '400px',
  height: '30px',
  padding: '8px',
  margin: '8px',
};

export const InputTodo = (props) => {
  const { todoText, onChangeTodoText, onClickAdd } = props;
  return (
    <div style={style}>
      <input placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText} />
      <button onClick={onClickAdd}>追加</button>
    </div>
  );
};
