import { Board } from '@/models/board';
import { useBoards } from './useBoards';

export const useBoard = (boardId: string | undefined) => {
  const { boardsById, setBoards } = useBoards();

  const board = boardsById[boardId as string] as Board | undefined;

  const update = (id: string, updateFn: (value: Board) => Partial<Board>) => {
    setBoards((boards) =>
      boards.map((board) => {
        if (board.id !== id) return board;
        return { ...board, ...updateFn(board) };
      })
    );
  };

  return { board, update };
};
