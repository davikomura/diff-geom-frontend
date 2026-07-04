import { Link, useLocation, useParams } from "react-router-dom";
import LanguageDropdown from "../components/LanguageDropdown";
import { useState } from "react";
import { Menu, X, ChevronDown, BookOpen, Compass, Layers, Info } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();
  const { lang = "pt" } = useParams<{ lang: string }>();

  const langPrefix = `/${lang}`;
  const isHomeActive = location.pathname === langPrefix || location.pathname === `${langPrefix}/`;
  const isViewerActive = location.pathname === `${langPrefix}/viewer`;
  const isAboutActive = location.pathname === `${langPrefix}/about`;
  const isBasicsActive = location.pathname === `${langPrefix}/learn/basics`;
  const isAdvancedActive = location.pathname === `${langPrefix}/learn/advanced`;
  const isLearnActive = isBasicsActive || isAdvancedActive;

  const navItems = [
    { label: t("header.home"), path: langPrefix, active: isHomeActive },
    { label: t("header.viewer"), path: `${langPrefix}/viewer`, active: isViewerActive },
    { label: t("header.about"), path: `${langPrefix}/about`, active: isAboutActive },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent py-6 px-6 md:px-12 flex items-center justify-between border-none">
      {/* Logo Section */}
      <Link 
        to={langPrefix}
        className="flex items-center gap-2 text-xl font-black tracking-tight select-none cursor-pointer group"
      >
        <span className="text-white group-hover:text-gray-300 transition-colors">GeoSim</span>
        <span className="h-4 w-[1px] bg-white/20" />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 font-extrabold text-sm">
          3D
        </span>
      </Link>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`relative py-1 transition-colors duration-300 ${
              item.active ? "text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            <span>{item.label}</span>
            {/* Minimalist Animated Underline */}
            {item.active && (
              <motion.div
                layoutId="headerUnderline"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </Link>
        ))}

        {/* Learn Dropdown Menu */}
        <div className="relative group py-1">
          <button
            className={`flex items-center gap-1 transition-colors duration-300 cursor-pointer ${
              isLearnActive ? "text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            <span>{t("header.learn")}</span>
            <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
          </button>

          {/* Submenu Dropdown */}
          <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 absolute left-1/2 -translate-x-1/2 mt-3 bg-neutral-950/95 border border-white/10 rounded-2xl shadow-2xl p-2 w-52 backdrop-blur-2xl flex flex-col gap-1">
            <Link
              to={`${langPrefix}/learn/basics`}
              className={`flex items-center gap-3 px-3 py-2 text-xs rounded-xl hover:bg-white/5 hover:text-white transition-all duration-200 ${
                isBasicsActive ? "bg-white/5 text-white font-bold" : "text-gray-400"
              }`}
            >
              <Compass className="w-4 h-4 text-orange-400" />
              {t("header.learnBasics")}
            </Link>
            <Link
              to={`${langPrefix}/learn/advanced`}
              className={`flex items-center gap-3 px-3 py-2 text-xs rounded-xl hover:bg-white/5 hover:text-white transition-all duration-200 ${
                isAdvancedActive ? "bg-white/5 text-white font-bold" : "text-gray-400"
              }`}
            >
              <Layers className="w-4 h-4 text-purple-400" />
              {t("header.learnAdvanced")}
            </Link>
          </div>
        </div>
      </nav>

      {/* Right Action Section */}
      <div className="flex items-center gap-4">
        <LanguageDropdown />

        {/* Mobile Hamburger menu toggle */}
        <button
          className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X className="w-5 h-5 text-gray-300" /> : <Menu className="w-5 h-5 text-gray-300" />}
        </button>
      </div>

      {/* Mobile Menu Slide Down Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-20 left-6 right-6 bg-neutral-950/95 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-2xl overflow-hidden"
          >
            <div className="flex flex-col gap-2 p-5 text-xs font-semibold">
              <Link
                to={langPrefix}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-all ${
                  isHomeActive ? "bg-white/5 text-white" : "text-gray-400"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Compass className="w-4 h-4 text-orange-400" />
                {t("header.home")}
              </Link>
              
              <Link
                to={`${langPrefix}/viewer`}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-all ${
                  isViewerActive ? "bg-white/5 text-white" : "text-gray-400"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Layers className="w-4 h-4 text-blue-400" />
                {t("header.viewer")}
              </Link>

              <div className="h-[1px] bg-white/5 my-1" />

              <div className="px-4 py-1.5 text-gray-500 uppercase tracking-widest text-[9px] font-bold">
                {t("header.learn")}
              </div>

              <Link
                to={`${langPrefix}/learn/basics`}
                className={`flex items-center gap-3 pl-8 pr-4 py-2.5 rounded-xl hover:bg-white/5 transition-all ${
                  isBasicsActive ? "text-white bg-white/5 font-bold" : "text-gray-400"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <BookOpen className="w-3.5 h-3.5 text-orange-400" />
                {t("header.learnBasics")}
              </Link>
              
              <Link
                to={`${langPrefix}/learn/advanced`}
                className={`flex items-center gap-3 pl-8 pr-4 py-2.5 rounded-xl hover:bg-white/5 transition-all ${
                  isAdvancedActive ? "text-white bg-white/5 font-bold" : "text-gray-400"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Layers className="w-3.5 h-3.5 text-purple-400" />
                {t("header.learnAdvanced")}
              </Link>

              <div className="h-[1px] bg-white/5 my-1" />

              <Link
                to={`${langPrefix}/about`}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-all ${
                  isAboutActive ? "bg-white/5 text-white" : "text-gray-400"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Info className="w-4 h-4 text-green-400" />
                {t("header.about")}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
export default Header;
