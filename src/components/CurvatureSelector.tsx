import { useTranslation } from "react-i18next";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export function CurvatureSelector({ value, onChange }: Props) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-[11px] uppercase tracking-wider text-gray-500 font-semibold">
        {t("curvatures.gaussian")} / {t("curvatures.principal")}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-white/5 border border-white/10 hover:border-white/20 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all duration-300 w-full cursor-pointer appearance-none"
        style={{
          backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 1rem center',
          backgroundSize: '1em',
          paddingRight: '2.5rem'
        }}
      >
        <option value="gaussian" className="bg-neutral-900 text-white">{t("curvatures.gaussian")}</option>
        <option value="mean" className="bg-neutral-900 text-white">{t("curvatures.mean")}</option>
        <option value="principal" className="bg-neutral-900 text-white">{t("curvatures.principal")}</option>
        <option value="normal" className="bg-neutral-900 text-white">{t("curvatures.normal")}</option>
      </select>
    </div>
  );
}