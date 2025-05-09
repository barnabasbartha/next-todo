'use client';

import { Card } from '@/components/card';
import { useBoard } from '@/hooks/useBoard';
import { useTodos } from '@/hooks/useTodos';
import { ArrowLeftIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { NewTodoItem } from './components/new-todo-item';
import { TodoDragDropList } from './components/todo-drag-drop-list';

export default function ListPage() {
  const { id } = useParams() as { id: string | undefined };
  const { board } = useBoard(id ?? '');
  const { openTodos, doneTodos } = useTodos(id ?? '');

  return (
    <>
      <div className="flex gap-4 justify-between w-full max-w-md md:max-w-xl px-5 items-center">
        <Link
          href="/lists"
          className="flex flex items-center w-1/3 cursor-pointer"
        >
          <ArrowLeftIcon className="w-6 h-6" />
          <span className="py-4 pl-2 pr-4">Back</span>
        </Link>

        {board && (
          <>
            <div className="w-1/3 font-light text-2xl">{board.name}</div>
            <div className="w-1/3"></div>
          </>
        )}
      </div>

      {!board && (
        <Card>
          <p className="text-center">Board not found</p>
        </Card>
      )}

      {board && (
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
      )}
    </>
  );
}
