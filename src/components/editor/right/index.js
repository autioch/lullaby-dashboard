import { Input } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { actionListEdit, actionTodoAdd, actionTodoEdit, actionTodoRemove } from '../../../reducer';
import './index.scss';

function TodoItem({ item, listId, dispatch }) {
  const { id, label, fontColor } = item;
  const itemEditHandler = (prop) => (evOrValue) => dispatch(actionTodoEdit({
    ...item,
    [prop]: evOrValue.target ? evOrValue.target.value : evOrValue
  }));

  return (
    <div className="c-editor-item">
      <input className="c-editor-item__color" type="color" value={fontColor} onChange={itemEditHandler('fontColor')}/>
      <Input className="c-editor-item__label" placeholder="Label" value={label} onChange={itemEditHandler('label')} />
      <DeleteOutlined className="c-editor-item__remove" onClick={() => dispatch(actionTodoRemove(listId, id))} />
    </div>
  );
}

export default function EditorRight({ list, todos, dispatch }) {
  const listEditHandler = (prop) => (evOrValue) => dispatch(actionListEdit({
    ...list,
    [prop]: evOrValue.target ? evOrValue.target.value : evOrValue
  }));

  return (
    <div className="c-editor-right">
      <Input placeholder="List name" value={list.label} onChange={listEditHandler('label')} />
      <Input placeholder="https://www.youtube.com/embed/XULUBg_ZcAU" value={list.videoUrl} onChange={listEditHandler('videoUrl')} />
      <div className="c-editor-colors">
        <div>
          App background <input type="color" value={list.backgroundColor} onChange={listEditHandler('backgroundColor')}/>
        </div>
        <div>
          Text color <input type="color" value={list.fontColor} onChange={listEditHandler('fontColor')}/>
        </div>
      </div>
      <div>checkbox allow edition in main view: input below video, add/edit/remove items in the list, manipulating list of lists</div>
      <div>TODO items</div>
      <div>todo: allow reordering items</div>
      <div className="c-editor-list-items">
        {todos.map((todo, index) => <TodoItem key={index} item={todo} listId={list.id} dispatch={dispatch} />)}
      </div>
      <div
        className="c-editor-left__item is-hidden"
        onClick={() => dispatch(actionTodoAdd(list.id))}
      >+ Add item</div>
    </div>
  );
}
