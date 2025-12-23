import { Header } from '@/components/Header';
import { TreePatternBanner } from '@/components/TreePatternBanner';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ThePortSection } from '@/components/ThePortSection';
import { OnTapSection } from '@/components/OnTapSection';
import { CareersSection } from '@/components/CareersSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <TreePatternBanner />
      <main>
        <HeroSection />
        <AboutSection />
        <ThePortSection />
        <OnTapSection />
        <CareersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
