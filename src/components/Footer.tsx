import { Instagram, Mail, MessageCircle, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (window.location.pathname === '/') {
      const id = href.split('#')[1];
      const element = document.getElementById(id);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', href);
      } else if (id === 'home' || id === '') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.history.pushState(null, '', href);
      }
    }
  };

  return (
    <footer className="bg-vinho pt-[72px] lg:pt-[90px] pb-[72px] lg:pb-8 px-6 relative overflow-hidden border-t border-[#F5F1EB]/20">
      <div className="max-w-[1280px] mx-auto lg:px-6 relative z-10">
        
        {/* Top 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16 lg:mb-20">
          
          {/* Column 1 */}
          <div className="flex flex-col mb-9 lg:mb-0">
            <h3 className="font-serif text-[26px] text-white mb-2">Dra Monique Lopes Sabino</h3>
            <p className="font-sans text-[11px] lg:text-[13px] font-medium text-[#F5F1EB] opacity-80 uppercase tracking-[0.18em] mb-6 border-l-2 border-vinho pl-3 leading-relaxed">
              Médica generalista<br className="hidden lg:block" /> pós-graduada em psiquiatria
            </p>
            <p className="font-sans text-[15px] text-[#F5F1EB]/75 leading-[1.7] font-light max-w-[280px]">
              Atendimento médico em saúde mental com escuta qualificada, abordagem baseada em evidências e cuidado individualizado.
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col mb-9 lg:mb-0 lg:pl-10">
            <h4 className="font-sans text-[12px] font-bold text-[#F5F1EB] uppercase tracking-[0.18em] mb-6 inline-block w-fit opacity-90">Navegação</h4>
            <ul className="flex flex-col gap-4">
              {['Home', 'Quem sou', 'Serviços', 'Diferenciais', 'Dúvidas', 'Localização', 'Contato'].map((item) => {
                const href = `/#${item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-')}`;
                return (
                  <li key={item}>
                    <a 
                      href={href}
                      onClick={(e) => handleNavClick(e, href)}
                      className="font-sans text-[15px] text-[#F5F1EB]/74 hover:text-vinho transition-colors duration-300 inline-block font-light"
                    >
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col mb-9 lg:mb-0">
            <h4 className="font-sans text-[12px] font-bold text-[#F5F1EB] uppercase tracking-[0.18em] mb-6 inline-block w-fit opacity-90">Contato</h4>
            <ul className="flex flex-col gap-6">
              <li>
                <a href="https://wa.me/5521967109307" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <MessageCircle size={18} className="text-vinho/80 group-hover:text-vinho transition-colors shrink-0" strokeWidth={1.5} />
                  <span className="font-sans text-[15px] text-[#F5F1EB]/74 group-hover:text-vinho transition-colors font-light">21 96710-9307</span>
                </a>
              </li>
              <li>
                <a href="mailto:mml.moniquelopes@gmail.com" className="flex items-center gap-4 group">
                  <Mail size={18} className="text-vinho/80 group-hover:text-vinho transition-colors shrink-0" strokeWidth={1.5} />
                  <span className="font-sans text-[15px] text-[#F5F1EB]/74 group-hover:text-vinho transition-colors font-light">mml.moniquelopes@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/dramoniquesabino/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <Instagram size={18} className="text-vinho/80 group-hover:text-vinho transition-colors shrink-0" strokeWidth={1.5} />
                  <span className="font-sans text-[15px] text-[#F5F1EB]/74 group-hover:text-vinho transition-colors font-light">@dramoniquesabino</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col">
            <h4 className="font-sans text-[12px] font-bold text-[#F5F1EB] uppercase tracking-[0.18em] mb-6 inline-block w-fit opacity-90">Endereço</h4>
            <div className="flex items-start gap-4">
              <MapPin size={20} className="text-vinho/80 shrink-0 mt-1" strokeWidth={1.5} />
              <div>
                <p className="font-sans text-[15px] text-[#F5F1EB]/74 leading-[1.7] mb-2 font-light">
                  Shopping Trade Center<br />
                  Rua Ator Paulo Gustavo, 26, sala 622<br />
                  Icaraí, Niterói - RJ
                </p>
                <p className="font-sans text-[14px] text-[#F5F1EB]/60 italic font-light pt-2">
                  Atendimento online para todo o Brasil.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="border-t border-[#F5F1EB]/10 pt-10 pb-10 text-center max-w-[800px] mx-auto">
          <p className="font-sans text-[12px] lg:text-[13px] text-[#F5F1EB]/65 leading-[1.6] mb-3">
            As informações deste site têm caráter exclusivamente informativo e não substituem avaliação médica individualizada. Para orientações específicas, agende uma consulta com profissional habilitado.
          </p>
          <p className="font-sans text-[12px] lg:text-[13px] text-[#F5F1EB]/65 leading-[1.6]">
            Dra Monique Lopes Sabino<br />
            CRM-RJ 52-1245422
          </p>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-[#F5F1EB]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="font-sans text-[13px] text-[#F5F1EB]/60 tracking-wide font-light">
            © 2026 Dra Monique Lopes Sabino. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center justify-center lg:justify-end gap-3 font-sans text-[13px] text-[#F5F1EB]/60 font-light flex-wrap">
            <Link to="/politica-de-privacidade" className="hover:text-white transition-colors">Política de Privacidade</Link>
            <span className="w-1 h-1 rounded-full bg-[#F5F1EB]/20" />
            <Link to="/termos-de-uso" className="hover:text-white transition-colors">Termos de Uso</Link>
          </div>

          <p className="font-sans text-[13px] text-[#F5F1EB]/40 font-light w-full lg:w-auto text-center mt-2 md:mt-0">
            Desenvolvido por Dorival Neto
          </p>
        </div>
        
      </div>
    </footer>
  );
}
