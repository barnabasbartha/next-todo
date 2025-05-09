import { DragDropList } from '@/components/drag-drop-list';
import { useTodos } from '@/hooks/useTodos';
import { Todo } from '@/models/todo';
import { useParams } from 'next/navigation';
import { TodoDragDropListItem } from './todo-drag-drop-list-item';

export interface TodoDragDropListProps {
  listId: string;
  todos: Todo[];
}

export const TodoDragDropList = ({ listId, todos }: TodoDragDropListProps) => {
  const { id } = useParams() as { id: string | undefined };
  const { setOrder } = useTodos(id ?? '');

  return (
    <DragDropList
      groupId={listId}
      list={todos}
      idKey="id"
      renderItem={(todoItem) => {
        return <TodoDragDropListItem todo={todoItem} />;
      }}
      onOrderChange={setOrder}
    />
  );
};
