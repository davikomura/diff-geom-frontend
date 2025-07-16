import { useState, useEffect } from "react";
import { CurveSelector } from "../components/CurveSelector";
import { CurvatureSelector } from "../components/CurvatureSelector";
import { GeometryViewer } from "../components/GeometryViewer";
import { Loader2, Play } from "lucide-react";
import { useTranslation } from "react-i18next";
import { generateCurve } from "../api/curveService";
import { curveInfo } from "../api/curveService";
import { BlockMath, InlineMath } from "react-katex";

export function ViewerPage() {
  const { t } = useTranslation();
  const [curve, setCurve] = useState("sphere");
  const [curvature, setCurvature] = useState("gaussian");
  const [geometryData, setGeometryData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [curveDetails, setCurveDetails] = useState<any>(null);
  const [infoLoading, setInfoLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    setGeometryData(null);
    try {
      const res = await generateCurve(curve, curvature);
      console.log("Dados da geometria recebidos:", res);
      console.log();
      setGeometryData(res);
    } catch (err) {
      console.error("Erro ao buscar dados da geometria:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchCurveInfo = async () => {
      setInfoLoading(true);
      try {
        const info = await curveInfo(curve);
        setCurveDetails(info);
      } catch (error) {
        setCurveDetails(null);
      } finally {
        setInfoLoading(false);
      }
    };

    fetchCurveInfo();
  }, [curve]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black to-gray-900 text-gray-100 px-6 py-16">
      <div className="max-w-5xl mx-auto space-y-12">
        <header className="text-center space-y-4">
          <h1 className="text-5xl font-extrabold tracking-tight leading-tight">
            {t("viewer.title")}
          </h1>
          <p className="text-gray-400 text-lg">{t("viewer.subtitle")}</p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center justify-center">
          <CurveSelector value={curve} onChange={setCurve} />
          <CurvatureSelector value={curvature} onChange={setCurvature} />
          <button
            onClick={handleGenerate}
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-2xl shadow-lg transition duration-200"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin h-5 w-5" />
                {t("viewer.loading")}
              </>
            ) : (
              <>
                <Play className="h-5 w-5" />
                {t("viewer.generate")}
              </>
            )}
          </button>
        </section>

        {infoLoading ? (
          <div className="text-center text-gray-400 italic animate-pulse mb-6">
            {t("viewer.loadingInfo")}
          </div>
        ) : (
          curveDetails && (
            <div className="bg-gray-800 p-4 rounded-xl shadow-md mb-6">
              <h2 className="text-xl font-semibold mb-2">
                {t("viewer.curveInfoTitle")}
              </h2>
              <p className="text-gray-300 mb-2">
                <strong>{t("viewer.name")}:</strong> {curveDetails.name}
                <br />
                <strong>{t("viewer.type")}:</strong> {curveDetails.type}
              </p>
              <p className="text-gray-300 mb-2">
                <strong>{t("viewer.domain")}:</strong>{" "}
                <InlineMath math={curveDetails.domain} />
              </p>
              <BlockMath math={curveDetails.latex} />
            </div>
          )
        )}

        <section className="mt-8">
          {!loading && geometryData && <GeometryViewer data={geometryData} />}
          {loading && (
            <div className="flex justify-center mt-12">
              <p className="text-gray-400 italic animate-pulse">
                {t("viewer.generating")}
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
