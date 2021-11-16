import * as React from 'react';
import * as R from 'ramda';
import { render } from 'react-dom';
import { animal } from './model';
import './style.css';

const App = () => {
  console.log(R, animal);

  return (
    <div>
      <h1>PLAYGROUND</h1>
    </div>
  );
};

render(<App />, document.getElementById('root'));
