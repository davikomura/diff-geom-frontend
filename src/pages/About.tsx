import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Info, Code, User, Cpu } from "lucide-react";

export const About = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-[92vh] flex flex-col bg-black text-gray-100">
      {/* React 19 Native SEO Meta Tags Hoisting */}
      <title>{t("seo.about.title")}</title>
      <meta name="description" content={t("seo.about.description")} />
      <meta property="og:title" content={t("seo.about.title")} />
      <meta property="og:description" content={t("seo.about.description")} />
      <meta property="og:image" content="/logo/GeoSim3d.png" />
      <meta property="twitter:title" content={t("seo.about.title")} />
      <meta property="twitter:description" content={t("seo.about.description")} />
      <meta property="twitter:image" content="/logo/GeoSim3d.png" />

      <main className="flex-1 flex items-center justify-center px-6 py-16 md:py-24 relative overflow-hidden">
        {/* Dynamic Glow Circles for modern high-tech visual feel */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl w-full relative z-10 space-y-16">
          <header className="text-center space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-black tracking-tight"
            >
              {t("about.title")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
            >
              {t("about.intro")}
            </motion.p>
          </header>

          {/* About details: structured layout without boring card borders */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-white/5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 text-orange-400">
                <Info className="w-6 h-6" />
                <h2 className="text-xl font-bold text-white">O Propósito</h2>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                {t("about.description")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 text-red-400">
                <Cpu className="w-6 h-6" />
                <h2 className="text-xl font-bold text-white">Tecnologia</h2>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                {t("about.tech")}
              </p>
            </motion.div>
          </div>

          {/* Author info with clean profile visual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center p-8 bg-white/[0.02] border border-white/5 rounded-3xl backdrop-blur-sm max-w-md mx-auto shadow-2xl space-y-6"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-yellow-400 via-orange-500 to-red-500 flex items-center justify-center text-white">
              <User className="w-10 h-10" />
            </div>

            <div className="text-center space-y-2">
              <span className="text-xs uppercase tracking-widest text-orange-400 font-semibold">
                {t("about.author")}
              </span>
              <h3 className="text-2xl font-bold text-white">
                Davi Komura de Castro Lobato
              </h3>
              <p className="text-sm text-gray-500 font-medium flex items-center justify-center gap-2">
                <Code className="w-4 h-4" />
                Desenvolvedor Full Stack & Pesquisador
              </p>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};
export default About;
