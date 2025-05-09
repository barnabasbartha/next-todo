'use client';

import { MainLayoutContainer } from '@/components/main-layout-container';
import { BoardContextProvider } from '@/contexts/board-context';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <BoardContextProvider>
      <MainLayoutContainer>{children}</MainLayoutContainer>
    </BoardContextProvider>
  );
}
