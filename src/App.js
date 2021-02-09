import { useEffect } from 'react';

import Loader from './components/loader';
import Clock from './components/clock';

// import Video from './components/video';
import TodoList from './components/todoList';
import Editor from './components/editor';

import { actionLoading, actionDataSet, actionListSelect, actionEditionToggle } from './reducer';
import { fetchJson } from './utils';
import { useStore } from './store';
import { Button, Select } from 'antd';
import 'antd/dist/antd.css';
import './App.scss';

const { Option } = Select; // eslint-disable-line no-shadow

export default function App() {
  const [state, dispatch] = useStore();
  const { isLoading, isEditing, lists, listId } = state;
  const currentList = lists.find((list) => list.id === listId) ?? {};
  const { fontColor, backgroundColor } = currentList;

  useEffect(() => {
    dispatch(actionLoading(true));

    fetchJson(`data/data.json`)
      .then((data) => {
        dispatch(actionDataSet(data));
        dispatch(actionListSelect(data.lists?.[0].id));
        dispatch(actionLoading(false));
      });

    // empty array to make this effect run only once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.body.style.color = fontColor;
    document.body.style.background = backgroundColor;
  }, [fontColor, backgroundColor]);

  if (isLoading) {
    return (<Loader/>);
  }

  return (
    <div className="app">
      <div className="app-section">
        <TodoList/>
      </div>
      <div className="app-section">
        {/* <Video/>*/}
        <Clock/>
        <Select value={listId} onChange={(selectedId) => dispatch(actionListSelect(selectedId))} >
          {lists.map(({ id, label }) => <Option key={id} value={id}>{label}</Option>)}
        </Select>
        <Button onClick={() => dispatch(actionEditionToggle(true))}>Edit</Button>
      </div>
      {isEditing ? <Editor listId={listId}/> : ''}
    </div>
  );
}
