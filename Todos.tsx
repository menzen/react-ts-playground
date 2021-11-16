import {
  _log,
  fetchJSON,
  React,
  useState,
  useSWR,
  useEffect,
  R,
} from './utils';

const todoAPI = 'https://jsonplaceholder.typicode.com/todos/';
const sort = R.sortBy(R.prop('completed'));

export const Todos = () => {
  const { data, error } = useSWR(todoAPI, fetchJSON);
  const [todos = [], setTodos] = useState();
  const showDone = () => setTodos(data.filter((todo) => todo.completed));
  const showTodo = () => setTodos(data.filter((todo) => !todo.completed));
  const showAll = () => setTodos(data);
  const orderTodos = () => setTodos(sort(data) as any);

  useEffect(() => {
    setTodos(data);
  }, [data]);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <ul className="todos">
      <li>
        <button onClick={showDone}>done</button>
        <button onClick={showTodo}>todo</button>
        <button onClick={showAll}>all</button>
        <button onClick={orderTodos}>order</button>
      </li>
      {todos.map(({ title, completed, id }) => (
        <li>
          <span>{id}. </span>
          <h2>
            {title}
            {completed && (
              <span
                className="check"
                dangerouslySetInnerHTML={{ __html: ' &check;' }}
              />
            )}
          </h2>
        </li>
      ))}
    </ul>
  );
};
