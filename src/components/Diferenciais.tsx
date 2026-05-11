import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";

const diferenciaisData = [
  {
    id: "01",
    shortTitle: "Base científica",
    title: "Abordagem baseada em evidências com aplicação prática",
    text: "A condução clínica é fundamentada em evidências, com orientações claras e aplicáveis à rotina, para que o cuidado não se limite ao consultório, mas se traduza em ações possíveis no dia a dia.",
    points: [
      "Base científica",
      "Conduta racional",
      "Aplicação prática",
      "Clareza terapêutica"
    ]
  },
  {
    id: "02",
    shortTitle: "Tratamento individualizado",
    title: "Tratamento individualizado e cuidadoso com medicações",
    text: "Quando há indicação medicamentosa, as decisões terapêuticas são tomadas de forma criteriosa e personalizada, com atenção à tolerabilidade, ajustes finos e resposta clínica individual.",
    points: [
      "Individualização",
      "Ajustes finos",
      "Uso criterioso",
      "Tolerabilidade"
    ]
  },
  {
    id: "03",
    shortTitle: "Estilo de vida",
    title: "Integração entre saúde mental e estilo de vida",
    text: "A avaliação considera fatores que influenciam diretamente o funcionamento emocional e cognitivo, como sono, rotina, alimentação, uso de cafeína e nível de estresse, permitindo uma compreensão mais ampla do quadro clínico.",
    points: [
      "Sono",
      "Rotina",
      "Alimentação",
      "Cafeína",
      "Estresse"
    ]
  },
  {
    id: "04",
    shortTitle: "Escuta aprofundada",
    title: "Escuta qualificada e avaliação aprofundada",
    text: "A consulta é estruturada para compreender o paciente de forma integral, considerando sintomas, histórico, contexto de vida, padrões de comportamento e fatores que contribuem para a manutenção do quadro.",
    points: [
      "Consulta com profundidade",
      "Contexto de vida",
      "Padrões comportamentais",
      "Compreensão integral"
    ]
  },
  {
    id: "05",
    shortTitle: "Pós-bariátrica",
    title: "Experiência no acompanhamento pós-cirurgia bariátrica",
    text: "Vivência no cuidado de pacientes no período pós-bariátrico, considerando aspectos que frequentemente impactam a saúde mental, como alterações no comportamento alimentar, adaptação emocional, percepção da imagem corporal e maior vulnerabilidade a quadros de ansiedade e depressão.",
    points: [
      "Contexto clínico específico",
      "Adaptação emocional",
      "Relação com comportamento alimentar",
      "Atenção ao impacto psicológico"
    ]
  }
];

