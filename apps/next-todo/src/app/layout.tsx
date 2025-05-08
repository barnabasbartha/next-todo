import './global.css';

export const metadata = {
  title: 'Next To-Do',
  description: 'Real-time To-Do app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
