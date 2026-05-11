import { motion } from 'motion/react';
import { Fragment } from 'react';

const WORDS = [
  'DEPRESSÃO',
  'ANSIEDADE',
  'SAÚDE MENTAL',
  'ESTILO DE VIDA',
  'ESGOTAMENTO MENTAL',
  'ESTRESSE CRÔNICO'
];

export function FaixaTematica() {
  return (
    <section className="w-full bg-vinho h-[54px] lg:h-[64px] flex items-center overflow-hidden relative">
      <div className="absolute inset-0 z-10 pointer-events-none flex justify-between">
        <div className="w-12 lg:w-24 bg-gradient-to-r from-vinho to-transparent h-full" />
        <div className="w-12 lg:w-24 bg-gradient-to-l from-vinho to-transparent h-full" />
      </div>
      
      <motion.div
        animate={{
          x: [0, -1035],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        }}
        className="flex whitespace-nowrap items-center w-max"
      >
        {/* We repeat the array 4 times to ensure seamless scrolling */}
        {[...Array(4)].map((_, arrayIndex) => (
          <Fragment key={arrayIndex}>
            {WORDS.map((word, index) => (
              <div key={`${arrayIndex}-${index}`} className="flex items-center">
                <span className="font-sans text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] font-medium text-white/90 px-6 lg:px-8">
                  {word}
                </span>
                <span className="w-1.5 h-1.5 bg-[#F5F1EB] rounded-full opacity-50"></span>
              </div>
            ))}
          </Fragment>
        ))}
      </motion.div>
    </section>
  );
}
