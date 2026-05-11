import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Diferenciais } from './components/Diferenciais';
import { Faq } from './components/Faq';
import { FaixaTematica } from './components/FaixaTematica';
import { Localizacao } from './components/Localizacao';
import { Cta } from './components/Cta';

export function HomePage() {
  return (
    <>
      <Hero />
      <FaixaTematica />
      <About />
      <Services />
      <Diferenciais />
      <Faq />
      <Localizacao />
      <Cta />
    </>
  );
}
