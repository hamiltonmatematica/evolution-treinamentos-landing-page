
import React, { useState } from 'react';
import {
  BarChart,
  FileSpreadsheet,
  Users,
  Award,
  Clock,
  Calendar,
  Video,
  CheckCircle2,
  ChevronDown,
  Gift,
  Building2,
  HelpCircle,
  ArrowRight,
  // Added Smartphone to the imports to fix missing component errors
  Smartphone
} from 'lucide-react';
import { Section } from './components/Section';
import { WhatsAppButton } from './components/WhatsAppButton';
import {
  EXCEL_MODULES,
  POWER_BI_MODULES,
  FAQ_ITEMS,
  EXCEL_COURSES,
  POWERBI_COURSES,
  WHATSAPP_LINK
} from './constants';

const App: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen font-inter flex flex-col selection:bg-yellow-500/30">

      {/* HERO SECTION */}
      <Section className="bg-evolution-green border-b border-white/10 pt-24">
        <div className="text-center">
          <div className="inline-block mb-8 rounded-full border border-gold/30 overflow-hidden bg-evolution-green">
            <img
              src="/logo.png?v=3"
              alt="Evolution Logo"
              className="w-32 h-32 object-cover scale-110"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
            Torne-se <span className="gradient-text">Analista de Dados</span> com Excel e Power BI
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Aprenda do essencial ao nível profissional, com aulas ao vivo, projetos práticos e foco no que o mercado realmente exige.
          </p>
          <WhatsAppButton
            text="Quero me inscrever (WhatsApp)"
            customMessage="Olá, quero me tornar Analista de Dados com Excel e Power BI"
          />
        </div>
        {/* Elementos decorativos animados */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-gold/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-500/10 blob blur-2xl"></div>
      </Section>

      {/* CAMADA 2: FORMAÇÃO ANALISTA */}
      <Section className="bg-white/5 relative overflow-hidden">
        {/* Ícones flutuantes decorativos */}
        <div className="absolute top-20 right-10 animate-float opacity-10">
          <Award className="w-16 h-16 text-gold" />
        </div>
        <div className="absolute bottom-20 left-10 animate-float-delayed opacity-10">
          <BarChart className="w-20 h-20 text-yellow-400" />
        </div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-gold/10 rounded-full blur-3xl"></div>
        <div className="relative">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-8 h-8 text-[#d4af37]" />
            <h2 className="text-2xl md:text-3xl font-bold">🎓 Formação Analista de Dados – Excel & Power BI</h2>
          </div>
          <div className="space-y-6 text-gray-300 text-lg font-light leading-relaxed mb-10">
            <p>
              A Formação Analista de Dados foi criada para quem sente que já não basta apenas saber usar ferramentas, mas precisa analisar dados, gerar insights e apoiar decisões no dia a dia profissional.
            </p>
            <p>
              Durante a formação, você vai aprender Excel e Power BI de forma estruturada, with aulas ao vivo, exemplos reais e acompanhamento próximo, saindo do operacional e evoluindo para uma atuação mais analítica e estratégica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {[
              { icon: <Clock className="w-5 h-5 text-gold" />, text: "51 horas de aulas ao vivo" },
              { icon: <Calendar className="w-5 h-5 text-gold" />, text: "Formação intensiva com conclusão em 1 mês" },
              { icon: <BarChart className="w-5 h-5 text-gold" />, text: "Excel e Power BI até o nível profissional" },
              { icon: <Smartphone className="w-5 h-5 text-gold" />, text: "Dashboards e projetos práticos" },
              { icon: <Video className="w-5 h-5 text-gold" />, text: "Acesso às gravações por 12 meses" },
              { icon: <Award className="w-5 h-5 text-gold" />, text: "Certificado de conclusão" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-lg">
                {item.icon}
                <span className="text-white font-medium">{item.text}</span>
              </div>
            ))}
          </div>
          <WhatsAppButton
            text="Quero participar da Formação Analista"
            customMessage="Olá, quero participar da formação analista"
            fullWidth
          />
        </div>
      </Section>

      {/* CAMADA 3: O QUE VOCÊ VAI APRENDER */}
      <Section id="conteudo">
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">📊 O Que Você Vai Aprender</h2>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-gold/30 rounded-full animate-ping"></div>
          </div>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full"></div>
        </div>

        {/* EXCEL */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <FileSpreadsheet className="w-10 h-10 text-green-400" />
            <h3 className="text-2xl font-bold italic">Excel aplicado à Análise de Dados</h3>
          </div>
          <p className="text-gray-300 mb-8 font-light leading-relaxed">
            Você começará pelo essencial e avançará para o uso do Excel como ferramenta analítica, aprendendo a organizar dados, cruzar informações e criar análises consistentes para apoiar a tomada de decisão.
          </p>
          <div className="space-y-4">
            {EXCEL_MODULES.map((module) => (
              <div key={module.id} className="group p-6 bg-white/5 border-l-4 border-gold rounded-r-xl transition-all hover:bg-white/10">
                <span className="text-gold font-bold text-sm uppercase tracking-widest mb-1 block">Módulo {module.id}</span>
                <h4 className="text-xl font-bold mb-2">{module.title}</h4>
                <p className="text-gray-400 font-light">{module.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* POWER BI */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <BarChart className="w-10 h-10 text-yellow-400" />
            <h3 className="text-2xl font-bold italic">Power BI para Análise e Visualização</h3>
          </div>
          <p className="text-gray-300 mb-8 font-light leading-relaxed">
            No Power BI, você aprenderá a transformar dados em dashboards profissionais, entendendo não apenas o “como fazer”, mas também o porquê das decisões de modelagem, visualização e cálculos.
          </p>
          <div className="space-y-4">
            {POWER_BI_MODULES.map((module) => (
              <div key={module.id} className="group p-6 bg-white/5 border-l-4 border-gold rounded-r-xl transition-all hover:bg-white/10">
                <span className="text-gold font-bold text-sm uppercase tracking-widest mb-1 block">Módulo {module.id}</span>
                <h4 className="text-xl font-bold mb-2">{module.title}</h4>
                <p className="text-gray-400 font-light">{module.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 p-6 bg-gold/10 rounded-xl border border-gold/30 text-center italic">
          <p>📌 Conteúdo aplicado a cenários reais de empresas.</p>
        </div>
        <div className="mt-8">
          <WhatsAppButton
            text="Quero saber se esse curso é para mim"
            customMessage="Olá, quero saber mais da formação Power BI para Análise e Visualização"
            fullWidth
          />
        </div>
      </Section>

      {/* BÔNUS */}
      <Section className="bg-gold/5 relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute -top-10 -left-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-gold/10 rounded-full blur-3xl"></div>
        <div className="relative">
          <div className="flex items-center gap-3 mb-8">
            <Gift className="w-10 h-10 text-gold animate-pulse" />
            <h2 className="text-3xl font-bold">🎁 BÔNUS (Detalhe que convence)</h2>
          </div>
          <p className="text-lg text-gray-300 mb-8 font-light">
            Além da formação ao vivo, você também terá acesso a dois cursos gravados, que complementam o aprendizado e aumentam seu repertório técnico e visual:
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {[
              "Excel para Dashboards: do Zero à Análise Visual",
              "UI/UX para Dashboards: Criando Layouts Profissionais no Figma"
            ].map((bonus, idx) => (
              <div key={idx} className="p-6 bg-evolution-green border border-gold/50 rounded-2xl flex items-start gap-4">
                <div className="bg-gold p-2 rounded-lg text-evolution-green">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <p className="font-bold text-lg">{bonus}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gold italic font-medium">
            Esses bônus ajudam você a apresentar dados de forma mais clara, profissional e impactante.
          </p>
        </div>
      </Section>

      {/* IN COMPANY */}
      <Section className="bg-white/5">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="w-8 h-8 text-gold" />
              <h2 className="text-3xl font-bold">🏢 Treinamentos In Company</h2>
            </div>
            <p className="text-gray-300 text-lg font-light leading-relaxed mb-8">
              A Evolution Treinamentos também atua com treinamentos corporativos personalizados, focados na realidade de cada empresa. Os conteúdos são adaptados aos dados, indicadores e necessidades do negócio, ajudando equipes a desenvolver visão analítica, padronização de relatórios e melhor uso de Excel e Power BI.
            </p>
            <WhatsAppButton
              text="Quero falar sobre treinamento in company"
              customMessage="Olá, quero saber mais sobre Treinamentos In Company"
            />
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-6">
            <div className="bg-white/5 p-8 rounded-xl border border-white/10 flex items-center justify-center hover:scale-105 transition-transform">
              <FileSpreadsheet className="w-20 h-20 text-green-400 animate-pulse" />
            </div>
            <div className="bg-white/5 p-8 rounded-xl border border-white/10 flex items-center justify-center hover:scale-105 transition-transform">
              <BarChart className="w-20 h-20 text-yellow-400 animate-pulse" />
            </div>
          </div>
        </div>
      </Section>

      {/* QUEM SOMOS */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">👨‍🏫 Quem Somos</h2>
          <div className="w-12 h-1 bg-gold mx-auto mb-10 rounded-full"></div>
        </div>
        <div className="bg-white/5 p-8 rounded-3xl border border-white/10 flex flex-col items-center">
          <p className="text-lg text-gray-300 font-light leading-relaxed text-center mb-8 italic">
            "A Evolution Treinamentos é especializada em formações práticas em Excel, Power BI e Análise de Dados, com foco total em aplicação real no mercado. Nossos treinamentos são conduzidos por profissionais que atuam diretamente com dados, BI e automação, conectando teoria com desafios reais enfrentados por empresas e profissionais."
          </p>
          <div className="flex items-center gap-4">
            <Users className="w-12 h-12 text-gold p-2 bg-gold/10 rounded-full" />
            <div className="text-left">
              <span className="block font-bold text-gold">Evolution Treinamentos</span>
              <span className="block text-sm text-gray-400">Consultoria e Educação Corporativa</span>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" className="bg-white/5">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <HelpCircle className="w-10 h-10 text-gold" />
          </div>
          <h2 className="text-3xl font-bold">❓ Perguntas Frequentes</h2>
        </div>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <div key={index} className="border border-white/10 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-6 text-left flex justify-between items-center bg-white/5 hover:bg-white/10 transition-colors"
              >
                <span className="font-bold text-lg">{item.question}</span>
                <ChevronDown className={`w-6 h-6 text-gold transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === index && (
                <div className="p-6 bg-white/5 border-t border-white/10">
                  <p className="text-gray-300 font-light leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* OUTROS CURSOS */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">📚 Outros Cursos</h2>
          <p className="text-gray-300 font-light max-w-2xl mx-auto">
            Nem todo aluno quer começar pela Formação completa — por isso, também oferecemos cursos avulsos para você evoluir no seu ritmo e conforme sua necessidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* EXCEL CARDS */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <FileSpreadsheet className="w-6 h-6 text-green-400" />
              <h3 className="text-2xl font-bold italic">Cursos de Excel</h3>
            </div>
            <div className="space-y-4">
              {EXCEL_COURSES.map((course, idx) => (
                <div key={idx} className="p-4 bg-white/5 border border-white/10 rounded-xl hover:border-gold/30 transition-all">
                  <h4 className="font-bold text-lg text-white mb-1">{course.name}</h4>
                  <p className="text-gray-400 text-sm">{course.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* POWER BI CARDS */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <BarChart className="w-6 h-6 text-yellow-400" />
              <h3 className="text-2xl font-bold italic">Cursos de Power BI</h3>
            </div>
            <div className="space-y-4">
              {POWERBI_COURSES.map((course, idx) => (
                <div key={idx} className="p-4 bg-white/5 border border-white/10 rounded-xl hover:border-gold/30 transition-all">
                  <h4 className="font-bold text-lg text-white mb-1">{course.name}</h4>
                  <p className="text-gray-400 text-sm">{course.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-8 bg-gold/10 rounded-3xl border-2 border-dashed border-gold/40 text-center">
          <p className="text-lg text-gold font-bold mb-6">📌 Se você tiver dúvida de qual é o ideal para o seu nível, nossa equipe te orienta pelo WhatsApp.</p>
          <div className="flex justify-center">
            <WhatsAppButton
              text="Quero escolher o curso ideal para mim"
              customMessage="Olá, visitei sua página e gostaria de conhecer mais sobre as formações"
            />
          </div>
        </div>
      </Section>


      {/* FOOTER */}
      <footer className="py-12 border-t border-white/10 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Evolution Treinamentos e Consultoria. Todos os direitos reservados.</p>
        <div className="mt-4 flex justify-center gap-4">
          <a href="#" className="hover:text-gold transition-colors">Políticas de Privacidade</a>
          <a href="#" className="hover:text-gold transition-colors">Termos de Uso</a>
        </div>
      </footer>

      {/* STICKY WHATSAPP (All Devices) */}
      <div className="fixed bottom-4 right-4 z-50">
        <a
          href="https://wa.me/557193446927?text=Olá%2C%20visitei%20sua%20p%C3%A1gina%20e%20gostaria%20de%20mais%20detalhes%20sobre%20suas%20forma%C3%A7%C3%B5es"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-500 p-4 rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 transition-all"
        >
          <Smartphone className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default App;
