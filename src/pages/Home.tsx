import { useTranslation } from "react-i18next";

export const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black to-gray-900 text-gray-100">
      <main className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="max-w-3xl text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            {t("home.title")}
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            {t("home.intro")}
          </p>
          <p className="text-base md:text-lg text-gray-400">
            {t("home.description1")}
          </p>
          <p className="text-base md:text-lg text-gray-400">
            {t("home.description2")}
          </p>
          <p className="italic text-gray-500">
            {t("home.quote")}
          </p>
        </div>
      </main>
    </div>
  );
};