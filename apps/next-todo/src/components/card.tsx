import { ReactNode } from 'react';

export interface CardProps {
  children: ReactNode;
  title?: string;
}

export const Card = ({ children, title }: CardProps) => (
  <div className="w-full bg-white rounded-lg shadow-md p-6 max-w-md md:max-w-xl">
    {title && <h1 className="text-sm font-bold mb-6 text-gray-500 uppercase">{title}</h1>}
    {children}
  </div>
);