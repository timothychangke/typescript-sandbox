import { useRef } from "react";
import './New Todo.css'

type NewTodoProps = {
    onAddTodo: (todoText: string) => void
}

const NewTodo = (props: NewTodoProps) => {
    // specify the type of of the ref object its pointed to as well as state the default type to be null
    const textInputRef = useRef<HTMLInputElement>(null)
    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault()
        // only we know that this will not be null as the function is called only when the form is submitted, which is when the components have been rendered
        const enteredText = textInputRef.current!.value
        props.onAddTodo(enteredText)
    }
  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef}/>
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
