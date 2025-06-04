
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Users, BookOpen, Briefcase, Star, ArrowRight, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const featuredOpportunities = [
    {
      id: 1,
      title: "Bolsa ENEM Excellence",
      type: "Bolsa de Estudo",
      deadline: "15 dias",
      area: "Universidade",
      status: "Nova",
      description: "Bolsa integral para cursos superiores"
    },
    {
      id: 2,
      title: "Curso Técnico em TI",
      type: "Curso Técnico",
      deadline: "8 dias",
      area: "Tecnologia",
      status: "Destaque",
      description: "Formação completa em desenvolvimento"
    },
    {
      id: 3,
      title: "Estágio Banco do Brasil",
      type: "Estágio",
      deadline: "22 dias",
      area: "Administração",
      status: "Nova",
      description: "Programa de estágio para estudantes"
    }
  ];

  const stats = [
    { icon: Users, number: "2.500+", label: "Jovens conectados" },
    { icon: BookOpen, number: "450+", label: "Oportunidades ativas" },
    { icon: Briefcase, number: "120+", label: "Empresas parceiras" },
    { icon: Star, number: "98%", label: "Taxa de satisfação" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-indigo-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">O</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Oportuni-Jovem
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#oportunidades" className="text-gray-600 hover:text-indigo-600 transition-colors">
                Oportunidades
              </a>
              <a href="#como-funciona" className="text-gray-600 hover:text-indigo-600 transition-colors">
                Como Funciona
              </a>
              <a href="#sobre" className="text-gray-600 hover:text-indigo-600 transition-colors">
                Sobre
              </a>
              <Button variant="outline" className="border-indigo-200 text-indigo-600 hover:bg-indigo-50">
                Entrar
              </Button>
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                Cadastrar-se
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
              <div className="flex flex-col space-y-3">
                <a href="#oportunidades" className="text-gray-600 hover:text-indigo-600 transition-colors">
                  Oportunidades
                </a>
                <a href="#como-funciona" className="text-gray-600 hover:text-indigo-600 transition-colors">
                  Como Funciona
                </a>
                <a href="#sobre" className="text-gray-600 hover:text-indigo-600 transition-colors">
                  Sobre
                </a>
                <div className="flex flex-col space-y-2 pt-2">
                  <Button variant="outline" className="border-indigo-200 text-indigo-600 hover:bg-indigo-50">
                    Entrar
                  </Button>
                  <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                    Cadastrar-se
                  </Button>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Sua jornada para o
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {" "}futuro{" "}
            </span>
            começa aqui 🚀
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Conectamos estudantes do ensino médio às melhores oportunidades de bolsas de estudo, 
            cursos técnicos, estágios e mentorias. Construa seu projeto de vida com a gente! ✨
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-lg px-8 py-6"
            >
              Começar Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-indigo-200 text-indigo-600 hover:bg-indigo-50 text-lg px-8 py-6"
            >
              Explorar Oportunidades
            </Button>
          </div>

          {/* Quick Search */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input 
                placeholder="Buscar oportunidades..." 
                className="pl-12 py-3 text-center border-indigo-200 focus:border-indigo-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white/50 backdrop-blur-sm py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl mb-4">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Opportunities */}
      <section id="oportunidades" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Oportunidades em Destaque 🌟
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Confira as oportunidades mais procuradas pelos jovens da sua região
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {featuredOpportunities.map((opportunity) => (
            <Card key={opportunity.id} className="group hover:shadow-lg transition-all duration-300 border-indigo-100 hover:border-indigo-200">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <Badge 
                    variant={opportunity.status === "Destaque" ? "default" : "secondary"}
                    className={opportunity.status === "Destaque" ? "bg-gradient-to-r from-indigo-500 to-purple-600" : ""}
                  >
                    {opportunity.status}
                  </Badge>
                  <span className="text-sm text-gray-500">
                    ⏰ {opportunity.deadline}
                  </span>
                </div>
                
                <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {opportunity.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {opportunity.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="text-xs">
                      {opportunity.type}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {opportunity.area}
                    </Badge>
                  </div>
                  <Button size="sm" variant="ghost" className="text-indigo-600 hover:text-indigo-700">
                    Ver mais
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="border-indigo-200 text-indigo-600 hover:bg-indigo-50"
          >
            Ver Todas as Oportunidades
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* How It Works */}
      <section id="como-funciona" className="bg-gradient-to-r from-indigo-500 to-purple-600 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Como Funciona? 🤔
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Em 3 passos simples, você já estará conectado às melhores oportunidades
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Cadastre-se</h3>
              <p className="opacity-90">
                Crie seu perfil em menos de 2 minutos e conte sobre seus interesses e objetivos
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Descubra</h3>
              <p className="opacity-90">
                Receba recomendações personalizadas de bolsas, cursos e estágios
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Realize</h3>
              <p className="opacity-90">
                Candidate-se às oportunidades e construa seu futuro profissional
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Sobre o Oportuni-Jovem 💙
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Acreditamos que todo jovem merece acesso a oportunidades de qualidade. Nossa plataforma 
            conecta estudantes do ensino médio público a bolsas de estudo, cursos técnicos, programas 
            de estágio e mentorias, ajudando a construir projetos de vida sólidos e realizadores.
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Trabalhamos com curadoria especializada para garantir que todas as oportunidades sejam 
            confiáveis, acessíveis e alinhadas com o perfil dos nossos usuários. Nosso objetivo é 
            democratizar o acesso à educação e ao mercado de trabalho.
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
          >
            Faça Parte da Nossa Comunidade
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">O</span>
                </div>
                <span className="text-lg font-bold">Oportuni-Jovem</span>
              </div>
              <p className="text-gray-400 text-sm">
                Conectando jovens ao futuro através de oportunidades transformadoras.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Oportunidades</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Bolsas de Estudo</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cursos Técnicos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Estágios</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mentorias</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Como Funciona</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Conecte-se</h4>
              <p className="text-gray-400 text-sm mb-4">
                Fique por dentro das novidades e dicas para sua carreira.
              </p>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Seu e-mail" 
                  className="flex-1 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
                <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">
                  OK
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Oportuni-Jovem. Todos os direitos reservados. Feito com 💙 para os jovens do Brasil.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
