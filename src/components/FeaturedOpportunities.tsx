
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedOpportunities = () => {
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

  return (
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
        <Link to="/oportunidades">
          <Button 
            variant="outline" 
            size="lg"
            className="border-indigo-200 text-indigo-600 hover:bg-indigo-50"
          >
            Ver Todas as Oportunidades
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedOpportunities;
