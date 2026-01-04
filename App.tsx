

import React, { useState, useEffect } from 'react';
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
  Smartphone,
  MessageCircle,
  TrendingUp,
  PieChart,
  Database,
  Table2,
  Star
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

  // Scroll reveal will be handled via CSS and a single intersection observer

  useEffect(() => {
    // Single observer for all animated elements
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all elements with scroll-reveal class
    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="w-full min-h-screen font-inter flex flex-col selection:bg-yellow-500/30">

      {/* HERO SECTION */}
      <Section className="bg-evolution-green border-b border-white/10 pt-24">
        <div className="text-center scroll-reveal">
          <img
            src="/logo2.png?v=3"
            alt="Evolution Logo"
            className="w-32 h-32 rounded-full object-cover mb-8 mx-auto"
          />
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
        {/* Elementos decorativos de background */}

        {/* Logo Power BI à DIREITA - GRANDE E ANIMADO */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 animate-float-slow opacity-5 z-0">
          <img src="/bi.png" alt="Power BI" className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain" />
        </div>

        {/* Logo Excel à ESQUERDA - GRANDE E ANIMADO */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 animate-float-slower opacity-5 z-0">
          <img src="/excel.png" alt="Excel" className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-contain" />
        </div>

        {/* Elementos decorativos adicionais */}
        <div className="absolute top-10 left-1/4 w-32 h-32 bg-gold/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-10 right-1/4 w-40 h-40 bg-yellow-500/10 blob blur-2xl"></div>

        {/* Ícones flutuantes de dados */}
        <div className="absolute top-1/3 right-20 animate-float-slow opacity-10 hidden lg:block">
          <TrendingUp className="w-16 h-16 text-gold" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-float-fast opacity-5 hidden lg:block">
          <Database className="w-12 h-12 text-green-400" />
        </div>
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
        {/* Ícones adicionais de dados */}
        <div className="absolute top-40 left-20 animate-float-slow opacity-5">
          <FileSpreadsheet className="w-16 h-16 text-green-400" />
        </div>
        <div className="absolute bottom-40 right-20 animate-float-fast opacity-5">
          <TrendingUp className="w-14 h-14 text-gold" />
        </div>
        {/* Logos Excel e Power BI como background */}
        <div className="absolute top-20 right-5 animate-float-slower opacity-5 z-0 hidden lg:block">
          <img src="/excel.png" alt="Excel" className="w-40 h-40 object-contain" />
        </div>
        <div className="absolute top-40 left-5 animate-float opacity-5 z-0 hidden lg:block">
          <img src="/bi.png" alt="Power BI" className="w-32 h-32 object-contain" />
        </div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-gold/10 rounded-full blur-3xl"></div>
        <div className="relative z-10 scroll-reveal">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-8 h-8 text-[#d4af37]" />
            <h2 className="text-2xl md:text-3xl font-bold">Formação Analista de Dados – Excel & Power BI</h2>
          </div>
          <div className="space-y-6 text-gray-300 text-lg font-light leading-relaxed mb-10">
            <p>
              A Formação Analista de Dados foi criada para quem sente que já não basta apenas saber usar ferramentas, mas precisa analisar dados, gerar insights e apoiar decisões no dia a dia profissional.
            </p>
            <p>
              Durante a formação, você vai aprender Excel e Power BI de forma estruturada, com aulas ao vivo, exemplos reais e acompanhamento próximo, saindo do operacional e evoluindo para uma atuação mais analítica e estratégica.
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

      {/* PROVA SOCIAL - 1000+ ALUNOS */}
      <Section className="py-8 bg-white/5">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 scroll-reveal">
          {/* 1000+ Alunos */}
          <div className="flex items-center gap-4">
            <div className="bg-gold/10 p-4 rounded-full">
              <Users className="w-8 h-8 text-gold" />
            </div>
            <div>
              <p className="text-3xl font-bold text-gold">+1000</p>
              <p className="text-gray-400 text-sm">Alunos Satisfeitos</p>
            </div>
          </div>

          {/* 5 Estrelas */}
          <div className="flex items-center gap-4">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 text-gold fill-gold" />
              ))}
            </div>
            <div>
              <p className="text-xl font-bold">5.0</p>
              <p className="text-gray-400 text-sm">Avaliação</p>
            </div>
          </div>
        </div>
      </Section>

      {/* CAMADA 3: O QUE VOCÊ VAI APRENDER */}
      <Section id="conteudo" className="relative overflow-hidden">
        <div className="text-center mb-16 scroll-reveal">
          <div className="inline-block relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">O Que Você Vai Aprender</h2>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-gold/30 rounded-full animate-ping"></div>
          </div>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full"></div>
        </div>
        {/* Ícones decorativos de análise */}
        <div className="absolute top-10 left-10 animate-float opacity-5">
          <Table2 className="w-24 h-24 text-green-400" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float-delayed opacity-5">
          <BarChart className="w-20 h-20 text-gold" />
        </div>
        {/* Logos Power BI e Excel como background */}
        <div className="absolute top-20 right-5 animate-float-slow opacity-5 z-0 hidden lg:block">
          <img src="/bi.png" alt="Power BI" className="w-52 h-52 object-contain" />
        </div>
        <div className="absolute bottom-20 left-5 animate-float-slower opacity-5 z-0 hidden lg:block">
          <img src="/excel.png" alt="Excel" className="w-44 h-44 object-contain" />
        </div>

        {/* EXCEL */}
        <div className="mb-20 relative">
          {/* Dashboard background */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <img src="/dash1.png" alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-evolution-green via-transparent to-evolution-green"></div>
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <FileSpreadsheet className="w-10 h-10 text-green-400" />
              <h3 className="text-2xl font-bold italic">Excel aplicado à Análise de Dados</h3>
            </div>
            <p className="text-gray-300 mb-8 font-light leading-relaxed">
              Você começará pelo essencial e avançará para o uso do Excel como ferramenta analítica, aprendendo a organizar dados, cruzar informações e criar análises consistentes para apoiar a tomada de decisão.
            </p>
            {/* CARDS GRID */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {EXCEL_MODULES.map((module) => (
                <div key={module.id} className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl transition-all hover:bg-white/10 hover:border-gold/30 hover:shadow-xl hover:scale-[1.02]">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-green-400/10 p-2 rounded-lg">
                      <FileSpreadsheet className="w-6 h-6 text-green-400" />
                    </div>
                    <span className="text-gold font-bold text-xs uppercase tracking-widest">Módulo {module.id}</span>
                  </div>
                  <h4 className="text-lg font-bold mb-2">{module.title}</h4>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">{module.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* POWER BI */}
        <div className="relative z-10">
          {/* Dashboard background */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <img src="/dash2.png" alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-evolution-green via-transparent to-evolution-green"></div>
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <BarChart className="w-10 h-10 text-yellow-400" />
              <h3 className="text-2xl font-bold italic">Power BI para Análise e Visualização</h3>
            </div>
            <p className="text-gray-300 mb-8 font-light leading-relaxed">
              No Power BI, você aprenderá a transformar dados em dashboards profissionais, entendendo não apenas o "como fazer", mas também o porquê das decisões de modelagem, visualização e cálculos.
            </p>
            {/* CARDS GRID */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {POWER_BI_MODULES.map((module) => (
                <div key={module.id} className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl transition-all hover:bg-white/10 hover:border-gold/30 hover:shadow-xl hover:scale-[1.02]">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-yellow-400/10 p-2 rounded-lg">
                      <BarChart className="w-6 h-6 text-yellow-400" />
                    </div>
                    <span className="text-gold font-bold text-xs uppercase tracking-widest">Módulo {module.id}</span>
                  </div>
                  <h4 className="text-lg font-bold mb-2">{module.title}</h4>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">{module.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center italic">
          <p className="text-gray-300">Conteúdo aplicado a cenários reais de empresas.</p>
        </div>
        <div className="mt-8">
          <WhatsAppButton
            text="Quero saber se esse curso é para mim"
            customMessage="Olá, quero saber mais da formação Power BI para Análise e Visualização"
            fullWidth
          />
        </div>
      </Section>


      {/* QUEM É O SEU PROFESSOR */}
      <Section className="relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-10 right-10 animate-float-slow opacity-5">
          <Award className="w-20 h-20 text-gold" />
        </div>
        <div className="absolute bottom-10 left-10 animate-float-delayed opacity-5">
          <Users className="w-16 h-16 text-green-400" />
        </div>
        {/* Logos BI e Excel */}
        <div className="absolute top-20 left-5 animate-float-slower opacity-5 z-0 hidden lg:block">
          <img src="/bi.png" alt="Power BI" className="w-40 h-40 object-contain" />
        </div>
        <div className="absolute bottom-20 right-5 animate-float opacity-5 z-0 hidden lg:block">
          <img src="/excel.png" alt="Excel" className="w-36 h-36 object-contain" />
        </div>
        <div className="relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Quem é o seu professor</h2>
            <div className="w-12 h-1 bg-gold mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Foto */}
            <div className="flex justify-center">
              <div className="relative z-10">
                <div className="absolute inset-0 bg-gold/20 rounded-2xl blur-xl"></div>
                <img
                  src="/felipe.png"
                  alt="Felipe Brandão"
                  className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl border-2 border-gold/30 shadow-2xl"
                />
              </div>
            </div>

            {/* Texto */}
            <div>
              <h3 className="text-2xl font-bold text-gold mb-4">Felipe Brandão</h3>
              <p className="text-sm text-gray-400 mb-6 italic">Analista de BI & Analytics | Fundador da Evolution Treinamentos</p>

              <div className="space-y-4 text-gray-300 font-light leading-relaxed">
                <p>
                  Analista de Business Intelligence e Analytics, Consultor de Negócios e Professor, com sólida atuação em Excel, Power BI, Análise de Dados, DAX, ETL, Automação (RPA) e UX/UI para dashboards.
                </p>
                <p>
                  Com mais de 10 anos de experiência ministrando treinamentos, Felipe é formado em Sistemas de Informação pela Área 1 e construiu sua carreira desenvolvendo soluções de BI e automação para empresas no Brasil e no exterior.
                </p>
                <p>
                  É fundador da <span className="text-gold font-semibold">Evolution Treinamentos</span>, focada em formação profissional e consultoria em BI, e sócio fundador da <span className="text-gold font-semibold">FourMind – Soluções em Tecnologia</span>, onde lidera projetos de automação e soluções analíticas personalizadas.
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* PARA QUEM É */}
        <Section className="bg-evolution-green relative overflow-hidden">
          <div className="absolute top-20 right-10 animate-float-slow opacity-5 hidden lg:block">
            <Users className="w-24 h-24 text-gold" />
          </div>
          {/* Logos BI e Excel nas bordas */}
          <div className="absolute top-10 left-5 animate-float opacity-5 z-0 hidden lg:block">
            <img src="/excel.png" alt="Excel" className="w-48 h-48 object-contain" />
          </div>
          <div className="absolute bottom-10 right-5 animate-float-delayed opacity-5 z-0 hidden lg:block">
            <img src="/bi.png" alt="Power BI" className="w-44 h-44 object-contain" />
          </div>
          <div className="relative z-10">
            <div className="text-center mb-16 scroll-reveal">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Para quem é</h2>
              <div className="w-20 h-1 bg-gold mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="group p-8 bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20 rounded-2xl transition-all hover:border-green-500/40 hover:shadow-2xl hover:scale-[1.02]">
                <div className="bg-green-500/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-green-400">Começando do Zero</h3>
                <p className="text-gray-300 font-light leading-relaxed">
                  Se você nunca abriu o Power BI, não tem o programa instalado ou até já tentou aprender e não conseguiu avançar, este curso é para você.
                </p>
              </div>

              <div className="group p-8 bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/20 rounded-2xl transition-all hover:border-yellow-500/40 hover:shadow-2xl hover:scale-[1.02]">
                <div className="bg-yellow-500/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">Em Evolução</h3>
                <p className="text-gray-300 font-light leading-relaxed">
                  Se você já deu os primeiros passos e ainda se considera básico no Power BI, este curso vai ser perfeito para acelerar o seu desenvolvimento.
                </p>
              </div>

              <div className="group p-8 bg-gradient-to-br from-gold/10 to-transparent border border-gold/20 rounded-2xl transition-all hover:border-gold/40 hover:shadow-2xl hover:scale-[1.02]">
                <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <BarChart className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gold">Usuários Experientes</h3>
                <p className="text-gray-300 font-light leading-relaxed">
                  Se você já cria relatórios, dashboards ou domina o essencial do Power BI, este é o curso que vai destravar o próximo nível para você.
                </p>
              </div>
            </div>
          </div>
        </Section>


        {/* BÔNUS */}
        <Section className="bg-gold/5 relative overflow-hidden">
          {/* Elementos decorativos */}
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-gold/10 rounded-full blur-3xl"></div>
          {/* Logos Power BI e Excel como background */}
          <div className="absolute top-20 left-5 animate-float-slow opacity-5 z-0 hidden lg:block">
            <img src="/bi.png" alt="Power BI" className="w-48 h-48 object-contain" />
          </div>
          <div className="absolute bottom-20 right-5 animate-float opacity-5 z-0 hidden lg:block">
            <img src="/excel.png" alt="Excel" className="w-40 h-40 object-contain" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <Gift className="w-10 h-10 text-gold animate-pulse" />
              <h2 className="text-3xl font-bold">BÔNUS</h2>
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
        <Section className="bg-evolution-green relative overflow-hidden">
          {/* Logos decorativos */}
          <div className="absolute top-10 left-5 animate-float-slow opacity-5 z-0 hidden lg:block">
            <img src="/excel.png" alt="Excel" className="w-40 h-40 object-contain" />
          </div>
          <div className="absolute bottom-10 right-5 animate-float opacity-5 z-0 hidden lg:block">
            <img src="/bi.png" alt="Power BI" className="w-44 h-44 object-contain" />
          </div>
          <div className="flex flex-col md:flex-row gap-12 items-center scroll-reveal">
            <div className="md:w-1/2">
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="w-8 h-8 text-gold" />
                <h2 className="text-3xl font-bold">Treinamentos In Company</h2>
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
        <Section className="relative overflow-hidden">
          {/* Logos decorativos */}
          <div className="absolute top-10 left-5 animate-float-slower opacity-5 z-0 hidden lg:block">
            <img src="/bi.png" alt="Power BI" className="w-36 h-36 object-contain" />
          </div>
          <div className="absolute bottom-10 right-5 animate-float opacity-5 z-0 hidden lg:block">
            <img src="/excel.png" alt="Excel" className="w-36 h-36 object-contain" />
          </div>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Quem Somos</h2>
            <div className="w-12 h-1 bg-gold mx-auto mb-10 rounded-full"></div>
          </div>
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 flex flex-col items-center scroll-reveal">
            <p className="text-lg text-gray-300 font-light leading-relaxed text-center mb-8 italic">
              "A Evolution Treinamentos é especializada em formações práticas em Excel, Power BI e Análise de Dados, com foco total em aplicação real no mercado. Nossos treinamentos são conduzidos por profissionais que atuam diretamente com dados, BI e automação, conectando teoria com desafios reais enfrentados por empresas e profissionais."
            </p>
            <div className="flex items-center gap-4">
              <img src="/logo2.png" alt="Evolution Logo" className="w-12 h-12 rounded-full object-cover border-2 border-gold/30" />
              <div className="text-left">
                <span className="block font-bold text-gold">Evolution Treinamentos</span>
                <span className="block text-sm text-gray-400">Consultoria e Educação Corporativa</span>
              </div>
            </div>
          </div>
        </Section>


        {/* CERTIFICADO */}
        <Section className="bg-white/5 relative overflow-hidden">
          {/* Logos decorativos */}
          <div className="absolute top-20 left-5 animate-float opacity-5 z-0 hidden lg:block">
            <img src="/excel.png" alt="Excel" className="w-40 h-40 object-contain" />
          </div>
          <div className="absolute bottom-20 right-5 animate-float-delayed opacity-5 z-0 hidden lg:block">
            <img src="/bi.png" alt="Power BI" className="w-40 h-40 object-contain" />
          </div>
          <div className="relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Foto do Certificado - Lado Esquerdo */}
              <div className="order-2 md:order-1">
                <div className="relative group max-w-lg mx-auto">
                  <div className="absolute inset-0 bg-gold/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all"></div>
                  <img
                    src="/certificado.png"
                    alt="Certificado Evolution Treinamentos"
                    className="relative w-full h-auto rounded-2xl border-2 border-gold/30 shadow-2xl"
                  />
                </div>
              </div>

              {/* Texto - Lado Direito */}
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Certificado Reconhecido</h2>
                <div className="w-20 h-1 bg-gold mb-6 rounded-full"></div>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  Certificado Reconhecido em todo o Brasil, por Empresas e Instituições de Ensino
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Ao concluir a formação, você receberá um certificado digital que comprova suas competências em Excel e Power BI, reconhecido nacionalmente e valorizado pelo mercado.
                </p>
              </div>
            </div>
          </div>
        </Section>

      </Section>

      {/* FAQ */}
      <Section id="faq" className="bg-white/5">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <HelpCircle className="w-10 h-10 text-gold" />
          </div>
          <h2 className="text-3xl font-bold">Perguntas Frequentes</h2>
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
      <Section className="relative overflow-hidden">
        {/* Logos decorativos */}
        <div className="absolute top-10 left-5 animate-float-slow opacity-5 z-0 hidden lg:block">
          <img src="/excel.png" alt="Excel" className="w-40 h-40 object-contain" />
        </div>
        <div className="absolute top-10 right-5 animate-float opacity-5 z-0 hidden lg:block">
          <img src="/bi.png" alt="Power BI" className="w-40 h-40 object-contain" />
        </div>
        <div className="absolute bottom-10 left-5 animate-float-delayed opacity-5 z-0 hidden xl:block">
          <img src="/bi.png" alt="Power BI" className="w-32 h-32 object-contain" />
        </div>
        <div className="absolute bottom-10 right-5 animate-float-slower opacity-5 z-0 hidden xl:block">
          <img src="/excel.png" alt="Excel" className="w-32 h-32 object-contain" />
        </div>
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Outros Cursos</h2>
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
          <p className="text-lg text-gold font-bold mb-6">Se você tiver dúvida de qual é o ideal para o seu nível, nossa equipe te orienta pelo WhatsApp.</p>
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
        <div className="flex items-center justify-center gap-3 mb-2">
          <img src="/logo2.png" alt="Evolution Logo" className="w-8 h-8 rounded-full object-cover" />
          <span className="text-white font-semibold">Evolution Treinamentos</span>
        </div>
        <p>&copy; Evolution Treinamentos e Consultoria. Todos os direitos reservados.</p>
        <p className="mt-1 text-xs">CNPJ: 46.303.413/0001-46</p>
      </footer>

      {/* STICKY WHATSAPP (All Devices) */}
      <div className="fixed bottom-4 right-4 z-50">
        <a
          href="https://wa.me/557193446927?text=Olá%2C%20visitei%20sua%20p%C3%A1gina%20e%20gostaria%20de%20mais%20detalhes%20sobre%20suas%20forma%C3%A7%C3%B5es"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-500 p-4 rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 transition-all"
        >
          <img src="/whatsapp-svgrepo-com.svg" alt="WhatsApp" className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
};

export default App;
