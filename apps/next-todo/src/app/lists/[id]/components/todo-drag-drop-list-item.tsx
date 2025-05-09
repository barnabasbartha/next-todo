import { useTodos } from '@/hooks/useTodos';
import { Todo } from '@/models/todo';
import { PencilIcon } from '@heroicons/react/16/solid';
import { useParams } from 'next/navigation';
import { TodoItemInput } from './todo-item-input';

interface TodoDragDropListItemProps {
  todo: Todo;
}

export const TodoDragDropListItem = ({ todo }: TodoDragDropListItemProps) => {
  const { id } = useParams() as { id: string | undefined };
  const { editingId, stopEditing, editText, startEditing, toggleOpen } =
    useTodos(id ?? '');

  const isEditing = todo.id === editingId;

  const handleValueChange = (value: string) => {
    if (!editingId) return;
    const text = value.trim();
    if (text) {
      editText(editingId, text);
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
      <input
        type="checkbox"
        checked={!todo.open}
        onChange={() => {
          //
        }}
        className="mr-3 h-5 w-5 flex-shrink-0"
      />
      {isEditing ? (
        <TodoItemInput
          defaultValue={todo.text}
          handleValueChange={handleValueChange}
        />
      ) : (
        <>
          <span className={`select-none w-full`}>{todo.text}</span>
          {todo.open && (
            <PencilIcon
              className="w-6 h-6 text-gray-400"
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
