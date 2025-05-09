import { ReactNode } from 'react';

export const MainLayoutContainer = ({ children }: { children: ReactNode }) => (
  <main className="flex flex-col gap-2 md:gap-8 min-h-screen items-center md:justify-center">
    {children}
  </main>
);
