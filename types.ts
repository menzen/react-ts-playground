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

export { Animal, AnimalColor, AnimalAge, FlyingAnimal };
