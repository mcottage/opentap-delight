import { ReactNode } from 'react';
import { Header } from './Header';
import { TreePatternBanner } from './TreePatternBanner';
import { Footer } from './Footer';

interface PageLayoutProps {
  children: ReactNode;
  showTreeBanner?: boolean;
}

export const PageLayout = ({ children, showTreeBanner = true }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      {showTreeBanner && <TreePatternBanner />}
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};
