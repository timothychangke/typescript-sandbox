// however, constantly setting request, response and next types can be cumbersome. One work around is to use a RequestHandler instead
import { Request, Response, NextFunction } from 'express';
import { RequestHandler } from 'express';
import { Todo } from '../models/todo';

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(Math.random().toString(), text);

  TODOS.push(newTodo);

  res.status(200).json({ message: 'Created the todo', createTodo: newTodo });
};

export const getTodos: RequestHandler = (req, res, next) => {
  res.json({ todos: TODOS });
};

export const updateTodos: RequestHandler<{id: string}> = (req, res, next) => {
    const todoId = req.params.id

    const updatedText = (req.body as {text: string}).text

    const todoIndex = TODOS.findIndex(todo => todo.id === todoId)
    if (todoIndex < 0) {
        throw new Error('Could not find todo')
    } 
    TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, updatedText)
    res.json({mesage: 'Todo Updated', updateTodos: TODOS[todoIndex]})
}

export const deleteTodo: RequestHandler = (req, res, next) => {
    const todoId = req.params.id

    const todoIndex = TODOS.findIndex(todo => todo.id === todoId)
    if (todoIndex < 0) {
        throw new Error('Could not find todo')
    } 
    TODOS.splice(todoIndex, 1)
    res.json({mesage: 'Todo Deleted'})
}
