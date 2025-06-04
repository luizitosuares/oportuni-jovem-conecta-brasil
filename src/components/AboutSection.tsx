
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
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
  );
};

export default AboutSection;
