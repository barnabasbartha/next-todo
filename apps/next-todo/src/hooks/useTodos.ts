import { TodoListContext } from '@/contexts/todo-list-context';
import { Todo } from '@/models/todo';
import { useContext, useMemo } from 'react';
import { useBoard } from './useBoard';

export const useTodos = (boardId: string) => {
  const { board, update } = useBoard(boardId);
  const { editingId, setEditingId } = useContext(TodoListContext);

  const openTodos = useMemo(
    () => board?.todos.filter(({ open }) => open) ?? [],
    [board]
  );
  const doneTodos = useMemo(
    () => board?.todos.filter(({ open }) => !open) ?? [],
    [board]
  );

  const toggleOpen = (id: string) => {
    update(boardId, (board) => ({
      todos: board.todos.map((item) => {
        if (item.id !== id) return item;
        return {
          ...item,
          open: !item.open,
        } satisfies Todo;
      }),
    }));
  };

  const setOrder = (id: string, destinationIndex: number) => {
    console.log(id, destinationIndex);
  };

  const addNew = (text: string) => {
    update(boardId, (board) => ({
      todos: [
        {
          id: Math.random().toString(), // add by db,
          open: true,
          text,
        },
        ...board.todos,
      ],
    }));
  };

  const editText = (id: string, text: string) => {
    update(boardId, (board) => ({
      todos: board.todos.map((item) => {
        if (item.id !== id) return item;
        return {
          ...item,
          text,
        } satisfies Todo;
      }),
    }));
  };

  const deleteTodo = (id: string) => {
    update(boardId, (board) => ({
      todos: board.todos.filter((item) => item.id !== id),
    }));
  };

  const stopEditing = () => {
    setEditingId(undefined);
  };

  return {
    todos: board?.todos ?? [],
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
