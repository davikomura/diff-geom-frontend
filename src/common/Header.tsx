import { Link } from "react-router-dom";
import LanguageDropdown from "../components/LanguageDropdown";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent text-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-2xl font-extrabold tracking-tight">
          GeoSim<span className="text-white">3D</span>
        </span>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link
              to="/"
              className="hover:text-white transition-colors duration-200"
            >
              {t("header.home")}
            </Link>
            <Link
              to="/visualizador"
              className="hover:text-white transition-colors duration-200"
            >
              {t("header.viewer")}
            </Link>
            <Link
              to="/sobre"
              className="hover:text-white transition-colors duration-200"
            >
              {t("header.about")}
            </Link>
          </nav>

          <button
            className="md:hidden p-2 rounded-md bg-gray-800/80 border border-gray-700 hover:bg-gray-700/70 transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
              to="/visualizador"
              className="hover:text-white transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("header.viewer")}
            </Link>
            <Link
              to="/sobre"
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
