import { useState } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const MENU_ITEMS = [
  'HOME',
  'QUEM SOU',
  'SERVIÇOS',
  'DIFERENCIAIS',
  'DÚVIDAS',
  'LOCALIZAÇÃO',
  'CONTATO',
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (window.location.pathname === '/') {
      const id = href.split('#')[1];
      const element = document.getElementById(id);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', href);
        setIsMobileMenuOpen(false);
      } else if (id === 'home' || id === '') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.history.pushState(null, '', href);
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-[0_4px_30px_rgba(36,58,74,0.03)] h-[88px] md:h-[76px] px-6 md:px-12 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex flex-col justify-center">
          <h1 className="font-serif text-[22px] md:text-[24px] text-petroleo leading-none tracking-wide">
            Dra Monique Lopes Sabino
          </h1>
          <p className="font-sans text-[9px] md:text-[10px] text-text-secondary uppercase tracking-[0.15em] mt-1.5 font-medium">
            Médica generalista pós-graduada em psiquiatria
          </p>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden xl:flex items-center gap-8">
          {MENU_ITEMS.map((item) => {
            const href = `/#${item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-')}`;
            return (
              <a
                key={item}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className="font-sans text-xs font-medium text-petroleo/80 uppercase tracking-widest hover:text-vinho transition-colors duration-300"
              >
                {item}
              </a>
            );
          })}
        </nav>

        {/* DESKTOP ACTIONS */}
        <div className="hidden xl:flex items-center gap-6">
          <a
            href="https://www.instagram.com/dramoniquesabino/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-petroleo/80 hover:text-vinho transition-colors duration-300"
            aria-label="Instagram"
          >
            <Instagram size={20} strokeWidth={1.5} />
          </a>
          <a
            href="https://wa.me/5521967109307"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glowing font-sans text-xs font-semibold uppercase tracking-wider bg-petroleo text-white px-7 py-3 rounded-full hover:bg-petroleo/90 transition-all duration-350 ease-out"
          >
            Agendar Consulta
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="xl:hidden text-petroleo p-2"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Abrir menu"
        >
          <Menu size={28} strokeWidth={1.5} />
        </button>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] bg-primary flex flex-col px-6 py-8"
          >
             <div className="flex justify-between items-center mb-16">
               <div className="flex flex-col">
                 <span className="font-serif text-[20px] text-petroleo leading-none">Dra Monique Lopes</span>
               </div>
               <button
                 className="text-petroleo p-2"
                 onClick={() => setIsMobileMenuOpen(false)}
                 aria-label="Fechar menu"
               >
                 <X size={32} strokeWidth={1.5} />
               </button>
             </div>

             <nav className="flex flex-col gap-8 items-center flex-grow">
               {MENU_ITEMS.map((item) => {
                 const href = `/#${item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-')}`;
                 return (
                   <a
                     key={item}
                     href={href}
                     onClick={(e) => handleNavClick(e, href)}
                     className="font-serif text-3xl text-petroleo tracking-wide"
                   >
                     {item}
                   </a>
                 );
               })}
             </nav>

             <div className="flex flex-col gap-6 items-center pb-8 mt-auto">
               <a
                 href="https://www.instagram.com/dramoniquesabino/"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex items-center gap-3 font-sans text-sm uppercase tracking-widest text-petroleo"
               >
                 <Instagram size={20} strokeWidth={1.5} />
                 <span>Instagram</span>
               </a>
               <a
                 href="https://wa.me/5521967109307"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="btn-glowing font-sans text-sm font-semibold uppercase tracking-wider bg-petroleo text-white px-10 py-4 rounded-full w-full text-center hover:bg-petroleo/90 transition-all duration-300 ease-out"
               >
                 Agendar Consulta
               </a>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
