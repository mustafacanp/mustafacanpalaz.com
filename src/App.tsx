import { AnimatorGeneralProvider } from '@arwes/react';
import { Background } from './components/Background';
import { Nav } from './components/Nav';
import { SoundProvider } from './components/Sound';
import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { Experience } from './sections/Experience';
import { Hero } from './sections/Hero';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';

const reducedMotion =
  window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
  new URLSearchParams(window.location.search).get('motion') === 'off';

export const App = () => (
  <AnimatorGeneralProvider disabled={reducedMotion} duration={{ enter: 0.4, exit: 0.3 }}>
    <SoundProvider>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Background />
      <Nav />
      <main id="main" className="page">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </SoundProvider>
  </AnimatorGeneralProvider>
);
