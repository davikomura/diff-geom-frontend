import { useState } from "react";
import { CurveSelector } from "../components/CurveSelector";
import { CurvatureSelector } from "../components/CurvatureSelector";
import { GeometryViewer } from "../components/GeometryViewer";
import { Loader2, Play } from "lucide-react";
import { useTranslation } from "react-i18next";
import { InlineMath } from "react-katex";
import { useViewer } from "../hooks/useViewer";

export function ViewerPage() {
  const { t } = useTranslation();
  const [curve, setCurve] = useState("sphere");

  const {
    curvature,
    setCurvature,
    geometryData,
    loading,
    handleGenerate,
    curveDetails,
  } = useViewer(curve);

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
            disabled={loading}
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

        {loading && (
          <div className="flex flex-col items-center mt-6 space-y-2">
            <p className="flex items-center gap-2 text-gray-400 italic animate-pulse">
              <Loader2 className="animate-spin h-5 w-5" />
              {t("viewer.loading")}
            </p>
            <p className="flex items-center gap-2 text-yellow-400 text-sm font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M12 2a10 10 0 1010 10A10 10 0 0012 2z"
                />
              </svg>
              {t("viewer.generationWarning")}
            </p>
          </div>
        )}

        {!loading && curveDetails && (
          <div className="bg-gray-800 p-4 rounded-xl shadow-md mb-6">
            <h2 className="text-xl font-semibold mb-2">
              {t("viewer.curveInfoTitle")}
            </h2>
            <p className="text-gray-300 mb-2">
              <strong>{t("viewer.domain")}:</strong>{" "}
              <InlineMath math={curveDetails.domain} />
            </p>
            <br />
            <div className="text-center break-words text-base">
              <InlineMath math={curveDetails.latex} />
            </div>
          </div>
        )}

        <section className="mt-8">
          {!loading && geometryData && <GeometryViewer data={geometryData} />}
        </section>
      </div>
    </div>
  );
}