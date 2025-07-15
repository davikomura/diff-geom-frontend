import { Link } from "react-router-dom";
import LanguageDropdown from "../components/LanguageDropdown";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <header className="w-full bg-black border-t border-red-600 text-gray-300 shadow-md z-50 relative">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-extrabold tracking-tight">
          GeoSim<span className="text-white">3D</span>
        </Link>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link
              to="/"
              className="hover:text-white transition-colors duration-200"
            >
              {t("header.home")}
            </Link>
            <Link
              to="/viewer"
              className="hover:text-white transition-colors duration-200"
            >
              {t("header.viewer")}
            </Link>

            <div className="relative group">
              <div className="flex items-center cursor-pointer text-sm font-medium hover:text-white transition-colors duration-200">
                <span>{t("header.learn")}</span>
                <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />
              </div>

              <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 absolute left-0 mt-2 bg-gray-800/90 border border-gray-700 rounded-md shadow-lg p-2 w-48 z-50">
                <Link
                  to="/learn/basics"
                  className="block px-4 py-2 text-sm rounded hover:bg-gray-700 hover:text-white transition-colors duration-200"
                >
                  {t("header.learnBasics")}
                </Link>
                <Link
                  to="/learn/advanced"
                  className="block px-4 py-2 text-sm rounded hover:bg-gray-700 hover:text-white transition-colors duration-200"
                >
                  {t("header.learnAdvanced")}
                </Link>
              </div>
            </div>

            <Link
              to="/about"
              className="hover:text-white transition-colors duration-200"
            >
              {t("header.about")}
            </Link>
          </nav>

          <button
            className="md:hidden p-2 rounded-md bg-gray-800/80 border border-gray-700 hover:bg-gray-700/70 transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          <LanguageDropdown />
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden px-6 pb-4">
          <nav className="flex flex-col gap-4 text-sm font-medium bg-gray-800/90 border border-gray-700 rounded-md p-4 backdrop-blur-sm shadow-lg">
            <Link
              to="/"
              className="hover:text-white transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("header.home")}
            </Link>
            <Link
              to="/viewer"
              className="hover:text-white transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("header.viewer")}
            </Link>
            <div>
              <span className="block text-gray-400 mb-1">
                {t("header.learn")}
              </span>
              <div className="flex flex-col pl-4">
                <Link
                  to="/learn/basics"
                  className="hover:text-white transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("header.learnBasics")}
                </Link>
                <Link
                  to="/learn/advanced"
                  className="hover:text-white transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("header.learnAdvanced")}
                </Link>
              </div>
            </div>
            <Link
              to="/about"
              className="hover:text-white transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("header.about")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
