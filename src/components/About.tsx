import type { ReactNode } from "react";
import { motion } from "motion/react";
import { MapPin, Award, HeartHandshake, Stethoscope } from "lucide-react";

export function About() {
  return (
    <section id="quem-sou" className="bg-white relative py-[80px] lg:py-[120px] px-6 lg:px-12 w-full flex justify-center">
      <div className="max-w-[1240px] w-full flex flex-col lg:flex-row gap-[80px] lg:gap-[100px] items-center lg:items-start">
        
        {/* =======================
            LEFT COLUMN (Image & Cards)
        ======================== */}
        <div className="w-full lg:w-[460px] relative flex-none lg:sticky lg:top-[120px] z-10 self-start group">
          <motion.div 
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="w-full relative"
          >
            {/* Main Image Card */}
            <div className="relative w-full h-[540px] lg:h-[620px] rounded-[26px] lg:rounded-[32px] overflow-hidden shadow-[0_28px_80px_rgba(36,58,74,0.14)] transition-all duration-500 ease-out group-hover:scale-[1.02] group-hover:shadow-[0_45px_100px_rgba(36,58,74,0.25)]">
              <img 
                src="https://res.cloudinary.com/dezwlu6p2/image/upload/v1778335924/IMG_1125_1_zxtd5n.jpg"
                alt="Dra Monique Lopes Sabino"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
              />
              {/* Subtle dark gradient for text legibility */}
              <div className="absolute inset-x-0 bottom-0 h-[60%] lg:h-[60%] bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none transition-opacity duration-500 group-hover:opacity-90" />
              
              {/* Overlay Text - Positioned at the bottom of the photo */}
              <div className="absolute bottom-8 left-6 lg:bottom-14 lg:left-8 pr-6 lg:pr-8 z-10 w-full lg:w-[calc(100%-80px)] transition-transform duration-500 ease-out group-hover:-translate-y-2">
                <h3 className="font-serif text-[24px] lg:text-[28px] text-white leading-tight mb-1">Dra Monique Lopes Sabino</h3>
                <p className="font-sans text-[13px] lg:text-[14px] font-light text-white/90">Médica generalista pós-graduada em psiquiatria</p>
              </div>
            </div>

            {/* Floating Card with Glass Effect */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="absolute -bottom-24 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-auto lg:right-[-30px] lg:-bottom-[110px] w-[88%] lg:w-[360px] bg-white/75 backdrop-blur-md border border-white/50 rounded-[20px] p-6 shadow-[0_12px_40px_rgba(36,58,74,0.12)] z-20 flex flex-col gap-3 transition-all duration-500 ease-out group-hover:scale-[1.04] group-hover:shadow-[0_22px_60px_rgba(36,58,74,0.18)] group-hover:bg-white/85"
            >
              <div className="flex items-center gap-2">
                <MapPin className="text-vinho w-5 h-5" />
                <span className="font-sans text-[12px] font-bold text-petroleo tracking-widest uppercase">Niterói, RJ</span>
              </div>
              <p className="font-sans text-[14px] text-text-secondary leading-snug">
                <strong>Atendimento online para todo Brasil.</strong>
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* =======================
            RIGHT COLUMN (Text & Credentials)
        ======================== */}
        <div className="flex-1 flex flex-col mt-16 lg:mt-0 lg:pt-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="font-sans text-[12px] font-bold text-vinho uppercase tracking-[0.22em] mb-4 block">Quem Sou</span>
            <h2 className="font-serif text-[38px] lg:text-[52px] leading-[1.05] text-petroleo tracking-tight mb-8">
              Prazer, sou a Dra Monique.
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col gap-5 font-sans text-[17px] text-text-secondary leading-[1.75] font-light max-w-[620px]"
          >
            <p>
              Sou médica generalista pós-graduada em <strong>psiquiatria e membro da Associação Brasileira de Psiquiatria (ABP).</strong>
            </p>
            <p>
              Acredito que o tratamento da saúde mental deve ir além do consultório e da prescrição. Com foco em <strong>Ansiedade, Depressão e Medicina do Estilo de Vida</strong>, ofereço um atendimento que une uma escuta verdadeiramente acolhedora, abordagem baseada em evidências e olhar ampliado para fatores que influenciam sua saúde mental.
            </p>
            <p>
              Minha atuação é voltada para quem busca entender a raiz do seu sofrimento. Aqui, olhamos para o ser humano por inteiro: investigamos como seu sono, rotina, alimentação e histórico de vida influenciam diretamente suas emoções.
            </p>
            <p>
              Quando a medicação é necessária, ela é conduzida de forma criteriosa e individualizada, com foco no seu bem-estar e na retomada da sua vitalidade. <strong>Meu objetivo é que você recupere o controle da sua jornada e sinta-se compreendido em cada etapa.</strong>
            </p>
          </motion.div>

          {/* Divider */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
            className="w-full h-[1px] bg-petroleo/10 mt-[42px] mb-[38px] origin-left"
          />

          {/* Credentials / Differentials */}
          <div className="flex flex-col gap-6 mb-10">
            <CredentialItem 
              icon={<Award className="w-5 h-5 text-vinho" />} 
              tag="Membro"
              title="Associação Brasileira de Psiquiatria (ABP)"
              delay={0.5}
            />
            <CredentialItem 
              icon={<Stethoscope className="w-5 h-5 text-vinho" />} 
              tag="Médica"
              title="Faculdade de Medicina de Teresópolis"
              delay={0.6}
            />
            <CredentialItem 
              icon={<Award className="w-5 h-5 text-vinho" />} 
              tag="Pós-graduada"
              title="Psiquiatria pela CENBRAP"
              delay={0.7}
            />
            <CredentialItem 
              icon={<HeartHandshake className="w-5 h-5 text-vinho" />} 
              tag="Abordagem Integrada"
              title="Saúde mental e estilo de vida"
              delay={0.8}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            className="w-full lg:w-auto"
          >
            <a
              href="https://wa.me/5521967109307"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glowing inline-flex justify-center items-center w-full lg:w-auto font-sans text-[13px] font-bold uppercase tracking-[0.14em] bg-petroleo text-white px-[42px] py-[18px] rounded-full hover:bg-petroleo/90 transition-[background-color,transform] duration-350 ease-out shadow-xl shadow-petroleo/20"
            >
              Agendar Minha Consulta &rarr;
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

function CredentialItem({ icon, tag, title, delay }: { icon: ReactNode, tag: string, title: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="flex items-center gap-5"
    >
      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-[0_8px_20px_rgba(36,58,74,0.06)] shrink-0 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="font-serif text-[18px] text-petroleo font-medium">{title}</span>
        <span className="font-sans text-[10px] font-bold text-vinho uppercase tracking-wider">{tag}</span>
      </div>
    </motion.div>
  );
}
