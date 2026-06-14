import React from 'react';
export const metadata = { title: 'Tailored Maison', description: 'Narrative Architecture' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ backgroundColor: '#050505' }}>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
