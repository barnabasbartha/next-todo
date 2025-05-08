import { createContext, ReactNode, useState } from 'react';

export interface TodoListContextState {
  readonly editingId?: string;
  readonly setEditingId: (id: string) => void;
}

export const TodoListContext = createContext<TodoListContextState>(
  {} as TodoListContextState
);

export interface TodoListContextProviderProps {
  children: ReactNode;
}

export const TodoListContextProvider = ({
  children,
}: TodoListContextProviderProps) => {
  const [editingId, setEditingId] = useState<string | undefined>(undefined);

  return (
    <TodoListContext.Provider
      value={{
        editingId,
        setEditingId,
      }}
    >
      {children}
    </TodoListContext.Provider>
  );
};
