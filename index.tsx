import * as React from 'react';
import { render } from 'react-dom';
import { Todos } from './Todos';
import './style.css';

const App = () => {
  return (
    <div>
      <h1>PLAYGROUND</h1>
      <Todos />
    </div>
  );
};

render(<App />, document.getElementById('root'));
