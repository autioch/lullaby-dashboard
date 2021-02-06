import { useEffect } from 'react';

import Loader from './components/loader';
import Clock from './components/clock';
import Video from './components/video';
import TodoList from './components/todoList';

import { actionLoading, actionListsSet, actionListSelect } from './reducer';
import { fetchJson } from './utils';
import { useStore } from './store';
import { Select } from 'antd';
import 'antd/dist/antd.css';
import './App.scss';

const { Option } = Select; // eslint-disable-line no-shadow

export default function App() {
  const [state, dispatch] = useStore();
  const { isLoading, lists, listId } = state;

  useEffect(() => {
    dispatch(actionLoading(true));

    fetchJson(`data/lists.json`)
      .then((newLists) => {
        dispatch(actionListsSet(newLists));
        dispatch(actionListSelect(newLists?.[0].id));
        dispatch(actionLoading(false));
      });

    // empty array to make this effect run only once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return (<Loader/>);
  }

  return (
    <div className="app">
      <div className="app-section">
        <TodoList/>
      </div>
      <div className="app-section">
        <Video/>
        <Clock/>
        <Select value={listId} onChange={(selectedId) => dispatch(actionListSelect(selectedId))} >
          {lists.map(({ id, label }) => <Option key={id} value={id}>{label}</Option>)}
        </Select>
      </div>
    </div>
  );
}
