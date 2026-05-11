import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, X } from "lucide-react";
import { cn } from "../lib/utils";

const faqData = [
  {
    id: "q1",
    question: "Qual a diferença da abordagem da Dra Monique Sabino?",
    answer: "A diferença da minha abordagem é que eu não olho apenas para o diagnóstico ou para o sintoma isolado. Gosto de entender como aquela pessoa está vivendo, o que está sustentando o sofrimento dela e como construir uma melhora que seja realmente sustentável na vida real. A medicação, quando necessária, faz parte do tratamento. Mas eu também valorizo muito aspectos como sono, rotina, sobrecarga, estilo de vida, relações e a forma como a pessoa funciona emocionalmente no dia a dia. Meu objetivo é que o paciente não apenas “funcione”, mas consiga viver com mais estabilidade, clareza e qualidade de vida."
  },
  {
    id: "q2",
    question: "Já fiz tratamento antes e não melhorei. Ainda faz sentido buscar avaliação?",
    answer: "Sim. Muitas vezes é importante revisar o histórico clínico, compreender como foi a condução anterior e reavaliar o caso com mais profundidade para definir um plano mais adequado à realidade atual."
  },
  {
    id: "q3",
    question: "O atendimento pode ser online?",
    answer: "Sim. A Dra Monique realiza atendimento online para pacientes em todo o Brasil, oferecendo praticidade, privacidade e acompanhamento estruturado."
  },
  {
    id: "q4",
    question: "A consulta é coberta por plano?",
    answer: "Os atendimentos são realizados na modalidade particular. No entanto, fornecemos nota fiscal com todas as informações necessárias para que você possa solicitar o reembolso junto ao seu plano de saúde, de acordo com as regras da sua operadora."
  }
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="duvidas" className="relative w-full py-[88px] lg:py-[130px] bg-vinho overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110vw] h-[900px] bg-vinho/10 rounded-full blur-[160px] opacity-20 mix-blend-screen" />
        <div className="absolute inset-x-0 inset-y-0 opacity-[0.02] mix-blend-overlay" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 1px, transparent 24px)' }} />
      </div>

      <div className="max-w-[1100px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-[#F5F1EB] opacity-20" />
              <span className="font-sans text-[12px] font-bold text-[#F5F1EB]/70 uppercase tracking-[0.24em]">
                Perguntas Frequentes
              </span>
              <span className="w-8 h-[1px] bg-[#F5F1EB] opacity-20" />
            </div>
            <h2 className="font-serif text-[42px] lg:text-[56px] leading-[1.08] text-white tracking-tight max-w-[760px] mx-auto">
              Esclarecendo dúvidas com transparência e cuidado.
            </h2>
          </motion.div>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col gap-[18px] max-w-[900px] mx-auto">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "bg-white/95 border border-white/10 rounded-[22px] lg:rounded-[24px] overflow-hidden transition-all duration-300 relative",
                  isOpen 
                    ? "shadow-[0_30px_80px_rgba(0,0,0,0.25)]" 
                    : "shadow-[0_20px_60px_rgba(0,0,0,0.16)] hover:-translate-y-[2px] hover:shadow-[0_25px_70px_rgba(0,0,0,0.2)]"
                )}
              >
                {isOpen && <div className="absolute left-0 top-0 bottom-0 w-2 bg-vinho" />}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-6 py-6 lg:px-[34px] lg:py-[28px] flex justify-between items-center group"
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${item.id}`}
                >
                  <span className={cn(
                    "font-sans text-[18px] lg:text-[20px] font-semibold transition-colors duration-300 pr-6",
                    isOpen ? "text-petroleo" : "text-petroleo group-hover:text-vinho"
                  )}>
                    {item.question}
                  </span>
                  
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-400 border",
                    isOpen 
                      ? "bg-vinho text-white border-vinho rotate-90" 
                      : "bg-transparent text-vinho/50 border-vinho/20 group-hover:border-vinho/40 group-hover:text-vinho/80"
                  )}>
                    {isOpen ? <X size={20} className="transition-transform duration-300" /> : <Plus size={20} className="transition-transform duration-300" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      id={`faq-content-${item.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.38, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-8 lg:px-12 lg:pb-10 pt-2 lg:pt-4">
                        <div className="w-full h-[1px] bg-vinho/15 mb-6 lg:mb-8" />
                        <p className="font-sans text-[16px] lg:text-[17px] text-petroleo/80 leading-[1.85] font-light text-center max-w-[700px] mx-auto">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 lg:mt-24 text-center pb-4"
        >
          <h3 className="font-serif text-[28px] lg:text-[32px] leading-[1.2] text-white mb-3">
            Ainda ficou com alguma dúvida?
          </h3>
          <p className="font-sans text-[16px] lg:text-[17px] text-[#F5F1EB]/70 font-light mb-8 max-w-[500px] mx-auto">
            Entre em contato e receba orientação inicial pelo WhatsApp.
          </p>
          <a
            href="https://wa.me/5521967109307"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glowing inline-flex justify-center items-center font-sans text-[13px] font-bold uppercase tracking-[0.14em] bg-petroleo text-white px-10 py-[18px] rounded-full hover:bg-petroleo/90 transition-all hover:-translate-y-1 shadow-[0_8px_30px_rgba(36,58,74,0.2)]"
          >
            Agendar Consulta
          </a>
        </motion.div>

      </div>
    </section>
  );
}
