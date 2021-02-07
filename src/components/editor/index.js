import Left from './left';
import Right from './right';
import { useStore } from '../../store';
import { useState } from 'react';
import { actionEditionToggle } from '../../reducer';
import './index.scss';

export default function Editor() {
  const [state, dispatch] = useStore();
  const [selectedId, setSelectedId] = useState();
  const { lists } = state;
  const selectedList = lists.find((list) => list.id === selectedId);

  return (
    <div className="c-editor__overlay">
      <div className="c-editor">
        <div className="c-editor__header">
          <div className="c-editor__title">Edit todos</div>
          <div className="c-editor__close" onClick={() => dispatch(actionEditionToggle(false))}>X</div>
        </div>
        <div className="c-editor__content">
          <Left lists={lists} setSelectedId={setSelectedId} dispatch={dispatch}/>
          <Right list={selectedList} />
        </div>
        <div className="c-editor__footer">
          <div className="c-editor__close" onClick={() => dispatch(actionEditionToggle(false))}>Close</div>
        </div>
      </div>
    </div>
  );
}
