import { motion } from "motion/react";
import { MapPin, Navigation, MessageCircle } from "lucide-react";

export function Localizacao() {
  return (
    <section id="localizacao" className="relative w-full py-[88px] lg:py-[130px] bg-[#F5F1EB] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
          
          {/* Content Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1 flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="font-sans text-[12px] font-bold text-[#8C5A4A] tracking-[0.22em] uppercase">
                Localização
              </span>
              <span className="w-10 h-[1px] bg-[#8C5A4A] opacity-30" />
            </div>
            
            <h2 className="font-serif text-[38px] lg:text-[46px] leading-[1.1] text-petroleo tracking-tight mb-6">
              Atendimento presencial em Niterói e online para todo o Brasil.
            </h2>
            
            <p className="font-sans text-[17px] lg:text-[18px] text-petroleo/75 leading-[1.8] font-light mb-10">
              A Dra Monique Lopes Sabino atende presencialmente em Icaraí, Niterói, em uma localização de fácil acesso, além de realizar atendimentos online para pacientes em todo o Brasil.
            </p>

            <div className="bg-white rounded-[28px] p-8 lg:p-10 shadow-[0_20px_60px_rgba(36,58,74,0.06)] border border-petroleo/5 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#F5F1EB] flex items-center justify-center shrink-0 text-[#8C5A4A]">
                  <MapPin size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-sans text-[18px] font-semibold text-petroleo mb-2">
                    Shopping Trade Center
                  </h3>
                  <p className="font-sans text-[16px] text-petroleo/75 leading-[1.6] font-light">
                    Rua Ator Paulo Gustavo, 26, sala 622<br />
                    Icaraí, Niterói - RJ
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Shopping+Trade+Center,+Rua+Ator+Paulo+Gustavo,+26,+sala+622,+Icaraí,+Niterói+-+RJ"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex justify-center items-center gap-3 font-sans text-[13px] font-bold uppercase tracking-[0.14em] bg-white text-petroleo border border-petroleo/30 px-8 py-[18px] rounded-full hover:bg-petroleo hover:text-white hover:border-petroleo transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_20px_rgba(36,58,74,0.2)]"
              >
                <Navigation size={18} />
                Abrir Rota
              </a>
              <a
                href="https://wa.me/5521967109307"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glowing w-full sm:w-auto flex justify-center items-center gap-3 font-sans text-[13px] font-bold uppercase tracking-[0.14em] bg-petroleo text-white px-8 py-[18px] rounded-full hover:bg-petroleo/90 transition-all duration-300 shadow-[0_8px_25px_rgba(36,58,74,0.3)]"
              >
                <MessageCircle size={18} />
                Agendar Pelo WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Map Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="flex-1 w-full min-h-[400px] lg:min-h-[500px] rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(36,58,74,0.1)] border border-petroleo/10 relative mt-8 lg:mt-0"
          >
            <iframe 
              src="https://maps.google.com/maps?q=Shopping%20Trade%20Center,%20Rua%20Ator%20Paulo%20Gustavo,%2026,%20Icara%C3%AD,%20Niter%C3%B3i%20-%20RJ&t=&z=16&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa localização consultório Dra Monique"
            />
          </motion.div>
        
        </div>
      </div>
    </section>
  );
}
