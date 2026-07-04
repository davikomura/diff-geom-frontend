import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

export const NotFoundPage = () => {
  const { t } = useTranslation();
  const { lang = "pt" } = useParams<{ lang: string }>();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-gray-100 px-6 relative overflow-hidden">
      <title>404 - {t("notFound.title")} | GeoSim 3D</title>
      <meta name="description" content={t("notFound.description")} />
      <meta property="og:title" content={`404 - ${t("notFound.title")} | GeoSim 3D`} />
      <meta property="og:description" content={t("notFound.description")} />
      <meta property="og:image" content="/logo/GeoSim3d.png" />
      <meta property="twitter:title" content={`404 - ${t("notFound.title")} | GeoSim 3D`} />
      <meta property="twitter:description" content={t("notFound.description")} />
      <meta property="twitter:image" content="/logo/GeoSim3d.png" />
      
      {/* Decorative Blur BG */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[150px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-lg relative z-10 space-y-6"
      >
        <h1 className="text-[120px] md:text-[160px] font-black leading-none bg-clip-text text-transparent bg-gradient-to-b from-red-500 to-red-800 select-none">
          404
        </h1>
        <p className="text-2xl md:text-3xl font-extrabold text-white">
          {t("notFound.title")}
        </p>
        <p className="text-gray-400 text-sm md:text-base max-w-md mx-auto">
          {t("notFound.description")}
        </p>
        <div className="pt-6">
          <Link to={`/${lang}`}>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(239, 68, 68, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-semibold py-3.5 px-10 rounded-full transition-all shadow-xl cursor-pointer"
            >
              {t("notFound.cta")}
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;