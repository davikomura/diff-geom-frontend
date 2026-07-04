import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { MobiusBackground } from "../components/MobiusBackground";
import { Play, BookOpen, Compass, Activity, Globe } from "lucide-react";

export const Home = () => {
  const { t } = useTranslation();
  const { lang = "pt" } = useParams<{ lang: string }>();

  const langPrefix = `/${lang}`;

  return (
    <div className="relative min-h-[92vh] flex flex-col bg-black text-gray-100 overflow-hidden">
      {/* React 19 Native SEO Meta Tags Hoisting */}
      <title>{t("seo.home.title")}</title>
      <meta name="description" content={t("seo.home.description")} />

      <MobiusBackground />

      <main className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8 text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
                  {t("home.title")}
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed"
            >
              {t("home.intro")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link to={`${langPrefix}/viewer`}>
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(239, 68, 68, 0.4)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold px-8 py-4 rounded-full shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  <Play className="w-5 h-5 fill-current" />
                  {t("header.viewer")}
                </motion.button>
              </Link>

              <Link to={`${langPrefix}/learn/basics`}>
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 hover:border-white/20 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-all duration-300 backdrop-blur-sm cursor-pointer"
                >
                  <BookOpen className="w-5 h-5" />
                  {t("header.learn")}
                </motion.button>
              </Link>
            </motion.div>
          </div>

          <div className="lg:col-span-5 hidden lg:flex justify-center items-center">
            {/* Visual representation of 3D math geometry */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-80 h-80 rounded-full border border-orange-500/20 flex items-center justify-center relative bg-orange-500/5 backdrop-blur-[2px]"
            >
              <div className="absolute inset-4 rounded-full border border-red-500/10 animate-ping" />
              <div className="absolute inset-8 rounded-full border border-yellow-500/30 border-dashed" />
              <div className="absolute inset-16 rounded-full border border-white/5 bg-white/[0.01]" />
              <Compass className="w-20 h-20 text-orange-400 opacity-60" />
            </motion.div>
          </div>
        </div>

        {/* Feature Highlights section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-24 md:mt-36 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-12"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-orange-400">
              <Compass className="w-6 h-6" />
              <h3 className="font-bold text-lg text-white">Visualização Geométrica</h3>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              {t("home.description1")}
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-red-400">
              <Activity className="w-6 h-6" />
              <h3 className="font-bold text-lg text-white">Cálculo em Tempo Real</h3>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              {t("home.description2")}
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-yellow-400">
              <Globe className="w-6 h-6" />
              <h3 className="font-bold text-lg text-white">Multilíngue & Acessível</h3>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Explore o simulador em vários idiomas como Português, Inglês, Espanhol, Francês e Alemão. Perfeito para fins educacionais e pesquisas acadêmicas globais.
            </p>
          </div>
        </motion.section>
      </main>
    </div>
  );
};
export default Home;
