'use client';

import { Card } from '@/components/card';
import { useBoard } from '@/hooks/useBoard';
import { useTodos } from '@/hooks/useTodos';
import { useParams } from 'next/navigation';
import { NewTodoItem } from './components/new-todo-item';
import { TodoDragDropList } from './components/todo-drag-drop-list';

export default function ListPage() {
  const { id } = useParams() as { id: string | undefined };
  const { board } = useBoard(id ?? '');
  const { openTodos, doneTodos } = useTodos(id ?? '');

  if (!board) {
    return (
      <Card>
        <p className="text-center">Board not found</p>
      </Card>
    );
  }

  return (
    <>
      <Card title="To-dos">
        <NewTodoItem />
        <TodoDragDropList listId="open-todos" todos={openTodos} />
      </Card>

      {!!doneTodos.length && (
        <Card title="Done">
          <TodoDragDropList listId="done-todos" todos={doneTodos} />
        </Card>
      )}
    </>
  );
}
