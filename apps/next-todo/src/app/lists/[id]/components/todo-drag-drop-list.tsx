import { DragDropList } from '@/components/drag-drop-list';
import { newItemId, useTodos } from '@/hooks/useTodos';
import { Todo } from '@/models/todo';

export interface TodoDragDropListProps {
  listId: string;
  todos: Todo[];
  onCheck: (id: string) => void;
  onOrderChange: (id: string, destinationIndex: number) => void;
}

export const TodoDragDropList = ({
  listId,
  todos,
  onCheck,
  onOrderChange,
}: TodoDragDropListProps) => {
  const { editingId, stopEditing, editText, deleteTodo } = useTodos();

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
    <DragDropList
      groupId={listId}
      list={todos}
      idKey="id"
      itemDragEnabled={(todoItem) => todoItem.id !== newItemId}
      renderItem={(todoItem) => {
        const isEditing = todoItem.id === editingId;
        const isNewItem = todoItem.id === newItemId;
        return (
          <div
            className={`${
              !todoItem.open ? 'opacity-20' : ''
            } flex flex-row justify-item items-center w-full`}
          >
            {!isNewItem && (
              <input
                type="checkbox"
                checked={!todoItem.open}
                onChange={() => onCheck(todoItem.id)}
                className="mr-3 h-5 w-5 cursor-pointer flex-shrink-0"
              />
            )}
            {isEditing ? (
              <input
                type="text"
                className="h-5 w-full bg-transparent outline-none"
                defaultValue={todoItem.text}
                autoFocus
                placeholder="To-do description"
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
              <span
                className={`${
                  !todoItem.open ? 'line-through' : ''
                } select-none w-full`}
              >
                {todoItem.text}
              </span>
            )}
          </div>
        );
      }}
      onOrderChange={onOrderChange}
    />
  );
};
