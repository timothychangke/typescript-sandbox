import './Todo List.css'

interface TodoListProps {
  items: { id: string; text: string }[];
  onDeleteTodo: (todoId: string) => void
}

const TodoList = (props: TodoListProps) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={() => props.onDeleteTodo(todo.id)}>DELETE</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
