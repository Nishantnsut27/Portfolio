import { Navigation } from '@/components/layout/Navigation';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { EducationTimeline } from '@/components/sections/EducationTimeline';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/layout/Footer';
import { RaindropCanvas } from '@/components/effects/RaindropCanvas';

const App = () => (
  <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
    <RaindropCanvas />
    <Navigation />
    <main className="relative z-10">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <EducationTimeline />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default App;
