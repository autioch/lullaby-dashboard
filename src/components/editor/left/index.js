import { actionListAdd } from '../../../reducer';
import './index.scss';

function Item({ setSelectedId, item: { id, label, backgroundColor, fontColor } }) {
  return (
    <div
      className="c-editor-left__item"
      style={{
        color: fontColor,
        backgroundColor
      }}
      onClick={() => setSelectedId(id)}
    >
      {label}
    </div>
  );
}

export default function EditorLeft({ lists, setSelectedId, dispatch }) {
  return (
    <div className="c-editor-left">
      {lists.map((list, index) => <Item key={index} item={list} setSelectedId={setSelectedId}/>)}
      <div
        className="c-editor-left__item is-sticky"
        onClick={() => dispatch(actionListAdd())}
      >+ Add List</div>
    </div>
  );
}
