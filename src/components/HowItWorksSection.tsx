
const HowItWorksSection = () => {
  return (
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
  );
};

export default HowItWorksSection;
