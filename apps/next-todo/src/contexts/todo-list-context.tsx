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
  readonly setEditingId: (id: string) => void;
  readonly stopEditing: () => void;
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

  const initialTodos: Todo[] = [
    // { id: '1', text: 'Buy groceries', open: true },
    // { id: '2', text: 'Walk the dog', open: true },
    // { id: '3', text: 'Read a book', open: false },
  ];
  const [todos, setTodos] = useState(initialTodos);

  return (
    <TodoListContext.Provider
      value={{
        todos,
        setTodos,

        editingId,
        setEditingId,
        stopEditing: () => setEditingId(undefined),
      }}
    >
      {children}
    </TodoListContext.Provider>
  );
};
