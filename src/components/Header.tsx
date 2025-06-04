
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
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
  );
};

export default Header;
