
import React from 'react';
import { Module, FAQItem, Course } from './types';
import {
  BarChart,
  FileSpreadsheet,
  Users,
  Award,
  Clock,
  Calendar,
  Video,
  Smartphone,
  CheckCircle2,
  ChevronDown
} from 'lucide-react';

export const WHATSAPP_LINK = "https://wa.me/557193446927?text=Olá! Gostaria de saber mais sobre a Formação Analista de Dados.";

export const EXCEL_MODULES: Module[] = [
  { id: 1, title: "Excel Essencial – Ferramentas Básicas", description: "Introdução ao Excel, organização de planilhas, formatação, filtros e produtividade." },
  { id: 2, title: "Excel Intermediário I – Ferramentas Intermediárias", description: "Funções intermediárias, organização de dados e boas práticas de análise." },
  { id: 3, title: "Excel Intermediário II – Fórmulas Matemáticas", description: "Funções matemáticas e lógicas aplicadas à análise de dados." },
  { id: 4, title: "Excel Intermediário III – Fórmulas de Referência e Função SE", description: "PROCV/PROCX, ÍNDICE e CORRESP, Função SE e combinações aplicadas." },
  { id: 5, title: "Excel para Dashboards", description: "Estruturação de bases, indicadores e criação de dashboards no Excel." },
];

export const POWER_BI_MODULES: Module[] = [
  { id: 1, title: "Introdução ao Power BI e Contextualização", description: "Conceitos de BI, cenário de mercado e primeiros passos." },
  { id: 2, title: "ETL com Power Query", description: "Importação, limpeza e transformação de dados." },
  { id: 3, title: "Modelagem de Dados e Relacionamentos", description: "Estruturação correta do modelo, tabelas fato e dimensão." },
  { id: 4, title: "Linguagem DAX", description: "Criação de medidas, cálculos essenciais e contexto de filtro." },
  { id: 5, title: "Visualização de Dados", description: "Criação de dashboards, boas práticas visuais e storytelling." },
  { id: 6, title: "Power BI Online", description: "Publicação, compartilhamento, atualização automática e colaboração." },
];

export const FAQ_ITEMS: FAQItem[] = [
  { question: "As aulas são ao vivo?", answer: "Sim, e todas ficam gravadas por 12 meses." },
  { question: "Consigo acompanhar mesmo trabalhando?", answer: "Sim. As aulas acontecem à noite e você pode rever quando quiser." },
  { question: "Esse curso é muito pesado?", answer: "É uma formação intensiva, mas estruturada para quem trabalha." },
];

export const EXCEL_COURSES: Course[] = [
  { name: "Excel Essencial (Básico)", description: "Fundamentos, produtividade e organização" },
  { name: "Excel Intermediário", description: "Funções, cruzamento de dados e análise prática" },
  { name: "Excel Avançado", description: "Fórmulas avançadas, automação e soluções mais robustas" },
  { name: "Excel para Dashboards", description: "Indicadores e painéis no Excel (visual + prática)" },
];

export const POWERBI_COURSES: Course[] = [
  { name: "Power BI Essencial (Básico)", description: "Do zero ao primeiro dashboard" },
  { name: "Power BI Intermediário", description: "Modelagem e DAX essencial" },
  { name: "Power BI Avançado", description: "Performance, governança e cenários reais" },
  { name: "Power BI Online", description: "Publicação, compartilhamento e atualização automática" },
];
