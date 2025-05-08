'use client';

import { Card } from '@/components/card';
import { TodoListContextProvider } from '@/contexts/todo-list-context';
import { useTodos } from '@/hooks/useTodos';
import { NewTodoItem } from './components/new-todo-item';
import { TodoDragDropList } from './components/todo-drag-drop-list';

function ListPage() {
  const { openTodos, doneTodos } = useTodos();

  return (
    <main className="flex flex-col gap-2 md:gap-8 min-h-screen items-center md:justify-center">
      <Card title="To-dos">
        <NewTodoItem />
        <TodoDragDropList listId="open-todos" todos={openTodos} />
      </Card>

      {!!doneTodos.length && (
        <Card title="Done">
          <TodoDragDropList listId="done-todos" todos={doneTodos} />
        </Card>
      )}
    </main>
  );
}

export default function PageWithProvider() {
  return (
    <TodoListContextProvider>
      <ListPage />
    </TodoListContextProvider>
  );
}
