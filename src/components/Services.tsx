import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { X, ChevronLeft, ChevronRight, Stethoscope, Activity, Brain, Pill, Sun, Play, Pause } from "lucide-react";
import { cn } from "../lib/utils";

const servicesData = [
  {
    id: "01",
    icon: <Stethoscope size={22} className="text-vinho" strokeWidth={1.5} />,
    title: "Consulta Psiquiátrica Completa",
    summary: "Primeira avaliação com escuta aprofundada, compreensão do histórico clínico e construção de um plano de cuidado individualizado.",
    details: [
      "A primeira consulta é conduzida com tempo e estrutura para compreender sintomas, histórico de vida, rotina, tratamentos anteriores e fatores que podem estar mantendo o sofrimento emocional.",
      "A avaliação permite organizar melhor o quadro, identificar necessidades clínicas e definir um plano de cuidado individualizado, respeitando a realidade de cada paciente."
    ],
    points: [
      "Avaliação aprofundada",
      "Compreensão do histórico clínico e emocional",
      "Análise de tratamentos anteriores",
      "Plano de cuidado individualizado",
      "Orientação clara sobre próximos passos"
    ]
  },
  {
    id: "02",
    icon: <Activity size={22} className="text-vinho" strokeWidth={1.5} />,
    title: "Acompanhamento Psiquiátrico",
    summary: "Seguimento clínico com monitoramento da evolução, ajustes terapêuticos e atenção contínua à resposta do paciente.",
    details: [
      "O acompanhamento permite observar a evolução do quadro ao longo do tempo, ajustar condutas quando necessário e manter uma escuta próxima sobre sintomas, rotina, efeitos percebidos e dificuldades do processo.",
      "É uma etapa importante para que o cuidado não fique limitado à primeira consulta, mas seja acompanhado com critério e continuidade."
    ],
    points: [
      "Monitoramento da evolução clínica",
      "Ajustes terapêuticos quando indicados",
      "Acompanhamento dos sintomas",
      "Escuta contínua",
      "Revisão do plano de cuidado"
    ]
  },
  {
    id: "03",
    icon: <Brain size={22} className="text-vinho" strokeWidth={1.5} />,
    title: "Ansiedade e Depressão",
    summary: "Atendimento para ansiedade, depressão, estresse crônico e esgotamento mental com abordagem baseada em evidências.",
    details: [
      "Ansiedade, depressão, estresse crônico e esgotamento mental podem afetar sono, foco, disposição, relacionamentos e qualidade de vida.",
      "O atendimento busca compreender a origem e os fatores que mantêm os sintomas, considerando aspectos clínicos, emocionais, comportamentais e de estilo de vida."
    ],
    points: [
      "Ansiedade persistente",
      "Tristeza recorrente",
      "Estresse crônico",
      "Esgotamento mental",
      "Impacto no sono, foco e rotina"
    ]
  },
  {
    id: "04",
    icon: <Pill size={22} className="text-vinho" strokeWidth={1.5} />,
    title: "Ajuste e Otimização de Medicações",
    summary: "Revisão cuidadosa de tratamentos prévios, manejo de efeitos colaterais e melhora da resposta terapêutica quando há indicação clínica.",
    details: [
      "Quando o paciente já fez uso de medicações ou não obteve a melhora esperada com tratamentos anteriores, é importante revisar a resposta terapêutica, possíveis efeitos colaterais, tolerabilidade e necessidade de ajustes.",
      "A condução medicamentosa, quando indicada, deve ser criteriosa, individualizada e acompanhada com atenção."
    ],
    points: [
      "Revisão de tratamentos anteriores",
      "Avaliação de resposta terapêutica",
      "Manejo de efeitos colaterais",
      "Ajustes individualizados",
      "Uso criterioso de psicofármacos quando indicado"
    ]
  },
  {
    id: "05",
    icon: <Sun size={22} className="text-vinho" strokeWidth={1.5} />,
    title: "Estilo de Vida e Saúde Mental",
    summary: "Orientações práticas envolvendo sono, rotina e hábitos que influenciam diretamente o funcionamento emocional.",
    details: [
      "A saúde mental não depende apenas de sintomas isolados. Sono, rotina, alimentação, uso de cafeína, nível de estresse e hábitos diários podem influenciar diretamente o quadro clínico.",
      "Por isso, o atendimento também considera intervenções práticas e aplicáveis ao dia a dia, favorecendo um cuidado mais amplo e sustentável."
    ],
    points: [
      "Sono e qualidade do descanso",
      "Rotina e organização diária",
      "Alimentação e uso de cafeína",
      "Nível de estresse",
      "Hábitos que impactam o funcionamento emocional"
    ]
  }
];

