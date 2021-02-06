import { useStore } from '../../store';
import { actionTodoSetChecked } from '../../reducer';
import './index.scss';

function Item({ item: { id, name, color }, isChecked, dispatch }) { // eslint-disable-line no-shadow
  return (
    <div
      className={`c-todo-list-item${isChecked ? ' is-checked' : ''}`}
      style={{
        color
      }}
      onClick={() => dispatch(actionTodoSetChecked(id))}
    >
      {name}
    </div>
  );
}

export default function TodoList() {
  const [state, dispatch] = useStore();

  const { todos, checkedTodoIds } = state;

  return (
    <div className="c-todo-list">
      {todos.map((item) => <Item key={item.id} item={item} isChecked={checkedTodoIds[item.id]} dispatch={dispatch}/>)}
    </div>
  );
}
