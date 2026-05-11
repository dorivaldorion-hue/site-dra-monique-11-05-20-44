import { motion } from "motion/react";

export function Cta() {
  return (
    <section id="contato" 
      className="relative w-full min-h-[520px] lg:min-h-[680px] bg-no-repeat bg-cover bg-[position:72%_center] lg:bg-[position:center_right] overflow-hidden flex flex-col justify-center"
      style={{ backgroundImage: "url('https://res.cloudinary.com/dezwlu6p2/image/upload/v1778352523/ChatGPT_Image_9_de_mai._de_2026_15_48_20_s3zwpk.png')" }}
    >
      {/* Mobile Overlay */}
      <div className="absolute inset-0 bg-vinho/90 lg:hidden" />
      
      {/* Desktop Overlay */}
      <div 
        className="absolute inset-0 hidden lg:block bg-gradient-to-r from-vinho/95 via-vinho/75 to-vinho/10" 
      />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-[6vw] flex flex-col text-center lg:text-left items-center lg:items-start py-16 lg:py-0">
        <motion.h2 
          className="font-serif text-[36px] lg:text-[48px] leading-[1.15] text-white/95 tracking-tight mb-6 max-w-[600px] font-medium"
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Sua saúde mental merece uma escuta cuidadosa.
        </motion.h2>
        
        <motion.p 
          className="font-sans text-[17px] lg:text-[20px] text-[#F5F1EB]/90 leading-[1.7] font-light mb-12 max-w-[500px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          O primeiro passo pode ser uma conversa para compreender seu momento e orientar o melhor caminho de cuidado.
        </motion.p>
        
        <div className="flex flex-col lg:flex-row items-center gap-4 w-full sm:w-auto">
          <motion.a
            href="https://wa.me/5521967109307"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="w-full lg:w-auto flex justify-center items-center font-sans text-[13px] font-bold uppercase tracking-[0.14em] bg-petroleo text-white px-10 py-[18px] rounded-full hover:bg-petroleo/90 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(36,58,74,0.25)] transition-all duration-[350ms] ease-out shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
          >
            Agendar Consulta
          </motion.a>
          
          <motion.a
            href="https://wa.me/5521967109307"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
            className="w-full lg:w-auto flex justify-center items-center font-sans text-[13px] font-bold uppercase tracking-[0.14em] bg-transparent text-white border border-[#F5F1EB]/80 px-10 py-[18px] rounded-full hover:bg-white/10 hover:border-white hover:-translate-y-1 transition-all duration-[350ms] ease-out"
          >
            WhatsApp
          </motion.a>
        </div>
      </div>
    </section>
  );
}
