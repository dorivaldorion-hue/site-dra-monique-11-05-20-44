import { motion } from 'motion/react';
import heroImage from 'https://res.cloudinary.com/dezwlu6p2/image/upload/v1778542307/Design_sem_nome_wgqr9w.svg';

export function Hero() {
  return (
    <section id="home" className="relative w-full bg-primary overflow-hidden flex flex-col">
      
      {/* =======================
          MOBILE LAYOUT
      ======================== */}
      <div className="lg:hidden relative flex flex-col w-full h-[100svh] overflow-hidden pt-[88px] bg-primary">
        
        {/* Mobile Image (Flex-1 so it dynamically takes remaining space without pushing text out of screen) */}
        <div className="relative w-full flex-1 z-0 min-h-0">
          <img 
            src={heroImage} 
            alt="Dra Monique Lopes Sabino" 
            className="absolute inset-0 w-full h-full object-cover object-top opacity-95 pointer-events-none"
          />
          {/* Smooth, simple fade only at the bottom edge to blend into text gracefully */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-primary to-transparent pointer-events-none" />
        </div>

        {/* Mobile Content (Flex-none guarantees it completely renders without scrolling) */}
        <div className="relative z-10 flex-none flex flex-col px-6 pb-6 pt-3 bg-primary">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-3 mb-3"
          >
            <div className="h-[1px] w-6 bg-vinho/70" />
            <span className="font-sans text-[9px] font-semibold text-vinho uppercase tracking-[0.2em]">
              ATENDIMENTO ONLINE PARA TODO O BRASIL
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="font-serif text-[34px] sm:text-[38px] leading-[1.05] text-petroleo tracking-tight mb-3"
          >
            Cuidado médico em <span className="italic text-vinho">saúde mental.</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="font-sans text-[13px] sm:text-[14px] text-text-secondary leading-snug font-light mb-6 space-y-2 pr-4"
          >
            <p>Ansiedade, Depressão e Medicina do Estilo de Vida.</p>
            <p>Consulta Particular para adultos</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="w-full"
          >
            <a
              href="https://wa.me/5521967109307"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glowing flex justify-center items-center w-full font-sans text-[13px] font-semibold uppercase tracking-widest bg-petroleo text-white py-[16px] rounded-full hover:bg-petroleo/90 transition-[background-color,transform] duration-350 ease-out"
            >
              Agendar Consulta
            </a>
          </motion.div>
        </div>
      </div>

      {/* =======================
          DESKTOP LAYOUT
      ======================== */}
      <div className="hidden lg:flex w-full min-h-[100svh] pt-[76px]">
        {/* Desktop Text */}
        <div className="w-1/2 flex flex-col justify-center px-12 xl:px-24 py-12 z-20">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-10 bg-vinho/70" />
            <span className="font-sans text-[11px] font-semibold text-vinho uppercase tracking-[0.2em]">
              ATENDIMENTO ONLINE PARA TODO O BRASIL
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="font-serif text-[64px] xl:text-[76px] leading-[1.05] text-petroleo tracking-tight mb-6"
          >
            Cuidado médico em <br /><span className="italic text-vinho">saúde mental.</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="font-sans text-[17px] xl:text-[18px] text-text-secondary leading-relaxed font-light mb-10 max-w-lg space-y-4"
          >
            <p>Ansiedade, Depressão e Medicina do Estilo de Vida.</p>
            <p>Consulta Particular para adultos</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="w-auto flex flex-col items-start"
          >
            <a
              href="https://wa.me/5521967109307"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glowing flex justify-center items-center font-sans text-[14px] font-semibold uppercase tracking-widest bg-petroleo text-white px-10 py-[20px] rounded-full hover:bg-petroleo/90 transition-[background-color,transform] duration-350 ease-out"
            >
              Agendar Consulta
            </a>
          </motion.div>
        </div>

        {/* Desktop Image */}
        <div className="w-1/2 relative z-10 flex items-end">
           <img 
             src={heroImage} 
             alt="Dra Monique Lopes Sabino" 
             className="absolute inset-0 w-full h-full object-cover object-top"
           />
           {/* Simple, natural fades restricted merely to the edges to disguise the PNG cut without banding */}
           <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-primary via-primary/60 to-transparent pointer-events-none" />
           <div className="absolute inset-y-0 left-[-2px] w-[35%] bg-gradient-to-r from-primary via-primary/60 to-transparent pointer-events-none" />
        </div>
      </div>

    </section>
  );
}
