import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import { Todo } from './models/todo';

import { useState } from 'react';
function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  // const todos = [{ id: 't1', text: 'Finish the course' }];

  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text },
    ]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== todoId))
  }
  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler}/>
    </div>
  );
}

export default App;
