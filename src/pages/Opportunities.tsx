
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Filter, 
  ArrowRight, 
  MapPin, 
  Clock, 
  GraduationCap,
  Briefcase,
  BookOpen,
  Users,
  X
} from "lucide-react";
import { Link } from "react-router-dom";

const Opportunities = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    type: "todos",
    area: "todas",
    location: "todas",
    deadline: "todas"
  });

  const opportunities = [
    {
      id: 1,
      title: "Bolsa ENEM Excellence",
      type: "Bolsa de Estudo",
      area: "Universidade",
      location: "Nacional",
      deadline: "15 dias",
      description: "Bolsa integral para cursos superiores baseada na nota do ENEM",
      organization: "Instituto Futuro",
      requirements: ["Nota ENEM mínima 700", "Renda familiar até 3 salários"],
      status: "Nova"
    },
    {
      id: 2,
      title: "Curso Técnico em TI",
      type: "Curso Técnico",
      area: "Tecnologia",
      location: "São Paulo",
      deadline: "8 dias",
      description: "Formação completa em desenvolvimento de sistemas",
      organization: "SENAI",
      requirements: ["Ensino médio em andamento", "Idade entre 16-25 anos"],
      status: "Destaque"
    },
    {
      id: 3,
      title: "Estágio Banco do Brasil",
      type: "Estágio",
      area: "Administração",
      location: "Múltiplas cidades",
      deadline: "22 dias",
      description: "Programa de estágio para estudantes do ensino médio",
      organization: "Banco do Brasil",
      requirements: ["Cursando ensino médio", "Disponibilidade 4h/dia"],
      status: "Nova"
    },
    {
      id: 4,
      title: "Mentoria em Empreendedorismo",
      type: "Mentoria",
      area: "Negócios",
      location: "Online",
      deadline: "30 dias",
      description: "Programa de mentoria para jovens empreendedores",
      organization: "Sebrae Jovem",
      requirements: ["Ter projeto de negócio", "Idade entre 16-24 anos"],
      status: "Nova"
    },
    {
      id: 5,
      title: "Bolsa ProUni Medicina",
      type: "Bolsa de Estudo",
      area: "Saúde",
      location: "Nacional",
      deadline: "45 dias",
      description: "Bolsa parcial e integral para cursos de medicina",
      organization: "MEC",
      requirements: ["ENEM mínimo 750", "Escola pública ou bolsista"],
      status: "Destaque"
    },
    {
      id: 6,
      title: "Curso Técnico Enfermagem",
      type: "Curso Técnico",
      area: "Saúde",
      location: "Rio de Janeiro",
      deadline: "12 dias",
      description: "Formação técnica em enfermagem com estágio garantido",
      organization: "FAETEC",
      requirements: ["Ensino médio completo", "Exame médico"],
      status: "Nova"
    }
  ];

  const filteredOpportunities = opportunities.filter(opp => {
    const matchesSearch = opp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opp.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opp.organization.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = selectedFilters.type === "todos" || opp.type === selectedFilters.type;
    const matchesArea = selectedFilters.area === "todas" || opp.area === selectedFilters.area;
    
    return matchesSearch && matchesType && matchesArea;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Bolsa de Estudo": return <GraduationCap className="h-4 w-4" />;
      case "Curso Técnico": return <BookOpen className="h-4 w-4" />;
      case "Estágio": return <Briefcase className="h-4 w-4" />;
      case "Mentoria": return <Users className="h-4 w-4" />;
      default: return <BookOpen className="h-4 w-4" />;
    }
  };

  const clearFilters = () => {
    setSelectedFilters({
      type: "todos",
      area: "todas", 
      location: "todas",
      deadline: "todas"
    });
    setSearchTerm("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-indigo-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">O</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Oportuni-Jovem
              </span>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-gray-600 hover:text-indigo-600 transition-colors">
                Início
              </Link>
              <span className="text-indigo-600 font-medium">Oportunidades</span>
              <Button variant="outline" className="border-indigo-200 text-indigo-600 hover:bg-indigo-50">
                Entrar
              </Button>
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                Cadastrar-se
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore Todas as 
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Oportunidades
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Encontre a oportunidade perfeita para seu futuro! Use os filtros para refinar sua busca.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-indigo-100 p-6 mb-8">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input 
              placeholder="Buscar por oportunidade, organização ou palavra-chave..." 
              className="pl-12 py-3 border-indigo-200 focus:border-indigo-400 text-base"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Filter Tabs */}
          <Tabs defaultValue="type" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="type" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Tipo
              </TabsTrigger>
              <TabsTrigger value="area">Área</TabsTrigger>
              <TabsTrigger value="location">Local</TabsTrigger>
              <TabsTrigger value="deadline">Prazo</TabsTrigger>
            </TabsList>
            
            <TabsContent value="type" className="mt-4">
              <div className="flex flex-wrap gap-2">
                {["todos", "Bolsa de Estudo", "Curso Técnico", "Estágio", "Mentoria"].map((type) => (
                  <Button
                    key={type}
                    variant={selectedFilters.type === type ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedFilters({...selectedFilters, type})}
                    className={selectedFilters.type === type ? "bg-indigo-600" : "border-indigo-200 text-indigo-600"}
                  >
                    {type === "todos" ? "Todos os tipos" : type}
                  </Button>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="area" className="mt-4">
              <div className="flex flex-wrap gap-2">
                {["todas", "Tecnologia", "Saúde", "Administração", "Negócios", "Universidade"].map((area) => (
                  <Button
                    key={area}
                    variant={selectedFilters.area === area ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedFilters({...selectedFilters, area})}
                    className={selectedFilters.area === area ? "bg-indigo-600" : "border-indigo-200 text-indigo-600"}
                  >
                    {area === "todas" ? "Todas as áreas" : area}
                  </Button>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="location" className="mt-4">
              <div className="flex flex-wrap gap-2">
                {["todas", "Nacional", "São Paulo", "Rio de Janeiro", "Online", "Múltiplas cidades"].map((location) => (
                  <Button
                    key={location}
                    variant={selectedFilters.location === location ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedFilters({...selectedFilters, location})}
                    className={selectedFilters.location === location ? "bg-indigo-600" : "border-indigo-200 text-indigo-600"}
                  >
                    {location === "todas" ? "Todos os locais" : location}
                  </Button>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="deadline" className="mt-4">
              <div className="flex flex-wrap gap-2">
                {["todas", "Até 7 dias", "Até 15 dias", "Até 30 dias", "Mais de 30 dias"].map((deadline) => (
                  <Button
                    key={deadline}
                    variant={selectedFilters.deadline === deadline ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedFilters({...selectedFilters, deadline})}
                    className={selectedFilters.deadline === deadline ? "bg-indigo-600" : "border-indigo-200 text-indigo-600"}
                  >
                    {deadline === "todas" ? "Todos os prazos" : deadline}
                  </Button>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Clear Filters */}
          {(searchTerm || Object.values(selectedFilters).some(filter => !["todos", "todas"].includes(filter))) && (
            <div className="mt-4 pt-4 border-t border-gray-100">
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-4 w-4 mr-2" />
                Limpar filtros
              </Button>
            </div>
          )}
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Mostrando <span className="font-semibold text-indigo-600">{filteredOpportunities.length}</span> oportunidades
          </p>
        </div>

        {/* Opportunities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOpportunities.map((opportunity) => (
            <Card key={opportunity.id} className="group hover:shadow-lg transition-all duration-300 border-indigo-100 hover:border-indigo-200">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Badge 
                      variant={opportunity.status === "Destaque" ? "default" : "secondary"}
                      className={opportunity.status === "Destaque" ? "bg-gradient-to-r from-indigo-500 to-purple-600" : ""}
                    >
                      {opportunity.status}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {getTypeIcon(opportunity.type)}
                      <span className="ml-1">{opportunity.type}</span>
                    </Badge>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {opportunity.deadline}
                  </div>
                </div>
                
                <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {opportunity.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-3">
                  {opportunity.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-2" />
                    {opportunity.organization}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-2" />
                    {opportunity.location}
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-2">Requisitos principais:</p>
                  <div className="space-y-1">
                    {opportunity.requirements.slice(0, 2).map((req, index) => (
                      <p key={index} className="text-xs text-gray-600">• {req}</p>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    {opportunity.area}
                  </Badge>
                  <Button size="sm" variant="ghost" className="text-indigo-600 hover:text-indigo-700">
                    Ver detalhes
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredOpportunities.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Nenhuma oportunidade encontrada
            </h3>
            <p className="text-gray-600 mb-4">
              Tente ajustar seus filtros ou termo de busca para encontrar mais resultados.
            </p>
            <Button onClick={clearFilters} variant="outline" className="border-indigo-200 text-indigo-600">
              Limpar filtros
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Opportunities;
