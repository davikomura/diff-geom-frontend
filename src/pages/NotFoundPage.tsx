import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black to-gray-900 text-gray-100 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center max-w-lg"
      >
        <h1 className="text-9xl font-extrabold text-red-600 mb-6 select-none">404</h1>
        <p className="text-2xl md:text-3xl mb-4 font-semibold">
          {t("notFound.title")}
        </p>
        <p className="text-gray-400 mb-8">{t("notFound.description")}</p>
        <Link
          to="/"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          {t("notFound.cta")}
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;