import * as React from 'react';
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
  const { name, color, age, canFly } = animal;

  return (
    <div>
      <h1>REACT - TS - PLAYGROUND</h1>
      <div>
        {name} is {color} and {age} years old and{' '}
        {canFly ? 'can fly' : 'can not fly'} :-)
      </div>
    </div>
  );
};

render(<App />, document.getElementById('root'));
