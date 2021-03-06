import React from 'react';
import { useDispatch } from "react-redux";
import './app/App.css';
import { getDataSagaWatchAction } from '../modules/app/actions';

//remark: this page is not in use. Default from CRA
const App = () => {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => dispatch(getDataSagaWatchAction(6))}>GetUsers</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
