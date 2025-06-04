
import { Users, BookOpen, Briefcase, Star } from "lucide-react";

const StatsSection = () => {
  const stats = [
    { icon: Users, number: "2.500+", label: "Jovens conectados" },
    { icon: BookOpen, number: "450+", label: "Oportunidades ativas" },
    { icon: Briefcase, number: "120+", label: "Empresas parceiras" },
    { icon: Star, number: "98%", label: "Taxa de satisfação" }
  ];

  return (
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
  );
};

export default StatsSection;
