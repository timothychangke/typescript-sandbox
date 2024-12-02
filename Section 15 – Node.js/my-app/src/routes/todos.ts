import { Router } from 'express';
import { createTodo } from '../controllers/todos';
import { getTodos } from '../controllers/todos';
import { updateTodos } from '../controllers/todos';
import { deleteTodo } from '../controllers/todos';

const router = Router();

router.post('/', createTodo);
router.get('/', getTodos);
router.patch('/:id', updateTodos);
router.delete('/:id', deleteTodo);

export default router;
