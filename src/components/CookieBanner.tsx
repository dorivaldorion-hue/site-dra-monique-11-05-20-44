import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem("cookie_consent");
    if (!hasConsented) {
      // Delay slightly for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookie_consent", "rejected");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-8 md:right-auto md:max-w-[420px] bg-white rounded-[18px] p-6 shadow-[0_20px_40px_rgba(0,0,0,0.15)] z-[100] border border-petroleo/10">
      <button 
        onClick={handleReject}
        className="absolute top-4 right-4 text-petroleo/40 hover:text-petroleo transition-colors"
        aria-label="Fechar"
      >
        <X size={18} />
      </button>
      
      <p className="font-sans text-[14px] text-petroleo leading-[1.6] mb-5 pr-6">
        Utilizamos cookies e tecnologias semelhantes para melhorar sua experiência, analisar o desempenho do site e mensurar campanhas. Ao continuar navegando, você concorda com nossa{" "}
        <Link to="/politica-de-privacidade" className="font-bold hover:underline" onClick={() => setIsVisible(false)}>
          Política de Privacidade
        </Link>.
      </p>

      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={handleAccept}
          className="flex-1 bg-petroleo text-white font-sans text-[13px] font-bold uppercase tracking-wider py-3 rounded-full hover:bg-petroleo/90 transition-colors text-center"
        >
          Aceitar
        </button>
        <button
          onClick={handleReject}
          className="flex-1 bg-transparent border border-petroleo text-petroleo font-sans text-[13px] font-bold uppercase tracking-wider py-3 rounded-full hover:bg-petroleo/5 transition-colors text-center"
        >
          Recusar
        </button>
      </div>
    </div>
  );
}
