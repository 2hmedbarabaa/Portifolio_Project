import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          {children}
          </main>
        <Footer />
      </body>
    </html>
  );
}