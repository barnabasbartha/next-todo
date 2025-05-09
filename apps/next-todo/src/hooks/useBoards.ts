import { BoardContext } from '@/contexts/board-context';
import { Board } from '@/models/board';
import { useContext, useMemo } from 'react';

export const useBoards = () => {
  const { boards, setBoards } = useContext(BoardContext);

  const boardsById = useMemo(
    () =>
      boards.reduce(
        (result, board) => ({ ...result, [board.id]: board }),
        {} as { [key: string]: Board }
      ),
    [boards]
  );

  return { boards, boardsById, setBoards };
};
