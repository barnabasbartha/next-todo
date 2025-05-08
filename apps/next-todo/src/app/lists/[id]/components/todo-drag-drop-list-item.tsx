import React from 'react';
import { newItemId, useTodos } from '@/hooks/useTodos';
import { Todo } from '@/models/todo';
import { useLongPress } from 'use-long-press';
import { PencilIcon } from '@heroicons/react/16/solid';

interface TodoDragDropListItemProps {
  todo: Todo;
}

export const TodoDragDropListItem = ({ todo }: TodoDragDropListItemProps) => {
  const {
    editingId,
    stopEditing,
    editText,
    deleteTodo,
    startEditing,
    toggleOpen,
  } = useTodos();

  const isEditing = todo.id === editingId;
  const isNewItem = todo.id === newItemId;

  const handleValueChange = (value: string) => {
    if (!editingId) return;
    const text = value.trim();
    if (text) {
      editText(editingId, text);
    } else if (editingId === newItemId) {
      deleteTodo(editingId);
    }
    stopEditing();
  };

  return (
    <div
      className={`${
        !todo.open ? 'opacity-20' : ''
      } flex flex-row justify-item items-center w-full cursor-pointer`}
      onClick={() => {
        if (isEditing) return;
        toggleOpen(todo.id);
      }}
    >
      {!isNewItem && (
        <input
          type="checkbox"
          checked={!todo.open}
          onChange={() => {
            toggleOpen(todo.id);
            stopEditing();
          }}
          className="mr-3 h-5 w-5 flex-shrink-0"
        />
      )}
      {isEditing ? (
        <input
          type="text"
          className="h-6 w-full bg-transparent outline-none"
          defaultValue={todo.text}
          autoFocus
          placeholder="To-do description"
          maxLength={64}
          onBlur={(e) => handleValueChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleValueChange((e.target as HTMLInputElement).value);
            }
            if (e.key === 'Escape') {
              handleValueChange('');
            }
          }}
          onSubmit={(e) => {
            e.preventDefault();
            if (!e.target) return;
            handleValueChange((e.target as HTMLInputElement).value);
          }}
        />
      ) : (
        <>
          <span className={`select-none w-full`}>{todo.text}</span>
          {todo.open && (
            <PencilIcon
              className="w-6 h-6 text-gray-500"
              onClick={(e) => {
                startEditing(todo.id);
                e.preventDefault();
                e.stopPropagation();
              }}
            />
          )}
        </>
      )}
    </div>
  );
};
