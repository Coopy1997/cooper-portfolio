import './globals.css';

export const metadata = {
  title: 'Cooper Timmins | Full-Stack Junior Developer',
  description:
    'Cooper Timmins portfolio: full-stack junior developer with frontend, backend, SQL, Azure, DevOps, cybersecurity, and cloud deployment experience.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
