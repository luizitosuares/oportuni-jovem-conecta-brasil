
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
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
  );
};

export default Footer;
