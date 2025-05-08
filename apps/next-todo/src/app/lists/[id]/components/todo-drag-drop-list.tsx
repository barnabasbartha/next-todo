import { DragDropList } from '@/components/drag-drop-list';
import { newItemId, useTodos } from '@/hooks/useTodos';
import { Todo } from '@/models/todo';
import { TodoDragDropListItem } from './todo-drag-drop-list-item';

export interface TodoDragDropListProps {
  listId: string;
  todos: Todo[];
}

export const TodoDragDropList = ({ listId, todos }: TodoDragDropListProps) => {
  const { setOrder } = useTodos();

  return (
    <DragDropList
      groupId={listId}
      list={todos}
      idKey="id"
      itemDragEnabled={(todoItem) => todoItem.id !== newItemId}
      renderItem={(todoItem) => {
        return <TodoDragDropListItem todo={todoItem} />;
      }}
      onOrderChange={setOrder}
    />
  );
};
