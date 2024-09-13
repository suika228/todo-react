const style = {
  backgroundColor: '#c6e5d9',
  borderRadius: '8px',
  width: '400px',
  height: '30px',
  padding: '8px',
  margin: '8px',
};

export const InputTodo = (props) => {
  const { todoText, onChangeTodoText, onClickAdd, isGreaterThanFive } = props;
  return (
    <div style={style}>
      <input
        disabled={isGreaterThanFive}
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChangeTodoText}
      />
      <button disabled={isGreaterThanFive} onClick={onClickAdd}>
        追加
      </button>
    </div>
  );
};
