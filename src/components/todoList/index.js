import { useStore } from '../../store';
import { actionTodoSetChecked } from '../../reducer';
import './index.scss';

function Item({ item: { id, label, fontColor }, isChecked, dispatch }) { // eslint-disable-line no-shadow
  return (
    <div
      className={`c-todo-list-item${isChecked ? ' is-checked' : ''}`}
      style={{
        color: fontColor
      }}
      onClick={() => dispatch(actionTodoSetChecked(id))}
    >
      {label}
    </div>
  );
}

export default function TodoList() {
  const [state, dispatch] = useStore();
  const { todos, checkedTodoIds, listId } = state;
  const currentTodos = todos.filter((todo) => todo.listId === listId);

  return (
    <div className="c-todo-list">
      {currentTodos.map((item) => <Item key={item.id} item={item} isChecked={checkedTodoIds[item.id]} dispatch={dispatch}/>)}
    </div>
  );
}
