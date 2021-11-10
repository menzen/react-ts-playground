import * as React from 'react';
import * as R from 'ramda';
import { render } from 'react-dom';
import './style.css';

type Animal = {
  name: string;
};

type AnimalColor = {
  color: string;
};

type AnimalAge = {
  age: number;
};

type FlyingAnimal = Animal &
  AnimalColor &
  AnimalAge & {
    canFly: boolean;
  };

const animal: FlyingAnimal = {
  name: 'Nachtigal',
  color: 'gray',
  age: 12,
  canFly: true,
};

const App = () => {
  console.log(R, animal);

  return (
    <div>
      <h1>PLAYGROUND</h1>
    </div>
  );
};

render(<App />, document.getElementById('root'));
