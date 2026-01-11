
import React from 'react';
import { EXPERT_DATA, IMAGES } from './constants.ts';
import WhatsAppButton from './components/WhatsAppButton.tsx';
import Gallery from './components/Gallery.tsx';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-end overflow-hidden pt-10">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.hero} 
            alt={EXPERT_DATA.name}
            className="w-full h-full object-cover object-top filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 px-6 py-12 text-center w-full max-w-xl">
          <span className="inline-block bg-black text-white text-[10px] font-bold py-1 px-3 rounded-full mb-4 tracking-[0.2em] uppercase">
            ESTÉTICA & HARMONIZAÇÃO
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 leading-tight mb-8">
            Eu sou a {EXPERT_DATA.name}, <br/>
            sua Dentista em {EXPERT_DATA.city.split('-')[0]}.
          </h1>
          
          <WhatsAppButton />

          <p className="mt-10 text-gray-800 text-base md:text-lg leading-relaxed font-medium">
            Especialista em transformar sorrisos com segurança, técnica avançada e um olhar artístico focado na sua naturalidade.
          </p>
        </div>
      </section>

      {/* 2. QUEM SOU EU */}
      <section className="py-20 px-6 bg-soft-gold">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-2xl">
            <img src={IMAGES.authority} alt="Autoridade" className="w-full h-auto" />
          </div>
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-3xl font-serif font-bold mb-6 gold-text italic">Sua autoestima é meu propósito.</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Acredito que um sorriso bonito e um rosto harmonioso não são apenas estética, são canais de autoconfiança. Minha abordagem é 100% personalizada: não busco padrões, busco a <strong>melhor versão de você</strong>.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Pós-graduada em Estética Dental Avançada",
                "Especialista em Harmonização Orofacial",
                "Foco em procedimentos minimamente invasivos",
                "Atendimento exclusivo e humanizado"
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full gold-gradient flex items-center justify-center">
                    <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. GALERIA DE RESULTADOS */}
      <Gallery />

      {/* 4. POR QUE CONFIAR EM MIM */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-center font-bold mb-12">Por que confiar o seu rosto a mim?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Avaliação Honestíssima",
                desc: "Eu não indico o que você não precisa. Priorizo a saúde e a ética acima de qualquer venda.",
                icon: (
                  <svg className="w-8 h-8 gold-text" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: "Atendimento Direto",
                desc: "Sem burocracias ou intermediários distantes. Você fala diretamente comigo e com minha equipe focada.",
                icon: (
                  <svg className="w-8 h-8 gold-text" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                  </svg>
                )
              },
              {
                title: "Foco no Resultado Real",
                desc: "Meu objetivo é um rejuvenescimento que ninguém pergunta 'o que você fez', mas sim diz 'como você está bem'.",
                icon: (
                  <svg className="w-8 h-8 gold-text" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                )
              }
            ].map((card, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA INTERMEDIÁRIO */}
      <section className="py-16 px-6 bg-white border-y border-gray-100">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-serif font-bold mb-4">Deseja uma avaliação profissional gratuita?</h2>
          <p className="text-gray-600 mb-8">
            Estou reservando alguns horários na minha agenda para avaliar novos casos pessoalmente e sem custo.
          </p>
          <WhatsAppButton label="QUERO MINHA CONSULTA GRATUITA" />
        </div>
      </section>

      {/* 6. COMO FUNCIONA */}
      <section className="py-20 px-6 bg-soft-gold">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-center font-bold mb-16">Como funciona a sua primeira consulta</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 border-t-2 border-dashed border-yellow-200 z-0"></div>
            {[
              { step: "01", title: "WhatsApp", desc: "Clique nos botões desta página para falar com minha equipe agora." },
              { step: "02", title: "Agendamento", desc: "Escolha o melhor dia e horário disponível para você." },
              { step: "03", title: "Avaliação", desc: "Vire ao consultório para conversarmos sobre seus desejos e planejar seu caso." }
            ].map((item, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center text-2xl font-bold mb-6 shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-12 text-sm text-yellow-800 font-semibold bg-yellow-100 py-3 px-6 rounded-full inline-block mx-auto w-full max-w-sm flex items-center justify-center">
            Primeira consulta gratuita e sem compromisso.
          </p>
        </div>
      </section>

      {/* 7. MAIS PROVAS (FAMILIA) */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-xl">
            <img src={IMAGES.family} alt="Família da Dra Dayana" className="w-full h-auto" />
          </div>
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-3xl font-serif font-bold mb-6 italic">Por trás do jaleco...</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Minha família é minha base e minha maior motivação para oferecer o meu melhor todos os dias. No consultório, trato cada paciente como gostaria que minha própria família fosse tratada: com respeito, carinho e a excelência que cada vida merece.
            </p>
            <div className="flex items-center gap-4 text-sm font-bold tracking-widest text-gray-400 uppercase">
              <span className="w-10 h-px bg-gray-300"></span>
              Valores Reais
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="py-24 px-6 bg-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-600/10 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-600/10 blur-[100px] rounded-full"></div>
        
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
            Pronta para elevar sua confiança através do seu sorriso?
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
            Não deixe para depois a chance de se sentir ainda melhor consigo mesma. Clique abaixo e garanta sua vaga.
          </p>
          <WhatsAppButton 
            label="GARANTIR MINHA CONSULTA GRATUITA" 
            className="scale-110"
          />
        </div>
      </section>

      {/* 9. RODAPÉ */}
      <footer className="py-12 px-6 bg-soft-gold border-t border-yellow-100">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <h4 className="text-xl font-serif font-bold mb-2">{EXPERT_DATA.name}</h4>
          <p className="text-gray-500 text-sm mb-6">{EXPERT_DATA.profession} | {EXPERT_DATA.city}</p>
          
          <div className="flex items-center gap-6 mb-8">
            <a href={EXPERT_DATA.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-yellow-600 transition-colors" title="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href={EXPERT_DATA.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-green-600 transition-colors" title="WhatsApp">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </a>
            <a href={EXPERT_DATA.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-red-500 transition-colors" title="Localização">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </a>
          </div>
          
          <p className="text-gray-400 text-[10px] uppercase tracking-widest">
            © {new Date().getFullYear()} {EXPERT_DATA.name} • Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
