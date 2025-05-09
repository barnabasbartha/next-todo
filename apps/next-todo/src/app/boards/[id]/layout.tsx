'use client';

import { TodoListContextProvider } from '@/contexts/todo-list-context';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return <TodoListContextProvider>{children}</TodoListContextProvider>;
}