export function Diferenciais() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <section id="diferenciais" className="relative w-full py-[88px] lg:py-[120px] bg-[#F5F1EB] overflow-hidden">
      {/* Background Texture Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden mix-blend-multiply opacity-[0.02]">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" opacity="0.6">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Top Header */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 justify-between items-start mb-16 lg:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1 max-w-[620px]"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="font-sans text-[12px] font-bold text-vinho tracking-[0.22em] uppercase">Diferenciais</span>
              <span className="w-10 h-[1px] bg-vinho opacity-30" />
            </div>
            <h2 className="font-serif text-[40px] lg:text-[54px] leading-[1.08] text-petroleo tracking-tight">
              Uma abordagem clínica que considera mais do que sintomas.
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex-[0.8] max-w-[520px] lg:pt-[54px]"
          >
            <p className="font-sans text-[17px] lg:text-[18px] text-petroleo/75 leading-[1.8] font-light mb-6">
              Cada paciente carrega contexto, história, hábitos e respostas diferentes ao tratamento. Por isso, o cuidado precisa ser construído com profundidade, critério e individualização.
            </p>
            <div className="inline-flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-[0_4px_20px_rgba(36,58,74,0.06)]">
              <div className="w-2 h-2 rounded-full bg-vinho animate-pulse" />
              <span className="font-sans text-[14px] font-bold text-petroleo">Mais de 1.500 atendimentos realizados</span>
            </div>
          </motion.div>
        </div>

        {/* Desktop Layout: Timeline + Content Panel */}
        <div className="hidden lg:flex w-full gap-20 relative">
          
          {/* Timeline Nav */}
          <div className="w-[32%] relative py-8">
            <div className="absolute left-[23px] top-14 bottom-14 w-[2px] bg-vinho/10">
              <div 
                className="w-full bg-vinho transition-all duration-500 ease-out"
                style={{ height: `${(activeIndex / (diferenciaisData.length - 1)) * 100}%` }}
              />
            </div>
            
            <div className="flex flex-col gap-14 relative z-10">
              {diferenciaisData.map((item, index) => {
                const isActive = activeIndex === index;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveIndex(index)}
                    onMouseEnter={() => setActiveIndex(index)}
                    className="flex items-center gap-6 group text-left"
                    aria-label={`Ver diferencial: ${item.shortTitle}`}
                    aria-pressed={isActive}
                  >
                    <div className={cn(
                      "w-12 h-12 rounded-full border-2 flex items-center justify-center font-sans text-[13px] font-bold tracking-wider transition-all duration-300 relative bg-[#F5F1EB]",
                      isActive 
                        ? "border-vinho text-vinho shadow-[0_0_0_4px_rgba(106,58,58,0.1)]" 
                        : "border-vinho/20 text-vinho/60 group-hover:border-vinho/50 group-hover:text-vinho/80"
                    )}>
                      {item.id}
                    </div>
                    
                    <span className={cn(
                      "font-sans text-[18px] transition-all duration-300",
                      isActive 
                        ? "font-medium text-petroleo" 
                        : "font-light text-petroleo/60 group-hover:text-petroleo/80"
                    )}>
                      {item.shortTitle}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dynamic Content Panel */}
          <div className="w-[68%] min-h-[540px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -15, filter: "blur(4px)", position: "absolute", top: 0, left: 0, right: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-white rounded-[32px] p-12 shadow-[0_28px_90px_rgba(140,90,74,0.08)] relative overflow-hidden h-full flex flex-col"
              >
                {/* Large Background Number */}
                <div className="absolute -top-6 -right-6 font-serif text-[240px] leading-none text-vinho/[0.04] select-none pointer-events-none font-bold">
                  {diferenciaisData[activeIndex].id}
                </div>

                <div className="relative z-10 flex-1 flex flex-col">
                  <h3 className="font-serif text-[36px] leading-[1.15] text-petroleo mb-6 max-w-[90%]">
                    {diferenciaisData[activeIndex].title}
                  </h3>
                  
                  <p className="font-sans text-[18px] text-petroleo/80 leading-[1.75] font-light mb-12 max-w-[85%]">
                    {diferenciaisData[activeIndex].text}
                  </p>

                  <div className="mb-14">
                    <ul className="grid grid-cols-2 gap-x-8 gap-y-4">
                      {diferenciaisData[activeIndex].points.map((point, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <div className="w-[5px] h-[5px] rounded-full bg-vinho/80 shrink-0" />
                          <span className="font-sans text-[16px] text-petroleo/90">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-8 border-t border-petroleo/10 flex items-center justify-between">
                    <p className="font-sans text-[14px] text-petroleo/60 font-light max-w-[300px]">
                      Cada plano terapêutico precisa respeitar a realidade de quem está sendo cuidado.
                    </p>
                    <a
                      href="https://wa.me/5521967109307"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex justify-center items-center font-sans text-[12px] font-bold uppercase tracking-[0.14em] bg-petroleo text-white px-8 py-4 rounded-full hover:bg-petroleo/90 transition-[background-color,transform] duration-350 ease-out hover:-translate-y-1 shadow-[0_8px_20px_rgba(36,58,74,0.15)]"
                    >
                      Agendar Consulta
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Layout: Accordion */}
        <div className="flex flex-col gap-4 lg:hidden w-full">
          {diferenciaisData.map((item, index) => {
            const isOpen = openAccordion === index;
            
            return (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "bg-white rounded-[24px] overflow-hidden transition-shadow duration-300",
                  isOpen ? "shadow-[0_20px_60px_rgba(36,58,74,0.08)]" : "shadow-[0_4px_20px_rgba(36,58,74,0.03)]"
                )}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-6 flex justify-between items-center"
                  aria-expanded={isOpen}
                  aria-controls={`accordion-content-${item.id}`}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-sans text-[14px] font-bold text-vinho tracking-[0.1em]">
                      {item.id}
                    </span>
                    <span className="font-sans text-[18px] text-petroleo font-medium">
                      {item.shortTitle}
                    </span>
                  </div>
                  <div className={cn(
                    "w-8 h-8 rounded-full border border-vinho/20 flex items-center justify-center text-vinho transition-transform duration-300",
                    isOpen ? "rotate-180 bg-vinho text-white" : ""
                  )}>
                    <ChevronDown size={16} />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      id={`accordion-content-${item.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                    >
                      <div className="p-6 pt-0 border-t border-petroleo/5 mt-2">
                        <h3 className="font-serif text-[26px] leading-[1.2] text-petroleo mt-6 mb-4">
                          {item.title}
                        </h3>
                        <p className="font-sans text-[16px] text-petroleo/80 leading-[1.7] font-light mb-8">
                          {item.text}
                        </p>
                        
                        <div className="mb-8">
                          <ul className="flex flex-col gap-3">
                            {item.points.map((point, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <div className="w-[4px] h-[4px] rounded-full bg-vinho mt-[10px] shrink-0" />
                                <span className="font-sans text-[15px] text-petroleo/90">
                                  {point}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-[#F5F1EB]/50 p-5 rounded-[16px]">
                          <p className="font-sans text-[13px] text-petroleo/70 text-center mb-4">
                            Cada plano terapêutico precisa respeitar a realidade de quem está sendo cuidado.
                          </p>
                          <a
                            href="https://wa.me/5521967109307"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex justify-center items-center w-full font-sans text-[12px] font-bold uppercase tracking-[0.14em] bg-petroleo text-white py-3.5 rounded-full hover:bg-petroleo/90 transition-[background-color] duration-350 ease-out shadow-[0_8px_20px_rgba(36,58,74,0.15)]"
                          >
                            Agendar Consulta
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
