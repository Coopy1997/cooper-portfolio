import './globals.css';

export const metadata = {
  title: 'Cooper Timmins | Junior Developer',
  description:
    'Cooper Timmins portfolio: junior developer with React, Node.js, .NET, SQL, Azure, Vercel, GitHub, and cloud deployment experience.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
