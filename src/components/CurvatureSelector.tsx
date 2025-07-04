import { useTranslation } from "react-i18next";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export function CurvatureSelector({ value, onChange }: Props) {
  const { t } = useTranslation();

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="bg-gray-800 text-gray-100 px-4 py-2 rounded-xl border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
    >
      <option value="gaussian">{t("curvatures.gaussian")}</option>
      <option value="mean">{t("curvatures.mean")}</option>
      <option value="principal">{t("curvatures.principal")}</option>
      <option value="normal">{t("curvatures.normal")}</option>
    </select>
  );
}