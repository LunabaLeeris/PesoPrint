import React from 'react';
import { LightboxProvider } from './context/LightboxContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { CadSection } from './components/sections/CadSection';
import { ShowcaseSection } from './components/sections/ShowcaseSection';
import { WebAppSection } from './components/sections/WebAppSection';
import { LightboxModal } from './components/ui/LightboxModal';
import './styles/index.css';

export const App: React.FC = () => {
  return (
    <LightboxProvider>
      <div className="site-wrapper">
        <Header />
        <main>
          <CadSection />
          <ShowcaseSection />
          <WebAppSection />
        </main>
        <Footer />
        <LightboxModal />
      </div>
    </LightboxProvider>
  );
};

export default App;
