import { Todo } from '@/models/todo';
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';

export interface TodoListContextState {
  readonly todos: Todo[];
  readonly setTodos: Dispatch<SetStateAction<Todo[]>>;

  readonly editingId?: string;
  readonly setEditingId: (id: string | undefined) => void;
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

  const initialTodos: Todo[] = [];
  const [todos, setTodos] = useState(initialTodos);

  return (
    <TodoListContext.Provider
      value={{
        todos,
        setTodos,

        editingId,
        setEditingId,
      }}
    >
      {children}
    </TodoListContext.Provider>
  );
};
