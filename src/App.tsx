import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, Instagram, MessageCircle, Globe, 
  Palette, ArrowRight, BarChart3, TrendingUp, Handshake,
  CheckCircle2
} from 'lucide-react';
import { cn } from './lib/utils';

const WHATSAPP_URL = "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20quero%20fazer%20um%20or%C3%A7amento%20com%20a%20Ferrari%20Digital";

const CTAButton = ({ className, children, href = WHATSAPP_URL, variant = 'primary', ...props }: any) => {
  const baseStyle = "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: "bg-ferrari-red text-white hover:bg-red-700 shadow-lg shadow-red-500/30 hover:shadow-red-500/50 focus:ring-ferrari-red",
    outline: "border-2 border-ferrari-red text-ferrari-red hover:bg-ferrari-red hover:text-white focus:ring-ferrari-red",
  };
  
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={cn(baseStyle, variants[variant as keyof typeof variants], className)}
      {...props}
    >
      {children}
    </a>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Pacotes', href: '#pacotes' },
    { name: 'Clientes', href: '#clientes' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-ferrari-black/90 backdrop-blur-md py-4 shadow-xl shadow-black/10" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-2xl font-heading font-extrabold text-white tracking-tight">
              FERRARI <span className="text-ferrari-red">DIGITAL</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-ferrari-red",
                      isScrolled ? "text-gray-300" : "text-white/90"
                    )}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <CTAButton className="px-6 py-2.5 text-sm">
              Faça seu orçamento
            </CTAButton>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-ferrari-black shadow-2xl border-t border-white/10 md:hidden"
          >
            <div className="p-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white font-medium p-3 hover:bg-white/5 rounded-lg active:bg-white/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <CTAButton className="w-full py-3 mt-2">
                Faça seu orçamento
              </CTAButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center bg-ferrari-black overflow-hidden pt-20">
      {/* Dynamic Background with Velocity Lines Idea */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-ferrari-red opacity-20 blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 lg:max-w-xl text-center lg:text-left"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-[1.1] tracking-tight">
              Sua marca na pista de <span className="text-transparent bg-clip-text bg-gradient-to-r from-ferrari-red to-red-400">corrida do digital.</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Organização e gestão digital completa para micro-influenciadores que querem profissionalizar sua presença online.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 lg:mt-6 justify-center lg:justify-start">
              <CTAButton className="w-full sm:w-auto px-8 py-4 text-base sm:text-lg group">
                Faça seu orçamento
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </CTAButton>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-8 mt-8 lg:mt-12 opacity-80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-ferrari-red" />
                <span className="text-sm text-gray-300 font-medium">+30 clientes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-ferrari-red" />
                <span className="text-sm text-gray-300 font-medium">5 anos no mercado</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-ferrari-red" />
                <span className="text-sm text-gray-300 font-medium">+50k em resultados</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Phone Mockup Graphic */}
            <div className="relative w-full max-w-md mx-auto aspect-[9/18] rounded-[3rem] border-[8px] border-gray-900 bg-black shadow-2xl overflow-hidden ring-1 ring-white/10">
              {/* Notch */}
              <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 rounded-b-3xl w-40 mx-auto z-20"></div>
              
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black p-4 pt-12 flex flex-col gap-4">
                {/* Fake IG Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-ferrari-red to-purple-500 p-[2px]">
                    <div className="w-full h-full bg-black rounded-full border border-black overflow-hidden relative">
                      <div className="absolute inset-0 bg-gray-800"></div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-white font-bold text-sm">45K</div>
                    <div className="text-gray-500 text-[10px]">Seguidores</div>
                  </div>
                </div>
                
                {/* Fake Metrics */}
                <div className="bg-gray-800/50 rounded-xl p-4 border border-white/5 backdrop-blur-sm">
                  <div className="flex items-center gap-3 text-ferrari-red mb-2">
                    <TrendingUp className="w-5 h-5" />
                    <span className="text-sm font-semibold text-white">Engajamento em alta</span>
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">+340%</div>
                  <div className="text-xs text-green-400 flex items-center gap-1">
                    Nos últimos 90 dias
                  </div>
                </div>

                <div className="flex-1 rounded-xl bg-gray-900/80 border border-white/5 overflow-hidden flex flex-col pt-4">
                   <div className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Posts Recentes</div>
                   <div className="grid grid-cols-3 gap-1 px-1">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="aspect-square bg-gray-800 rounded-md animate-pulse" style={{animationDelay: `${i * 100}ms`}}></div>
                      ))}
                   </div>
                </div>
              </div>
            </div>

            {/* Floating Badges */}
            <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-20 -left-12 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <Handshake className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Nova Parceria</p>
                <p className="font-bold text-gray-900">Fechada!</p>
              </div>
            </motion.div>

            <motion.div 
               animate={{ y: [0, 10, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute bottom-32 -right-8 bg-ferrari-black rounded-2xl p-4 shadow-xl border border-white/10 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-ferrari-red/20 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-ferrari-red" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium">+ Visitas no site</p>
                <p className="font-bold text-white text-lg">12.4k</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-ferrari-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-ferrari-red text-sm font-semibold uppercase tracking-wider mb-6">
              Quem somos
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-gray-900 mb-6 leading-tight">
              A Ferrari Digital nasceu para acelerar criadores.
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Somos uma agência especializada em micro-influenciadores. Tratamos o seu perfil como negócio, organizamos sua presença digital e cuidamos da parte que tira seu sono — para você focar no que faz de melhor: criar.
              </p>
              <p>
                Nosso trabalho é estratégico e prático. Não vendemos pacotes engessados nem promessas vazias. Entendemos sua marca, montamos um plano sob medida e executamos com a velocidade que o digital exige.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            {[
              { number: '+30', label: 'Clientes acelerados' },
              { number: '+R$ 50k', label: 'Gerados para clientes' },
              { number: '5 anos', label: 'No mercado digital' },
              { number: '98%', label: 'Taxa de retenção' },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-center text-center"
              >
                <div className="text-4xl md:text-5xl font-heading font-bold text-ferrari-red mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon: Icon, title, desc, features }: any) => {
  return (
    <div className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col h-full hover:-translate-y-1">
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-ferrari-red/0 via-transparent to-ferrari-red/0 group-hover:from-ferrari-red/[0.03] group-hover:to-transparent transition-opacity duration-500 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-ferrari-red scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
      
      <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-7 h-7 text-ferrari-red" />
      </div>
      
      <h3 className="text-2xl font-bold font-heading text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 text-sm lg:text-base line-clamp-2">{desc}</p>
      
      <ul className="space-y-3 mt-auto">
        {features.map((item: string, i: number) => (
          <li key={i} className="flex items-start text-sm text-gray-700">
            <span className="mr-2 mt-1 w-1.5 h-1.5 rounded-full bg-ferrari-red shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: Instagram,
      title: "Gestão de Instagram",
      desc: "Estratégia de conteúdo, agendamento e engajamento com identidade consistente.",
      features: ["Planejamento mensal", "Posts e stories", "Edição de reels", "Relatórios"]
    },
    {
      icon: Globe,
      title: "Sites & Landing Pages",
      desc: "Sites profissionais sob medida, otimizados para converter visitantes em clientes.",
      features: ["Design exclusivo", "Mobile-first", "SEO básico", "Hospedagem inclusa"]
    },
    {
      icon: MessageCircle,
      title: "Gestão Comercial Digital",
      desc: "Atendimento de DMs, qualificação de parcerias e fechamento com marcas.",
      features: ["Resposta a DMs", "Mídia kit profissional", "Negociação com marcas", "Contratos"]
    },
    {
      icon: Palette,
      title: "Identidade & Branding",
      desc: "Posicionamento, paleta, tipografia e templates para sua marca se destacar.",
      features: ["Logo e tipografia", "Manual de marca", "Templates editáveis", "Direção criativa"]
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-gray-900 mb-4">
              O que fazemos
            </h2>
            <p className="text-xl text-gray-500">
              Tudo que sua marca precisa para crescer com consistência.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 items-stretch">
          {services.map((svc, i) => (
             <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="h-full"
             >
                <ServiceCard {...svc} />
             </motion.div>
          ))}
        </div>

        <div className="text-center">
           <CTAButton className="px-8 py-4 text-lg">
              Faça seu orçamento
           </CTAButton>
        </div>
      </div>
    </section>
  );
};

const Packages = () => {
  const plans = [
    {
      name: "Básico",
      description: "Para quem está começando a profissionalizar sua presença digital.",
      oldPrice: "R$ 497",
      price: "R$ 297",
      period: "/mês",
      features: [
        "Gestão de Instagram (Estruturação)",
        "2 Posts semanais",
        "Roteiros para Stories",
        "Relatório mensal"
      ],
      ctaText: "Quero o plano Básico",
      popular: false
    },
    {
      name: "Intermediário",
      description: "Nosso plano principal para crescer com consistência e autoridade.",
      oldPrice: "R$ 997",
      price: "R$ 497",
      period: "/mês",
      features: [
        "Gestão completa de Instagram",
        "4 Posts semanais + Edição de Reels",
        "Site / Landing Page profissional",
        "Suporte focado em vendas"
      ],
      ctaText: "Quero o plano Intermediário",
      popular: true
    },
    {
      name: "Completo",
      description: "Para criadores que querem delegar tudo e focar apenas na criação.",
      oldPrice: "R$ 1.497",
      price: "R$ 897",
      period: "/mês",
      features: [
        "Estratégia omnicanal (Insta + TikTok)",
        "Posts diários + Edição Pro",
        "Gestão comercial direta com marcas",
        "Identidade visual e branding",
        "Suporte prioritário"
      ],
      ctaText: "Quero o plano Completo",
      popular: false
    }
  ];

  return (
    <section id="pacotes" className="py-24 bg-ferrari-bg-dark text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">
              Aceleração sob medida
            </h2>
            <p className="text-xl text-gray-400">
              Escolha o modelo ideal para a fase atual do seu negócio digital.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={cn(
                "relative rounded-3xl p-8 flex flex-col h-full",
                plan.popular 
                  ? "bg-gradient-to-b from-gray-900 to-black border-2 border-ferrari-red shadow-2xl shadow-red-900/40 md:-translate-y-4" 
                  : "bg-gray-900 border border-gray-800"
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-ferrari-red text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest whitespace-nowrap">
                  Mais escolhido
                </div>
              )}
              <h3 className="text-2xl font-bold font-heading mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-6 h-10">{plan.description}</p>
              
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-gray-500 line-through text-sm font-medium">{plan.oldPrice}</span>
                  <span className="text-ferrari-red text-xs font-bold uppercase tracking-wider bg-red-950/30 px-2 py-0.5 rounded-md">Desconto Especial</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-heading font-extrabold text-white">{plan.price}</span>
                  <span className="text-gray-400 text-sm font-medium">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start text-gray-300 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-ferrari-red mr-3 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <CTAButton 
                href={`${WHATSAPP_URL}%20sobre%20o%20plano%20${plan.name}`}
                variant={plan.popular ? "primary" : "outline"} 
                className={cn(
                  "w-full text-base py-5 font-bold",
                  !plan.popular && "border-gray-700 text-gray-300 hover:text-white"
                )}
              >
                {plan.ctaText}
              </CTAButton>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Camila Silva",
      role: "Criadora de Lifestyle",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
      text: "A Ferrari Digital mudou o jogo para mim. Eu estava estagnada e perdendo muito tempo com coisas operacionais. Eles organizaram tudo e, em três meses, minhas parcerias fechadas com marcas dobraram."
    },
    {
      name: "Lucas Mendes",
      role: "Especialista em Finanças",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
      text: "Eu queria um posicionamento mais premium, mas não sabia como fazer no digital. O time entregou um site incrível e uma gestão de Instagram impecável. O resultado em novas mentorias fala por si só."
    },
    {
      name: "Marina Costa",
      role: "Influenciadora de Moda",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200",
      text: "Delegar a parte comercial foi a melhor decisão. Agora tenho tempo de sobra para criar conteúdos de melhor qualidade enquanto a agência prospecta e negocia ativamente com as marcas por mim."
    }
  ];

  return (
    <section id="clientes" className="py-24 bg-ferrari-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-gray-900 mb-4">
              Resultados reais na pista
            </h2>
            <p className="text-xl text-gray-500">
              O que nossos clientes dizem sobre a gestão da Ferrari Digital.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col items-center text-center relative"
            >
              <div className="absolute top-8 text-6xl font-serif text-gray-100 opacity-50 leading-none">"</div>
              <p className="text-gray-600 mb-8 mt-6 relative z-10 text-sm md:text-base leading-relaxed">
                "{item.text}"
              </p>
              <div className="mt-auto flex flex-col items-center">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-16 h-16 rounded-full object-cover mb-4 border-4 border-ferrari-bg-light shadow-md"
                />
                <h4 className="font-bold text-gray-900 font-heading">{item.name}</h4>
                <p className="text-ferrari-red text-sm font-medium">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contato" className="relative py-32 bg-ferrari-black overflow-hidden">
      {/* Ambient Red Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ferrari-red/20 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-heading font-extrabold text-white mb-6">
            Pronto para <span className="text-transparent bg-clip-text bg-gradient-to-br from-ferrari-red to-red-600">acelerar?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Conte sua história para a gente. Em até 24h você recebe um diagnóstico gratuito do seu perfil.
          </p>
          
          <CTAButton className="px-10 py-5 text-xl w-full sm:w-auto">
            Faça seu orçamento no WhatsApp
          </CTAButton>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
              <MessageCircle className="w-5 h-5" />
              <span>(11) 9999-99999</span>
            </a>
            <span className="hidden sm:inline">•</span>
            <a href="mailto:contato@ferraridigital.com" className="hover:text-white transition-colors">
              contato@ferraridigital.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10 text-center sm:text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          
          <div className="flex flex-col sm:items-start items-center">
            <span className="text-2xl font-heading font-extrabold text-white tracking-tight mb-2">
              FERRARI <span className="text-ferrari-red">DIGITAL</span>
            </span>
            <span className="text-sm text-gray-500 italic">Velocidade que sua marca merece.</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            <a href="#sobre" className="text-gray-400 hover:text-white transition-colors">Sobre</a>
            <a href="#servicos" className="text-gray-400 hover:text-white transition-colors">Serviços</a>
            <a href="#pacotes" className="text-gray-400 hover:text-white transition-colors">Pacotes</a>
            <a href="#clientes" className="text-gray-400 hover:text-white transition-colors">Clientes</a>
            <a href="#contato" className="text-gray-400 hover:text-white transition-colors">Contato</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-ferrari-red transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href={WHATSAPP_URL} className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-green-500 transition-all">
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>© 2026 Ferrari Digital — Todos os direitos reservados.</p>
          <p>CNPJ: 00.000.000/0001-00</p>
        </div>
      </div>
    </footer>
  );
};

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300 group"
      aria-label="Fale conosco no WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75 pointer-events-none"></span>
      <MessageCircle className="w-7 h-7 relative z-10" />
    </motion.a>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-ferrari-bg-light font-body">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Packages />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

