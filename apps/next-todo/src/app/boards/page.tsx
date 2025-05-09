'use client';

import { Card } from '@/components/card';
import { useAuth } from '@/hooks/useAuth';
import { useBoards } from '@/hooks/useBoards';
import Link from 'next/link';

export default function BoardsPage() {
  const { boards } = useBoards();
  const { user } = useAuth();
  return (
    <>
      <div className="flex gap-4 justify-center w-full max-w-md md:max-w-xl px-5 items-center">
        <div className="font-light text-2xl py-10 text-center">{`Hi, ${user.name}!`}</div>
      </div>
      <div className="flex gap-4 justify-center w-full max-w-md md:max-w-xl px-5 items-center">
        <div className="text-sm py-4 text-sky-800 text-center font-bold uppercase">
          My boards
        </div>
      </div>

      {boards.map((board) => (
        <Link
          key={board.id}
          href={`/boards/${board.id}`}
          className="w-full flex flex-col gap-2 md:gap-8 justify-center items-center group"
        >
          <Card className="group-hover:bg-sky-50 group-hover:text-sky-900 transition">
            <p className="text-center">{board.name}</p>
          </Card>
        </Link>
      ))}
    </>
  );
}
