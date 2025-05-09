import { Todo } from './todo';

export interface Board {
  id: string;
  name: string;
  todos: Todo[];
}
