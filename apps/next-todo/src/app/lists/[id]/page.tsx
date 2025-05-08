'use client';

import { Card } from '@/components/card';
import { TodoDragDropList } from './components/todo-drag-drop-list';
import { useTodos } from '@/hooks/useTodos';
import { TodoListContextProvider } from '@/contexts/todo-list-context';
import { PlusIcon } from '@heroicons/react/16/solid';

function ListPage() {
  const { openTodos, doneTodos, addNew } = useTodos();

  return (
    <main className="flex flex-col gap-2 md:gap-8 min-h-screen items-center md:justify-center">
      {!!openTodos.length && (
        <Card title="To-dos">
          <TodoDragDropList listId="open-todos" todos={openTodos} />
        </Card>
      )}

      {!openTodos.length && !doneTodos.length && (
        <Card>
          <p
            className="text-lg text-gray-600 text-center py-[25%] cursor-pointer flex items-center justify-center gap-2"
            onClick={addNew}
          >
            <PlusIcon className="w-8 h-8" />
            <span>Click to add item</span>
          </p>
        </Card>
      )}

      {!openTodos.length && !!doneTodos.length && (
        <Card>
          <div
            className="flex flex-col items-center gap-2 cursor-pointer "
            onClick={addNew}
          >
            <span className="text-4xl">✅</span>
            <p className="text-lg text-gray-600">Finally, all Done!</p>
            <p className="text-lg text-gray-600 text-center py-4 flex items-center justify-center gap-2">
              <PlusIcon className="w-8 h-8" />
              <span>Click to add item</span>
            </p>
          </div>
        </Card>
      )}

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
