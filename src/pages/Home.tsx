import { useTranslation } from "react-i18next";
import { MobiusBackground } from "../components/MobiusBackground";

export const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-br from-black to-gray-900 text-gray-100 overflow-hidden">
      <MobiusBackground />
      <main className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="max-w-3xl text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
            {t("home.title")}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
            {t("home.intro")}
          </p>
          <p className="text-base md:text-lg text-gray-300 drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
            {t("home.description1")}
          </p>
          <p className="text-base md:text-lg text-gray-300 drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
            {t("home.description2")}
          </p>
        </div>
      </main>
    </div>
  );
};
