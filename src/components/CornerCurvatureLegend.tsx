import { useTranslation } from "react-i18next";

export function CornerCurvatureLegend() {
  const { t } = useTranslation();

  return (
    <div className="absolute bottom-6 right-6 bg-black/60 border border-white/5 backdrop-blur-md p-4 rounded-2xl text-xs text-gray-100 shadow-2xl space-y-3 z-10 max-w-[220px]">
      <div className="font-semibold text-gray-300 text-center text-[11px] uppercase tracking-wider">
        {t("viewer.legend.title")}
      </div>

      <div className="w-full h-2.5 bg-gradient-to-r from-blue-600 via-yellow-300 to-red-600 rounded-full shadow-inner" />

      <div className="grid grid-cols-3 gap-1 text-[10px] text-gray-400 font-medium">
        <span className="flex flex-col items-center gap-1">
          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full shadow-md" />
          {t("viewer.legend.negative")}
        </span>
        <span className="flex flex-col items-center gap-1">
          <span className="w-1.5 h-1.5 bg-yellow-300 rounded-full shadow-md" />
          {t("viewer.legend.zero")}
        </span>
        <span className="flex flex-col items-center gap-1">
          <span className="w-1.5 h-1.5 bg-red-600 rounded-full shadow-md" />
          {t("viewer.legend.positive")}
        </span>
      </div>
    </div>
  );
}
