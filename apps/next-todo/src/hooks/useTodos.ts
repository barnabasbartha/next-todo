import { TodoListContext } from '@/contexts/todo-list-context';
import { Todo } from '@/models/todo';
import { useContext, useMemo } from 'react';

export const useTodos = () => {
  const { todos, setTodos, editingId, setEditingId } =
    useContext(TodoListContext);

  const openTodos = useMemo(() => todos.filter(({ open }) => open), [todos]);
  const doneTodos = useMemo(() => todos.filter(({ open }) => !open), [todos]);

  const toggleOpen = (id: string) => {
    setTodos((items) =>
      items.map((item) => {
        if (item.id !== id) return item;
        return {
          ...item,
          open: !item.open,
        } satisfies Todo;
      })
    );
  };

  const setOrder = (id: string, destinationIndex: number) => {
    console.log(id, destinationIndex);
  };

  const addNew = (text: string) => {
    setTodos((todos) => [
      {
        id: Math.random().toString(), // add by db,
        open: true,
        text,
      },
      ...todos,
    ]);
  };

  const editText = (id: string, text: string) => {
    setTodos((items) =>
      items.map((item) => {
        if (item.id !== id) return item;
        return {
          ...item,
          text,
        } satisfies Todo;
      })
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((items) => items.filter((item) => item.id !== id));
  };

  const stopEditing = () => {
    setEditingId(undefined);
  };

  return {
    todos,
    openTodos,
    doneTodos,
    toggleOpen,
    setOrder,
    addNew,
    editingId,
    startEditing: setEditingId,
    stopEditing,
    editText,
    deleteTodo,
  };
};
