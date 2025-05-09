import { Board } from '@/models/board';
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';

export interface BoardContextState {
  readonly boards: Board[];
  readonly setBoards: Dispatch<SetStateAction<Board[]>>;
}

export const BoardContext = createContext<BoardContextState>(
  {} as BoardContextState
);

export interface BoardContextProviderProps {
  children: ReactNode;
}

export const BoardContextProvider = ({
  children,
}: BoardContextProviderProps) => {
  const [boards, setBoards] = useState<Board[]>([
    {
      id: 'test',
      name: 'Groceries',
      todos: [
        {
          id: 'aaa',
          text: 'Something',
          open: true,
        },
      ],
    },
  ]);

  return (
    <BoardContext.Provider
      value={{
        // TODO: Move to data/API layer
        boards,
        setBoards,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};
