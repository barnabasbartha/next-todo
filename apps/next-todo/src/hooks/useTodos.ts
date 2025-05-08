import { TodoListContext } from '@/contexts/todo-list-context';
import { Todo } from '@/models/todo';
import { useState, useMemo, useContext } from 'react';

export const newItemId = '_';

export const useTodos = () => {
  // Global states
  const initialTodos: Todo[] = [
    // { id: '1', text: 'Buy groceries', open: true },
    // { id: '2', text: 'Walk the dog', open: true },
    // { id: '3', text: 'Read a book', open: false },
  ];
  const [todos, setTodos] = useState(initialTodos);

  // Reducers
  const todoIndexById = useMemo(
    () =>
      todos.reduce(
        (result, item, index) => ({ ...result, [item.id]: index }),
        {} as { [key: string]: number }
      ),
    [todos]
  );

  const openTodos = useMemo(() => todos.filter(({ open }) => open), [todos]);
  const doneTodos = useMemo(() => todos.filter(({ open }) => !open), [todos]);

  const { editingId, setEditingId } = useContext(TodoListContext);

  const toggleOpen = (id: string) => {
    const index = todoIndexById[id];
    const value = todos[index];
    if (!value) return;
    const newValue: Todo = {
      ...value,
      open: !value.open,
    };
    setTodos((values) => [
      ...values.slice(0, index),
      newValue,
      ...values.slice(index + 1),
    ]);
  };

  const setOrder = (id: string, destinationIndex: number) => {
    console.log(id, destinationIndex);
  };

  const add = () => {
    const id = newItemId;
    setEditingId(id);
    setTodos((todos) => [
      {
        id,
        open: true,
        text: '',
      },
      ...todos,
    ]);
  };

  return {
    todos,
    openTodos,
    doneTodos,
    toggleOpen,
    setOrder,
    add,
    editingId,
  };
};
