import './globals.css';
import AnimatedBackground from '@/components/AnimatedBackground';

export const metadata = {
  title: 'Parth Gupta | Portfolio',
  description: 'Technology Consultant & Business Analyst',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="text-slate-200 antialiased min-h-screen">
        <AnimatedBackground />
        {children}
      </body>
    </html>
  );
}