export function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      align: "start",
      loop: true,
      skipSnaps: true,
      dragFree: true
    },
    [AutoScroll({ playOnInit: true, speed: 1.2, stopOnInteraction: false, stopOnMouseEnter: false })]
  );

  const allServices = [...servicesData, ...servicesData];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedService, setSelectedService] = useState<typeof servicesData[0] | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleAutoplay = useCallback(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;

    if (autoScroll.isPlaying()) {
      autoScroll.stop();
      setIsPlaying(false);
    } else {
      autoScroll.play();
      setIsPlaying(true);
    }
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    const autoScroll = emblaApi.plugins().autoScroll;
    if (autoScroll) {
      autoScroll.play();
      setIsPlaying(true);
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    const autoScroll = emblaApi.plugins().autoScroll;
    if (autoScroll) {
      autoScroll.play();
      setIsPlaying(true);
    }
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;

    setIsPlaying(autoScroll.isPlaying());
    emblaApi
      .on('autoScroll:play', () => setIsPlaying(true))
      .on('autoScroll:stop', () => setIsPlaying(false))
      .on('reInit', () => setIsPlaying(autoScroll.isPlaying()))
  }, [emblaApi]);

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedService]);

  return (
    <section id="servicos" className="relative w-full py-[88px] lg:py-[130px] bg-vinho overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[800px] bg-vinho/10 rounded-full blur-[140px] opacity-50 mix-blend-screen" />
        <div className="absolute inset-x-0 inset-y-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 1px, transparent 24px)' }} />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 relative z-10 text-center lg:text-left flex flex-col items-center lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full flex flex-col items-center lg:items-start"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-[1px] bg-[#F5F1EB] opacity-35" />
            <span className="font-sans text-[12px] font-bold text-[#F5F1EB] opacity-70 uppercase tracking-[0.24em]">Serviços</span>
            <span className="w-10 h-[1px] bg-[#F5F1EB] opacity-35 lg:hidden" />
          </div>
          <h2 className="font-serif text-[42px] lg:text-[60px] leading-[1.06] text-white tracking-tight max-w-[820px] text-center lg:text-left relative z-10">
            Atendimento em saúde mental com avaliação cuidadosa e plano individualizado.
          </h2>
          <p className="font-sans text-[17px] lg:text-[18px] text-[#F5F1EB]/75 leading-[1.75] font-light mt-[22px] max-w-[760px] text-center lg:text-left relative z-10">
            Cada serviço foi pensado para compreender o paciente de forma ampla, considerando sintomas, histórico, rotina, tratamentos anteriores e fatores que influenciam diretamente o equilíbrio emocional.
          </p>
        </motion.div>
      </div>

      {/* Carousel */}
      <div className="w-full mt-16 md:mt-24 relative z-10 block">
        <div className="overflow-hidden w-full cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex -ml-4 lg:-ml-8 py-12 pointer-events-auto items-center touch-pan-y" style={{ backfaceVisibility: 'hidden' }}>
            {allServices.map((service, index) => (
              <div 
                key={`${service.id}-${index}`} 
                className="flex-[0_0_86vw] md:flex-[0_0_400px] lg:flex-[0_0_430px] min-w-0 pl-4 lg:pl-8"
              >
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 5, ease: "easeInOut", repeat: Infinity, delay: index * 0.4 }}
                  className="h-full block"
                >
                  <div
                    onClick={() => setSelectedService(service)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedService(service);
                      }
                    }}
                    className="w-full h-full text-left bg-[#F5F1EB]/95 border border-vinho/15 rounded-[32px] p-8 lg:p-[38px] min-h-[440px] lg:min-h-[450px] shadow-[0_30px_90px_rgba(0,0,0,0.25)] flex flex-col transition-all duration-500 hover:-translate-y-[4px] hover:shadow-[0_45px_100px_rgba(140,90,74,0.15)] hover:border-vinho/40 group relative"
                    aria-label={`Ver detalhes do serviço ${service.title}`}
                  >
                  <div className="flex justify-between items-start mb-10">
                    <div className="w-14 h-14 rounded-full border border-petroleo/15 flex items-center justify-center bg-white/50 group-hover:bg-white transition-colors duration-300">
                      {service.icon}
                    </div>
                    <span className="font-sans text-[15px] font-bold text-vinho/70 tracking-[0.18em]">
                      {service.id}
                    </span>
                  </div>

                  <h3 className="font-serif text-[27px] lg:text-[32px] leading-[1.12] text-petroleo mb-5">
                    {service.title}
                  </h3>

                  <p className="font-sans text-[16px] text-petroleo/75 leading-[1.65] font-light mb-8 flex-1">
                    {service.summary}
                  </p>

                  <div className="mt-auto">
                    <a 
                      href="https://wa.me/5521967109307" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center text-vinho hover:text-petroleo font-sans text-[11px] font-bold tracking-[0.14em] uppercase border border-vinho/30 hover:border-petroleo/30 rounded-full px-5 py-2.5 transition-all duration-300 bg-white/40 hover:bg-white"
                    >
                      Agendar Consulta
                      <span className="ml-2 font-normal opacity-70">→</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
          </div>
        </div>

        {/* Carousel Controls (Desktop Only) */}
        <div className="max-w-[1280px] mx-auto hidden lg:flex items-center gap-4 mt-8 justify-center w-full px-12 relative z-20">
          <button
            onClick={scrollPrev}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-petroleo transition-colors duration-300 pointer-events-auto"
            aria-label="Anterior"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={toggleAutoplay}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-petroleo transition-colors duration-300 pointer-events-auto"
            aria-label={isPlaying ? "Pausar" : "Reproduzir"}
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-1" />}
          </button>
          <button
            onClick={scrollNext}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-petroleo transition-colors duration-300 pointer-events-auto"
            aria-label="Próximo"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Mobile indicators */}
        <div className="flex lg:hidden justify-center gap-2 mt-6 relative z-20 pb-4">
            {servicesData.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  (selectedIndex % servicesData.length) === index ? "bg-white w-6" : "bg-white/30"
                )}
                aria-label={`Ir para slide ${index + 1}`}
                onClick={() => emblaApi?.scrollTo(index)}
              />
            ))}
          </div>

        </div>



      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 lg:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-vinho/60 backdrop-blur-[10px]"
              onClick={() => setSelectedService(null)}
              aria-hidden="true"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-[760px] max-h-[88vh] overflow-y-auto bg-[#F5F1EB] rounded-[24px] lg:rounded-[32px] p-8 lg:p-12 shadow-[0_40px_120px_rgba(0,0,0,0.28)] flex flex-col"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 lg:top-8 lg:right-8 w-10 h-10 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center text-petroleo transition-colors"
                aria-label="Fechar"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col">
                <span className="font-sans text-[14px] font-bold text-vinho tracking-[0.18em] mb-4">
                  {selectedService.id}
                </span>
                
                <h3 id="modal-title" className="font-serif text-[32px] lg:text-[42px] leading-[1.1] text-petroleo mb-8 max-w-[90%]">
                  {selectedService.title}
                </h3>
                
                <div className="flex flex-col gap-5 text-petroleo/80 font-sans text-[16px] lg:text-[17px] leading-[1.7] font-light mb-10">
                  {selectedService.details.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                <div className="mb-12">
                  <h4 className="font-sans text-[13px] font-bold uppercase tracking-[0.1em] text-petroleo mb-6 opacity-60">
                    Pontos Principais
                  </h4>
                  <ul className="flex flex-col gap-4">
                    {selectedService.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <div className="w-[6px] h-[6px] rounded-full bg-vinho/80 mt-2 shrink-0" />
                        <span className="font-sans text-[16px] text-petroleo/90 leading-[1.5]">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto w-full border-t border-petroleo/10 pt-8">
                  <a
                    href="https://wa.me/5521967109307"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glowing w-full inline-flex justify-center items-center font-sans text-[13px] font-bold uppercase tracking-[0.14em] bg-petroleo text-white px-8 py-5 rounded-full hover:bg-petroleo/90 transition-[background-color,transform] duration-350 ease-out shadow-[0_8px_20px_rgba(36,58,74,0.3)]"
                  >
                    Agendar Consulta
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
