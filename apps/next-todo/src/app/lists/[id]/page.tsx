'use client';

import { Card } from '@/components/card';
import { TodoDragDropList } from './components/todo-drag-drop-list';
import { useTodos } from '@/hooks/useTodos';
import { TodoListContextProvider } from '@/contexts/todo-list-context';

function ListPage() {
  const { openTodos, doneTodos, setOrder, toggleOpen, add } = useTodos();

  return (
    <main className="flex flex-col gap-2 md:gap-8 min-h-screen items-center md:justify-center">
      {!!openTodos.length && (
        <Card title="To-dos">
          <TodoDragDropList
            listId="open-todos"
            todos={openTodos}
            onCheck={toggleOpen}
            onOrderChange={setOrder}
          />
        </Card>
      )}

      {!openTodos.length && !doneTodos.length && (
        <Card>
          <p
            className="text-lg text-gray-600 text-center py-[25%] cursor-pointer"
            onClick={add}
          >
            Click to add item
          </p>
        </Card>
      )}

      {!openTodos.length && !!doneTodos.length && (
        <Card>
          <div className="flex flex-col items-center gap-2">
            <span className="text-4xl">✅</span>
            <p className="text-lg text-gray-600">Finally, all Done!</p>
            <p
              className="text-lg text-gray-600 text-center py-4 cursor-pointer"
              onClick={add}
            >
              Click to add more item
            </p>
          </div>
        </Card>
      )}

      {!!doneTodos.length && (
        <Card title="Done">
          <TodoDragDropList
            listId="done-todos"
            todos={doneTodos}
            onCheck={toggleOpen}
            onOrderChange={setOrder}
          />
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
