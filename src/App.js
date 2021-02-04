import { useEffect } from 'react';

import Clock from './components/clock';

import { actionLoading, actionConfigurationSet } from './reducer';
import { fetchJson } from './utils';
import { useStore } from './store';
import 'antd/dist/antd.css';

export default function App() {
  const [, dispatch] = useStore();

  useEffect(() => {
    dispatch(actionLoading(true));

    fetchJson(`data/configuration.json`)
      .then((newSchema) => dispatch(actionConfigurationSet(newSchema)))
      .then(() => dispatch(actionLoading(false)));

    // empty array to make this effect run only once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Clock/>
  );
}
