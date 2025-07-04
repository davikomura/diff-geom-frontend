import { useTranslation } from "react-i18next";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export function CurveSelector({ value, onChange }: Props) {
  const { t } = useTranslation();

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="bg-gray-800 text-gray-100 px-4 py-2 rounded-xl border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
    >
      <option value="sphere">{t("curves.sphere")}</option>
      <option value="torus">{t("curves.torus")}</option>
      <option value="enneper">{t("curves.enneper")}</option>
      <option value="helicoid">{t("curves.helicoid")}</option>
      <option value="hyperbolic_paraboloid">{t("curves.hyperbolic_paraboloid")}</option>
      <option value="elliptic_paraboloid">{t("curves.elliptic_paraboloid")}</option>
    </select>
  );
}