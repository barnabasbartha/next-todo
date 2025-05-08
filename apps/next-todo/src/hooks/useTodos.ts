import { TodoListContext } from '@/contexts/todo-list-context';
import { Todo } from '@/models/todo';
import { useContext, useMemo } from 'react';

export const useTodos = () => {
  const { todos, setTodos, editingId, setEditingId } =
    useContext(TodoListContext);

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
    const index = todoIndexById[id];
    const value = todos[index];
    if (!value) return;
    const newValue: Todo = {
      ...value,
      text,
    };
    setTodos((values) => [
      ...values.slice(0, index),
      newValue,
      ...values.slice(index + 1),
    ]);
  };

  const deleteTodo = (id: string) => {
    if (!id) return;
    const index = todoIndexById[id];
    const value = todos[index];
    if (!value) return;
    setTodos((values) => [
      ...values.slice(0, index),
      ...values.slice(index + 1),
    ]);
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
