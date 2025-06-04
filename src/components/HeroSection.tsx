
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
