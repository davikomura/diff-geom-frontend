import { useTranslation } from "react-i18next";

export function CornerCurvatureLegend() {
  const { t } = useTranslation();

  return (
    <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm p-3 rounded-lg text-xs text-gray-100 shadow-lg space-y-1 z-10">
      <div className="font-semibold text-center text-white text-sm">
        {t("viewer.legend.title")}
      </div>

      <div className="w-40 h-3 bg-gradient-to-r from-blue-600 via-yellow-300 to-red-600 rounded-full" />

      <div className="flex justify-between text-[10px] text-gray-300 px-1">
        <span className="flex items-center gap-1">
          <div className="w-2 h-2 bg-blue-600 rounded-full" />
          {t("viewer.legend.negative")}
        </span>
        <span className="flex items-center gap-1">
          <div className="w-2 h-2 bg-yellow-300 rounded-full" />
          {t("viewer.legend.zero")}
        </span>
        <span className="flex items-center gap-1">
          <div className="w-2 h-2 bg-red-600 rounded-full" />
          {t("viewer.legend.positive")}
        </span>
      </div>
    </div>
  )
}