import { useState } from "react";
import { SurfaceSelector } from "../components/SurfaceSelector";
import { CurvatureSelector } from "../components/CurvatureSelector";
import { GeometryViewer } from "../components/GeometryViewer";
import { Loader2, Play, Info, AlertTriangle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { InlineMath } from "react-katex";
import { useViewer } from "../hooks/useViewer";
import { motion, AnimatePresence } from "framer-motion";

export function ViewerPage() {
  const { t } = useTranslation();
  const [surface, setSurface] = useState("sphere");

  const {
    curvature,
    setCurvature,
    geometryData,
    loading,
    handleGenerate,
    surfaceDetails,
  } = useViewer(surface);

  return (
    <div className="min-h-[92vh] bg-black text-gray-100 px-4 md:px-8 py-12 md:py-16 relative overflow-hidden flex flex-col justify-start">
      {/* React 19 Native SEO Meta Tags Hoisting */}
      <title>{t("seo.viewer.title")}</title>
      <meta name="description" content={t("seo.viewer.description")} />
      <meta property="og:title" content={t("seo.viewer.title")} />
      <meta property="og:description" content={t("seo.viewer.description")} />
      <meta property="og:image" content="/logo/ManifoldSim3d.png" />
      <meta property="twitter:title" content={t("seo.viewer.title")} />
      <meta property="twitter:description" content={t("seo.viewer.description")} />
      <meta property="twitter:image" content="/logo/ManifoldSim3d.png" />

      {/* Decorative background glow circles */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full space-y-8 relative z-10 flex-1 flex flex-col">
        <header className="text-center space-y-3">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            {t("viewer.title")}
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">{t("viewer.subtitle")}</p>
        </header>

        {/* Unified 3D Canvas & floating HUD panel dashboard */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Sidebar controls for larger screens, standard container for mobile */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/[0.02] border border-white/5 backdrop-blur-md p-6 rounded-3xl shadow-2xl flex flex-col gap-6"
            >
              <div className="flex items-center gap-2 border-b border-white/5 pb-3">
                <div className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-pulse" />
                <h2 className="text-sm font-bold uppercase tracking-wider text-gray-300">
                  Configurações do Simulador
                </h2>
              </div>

              <SurfaceSelector value={surface} onChange={setSurface} />
              
              <CurvatureSelector value={curvature} onChange={setCurvature} />

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleGenerate}
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-3.5 px-6 rounded-xl shadow-lg transition-all duration-300 w-full cursor-pointer disabled:opacity-50"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin h-5 w-5" />
                    {t("viewer.loading")}
                  </>
                ) : (
                  <>
                    <Play className="h-4 w-4 fill-current" />
                    {t("viewer.generate")}
                  </>
                )}
              </motion.button>
            </motion.div>

            {/* Surface details mathematical panel */}
            <AnimatePresence mode="wait">
              {!loading && surfaceDetails && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/[0.01] border border-white/5 backdrop-blur-sm p-6 rounded-3xl shadow-xl space-y-4"
                >
                  <div className="flex items-center gap-2 border-b border-white/5 pb-3 text-orange-400">
                    <Info className="w-5 h-5" />
                    <h3 className="text-sm font-bold uppercase tracking-wider text-gray-300">
                      {t("viewer.surfaceInfoTitle")}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm text-gray-400">
                      <strong className="text-gray-300">{t("viewer.domain")}:</strong>{" "}
                      <span className="inline-block bg-white/5 px-2 py-0.5 rounded text-white font-mono">
                        <InlineMath math={surfaceDetails.domain} />
                      </span>
                    </p>
                    <div className="bg-white/[0.02] border border-white/5 p-4 rounded-xl text-center overflow-x-auto text-base text-blue-300">
                      <InlineMath math={surfaceDetails.latex} />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Warning when loading */}
            {loading && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-start gap-3 bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-2xl text-yellow-400 text-sm"
              >
                <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-semibold">{t("viewer.generating")}</p>
                  <p className="text-xs text-yellow-400/80">{t("viewer.generationWarning")}</p>
                </div>
              </motion.div>
            )}
          </div>

          {/* 3D Canvas Area */}
          <div className="lg:col-span-8 flex flex-col">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex-1 relative min-h-[450px] lg:min-h-0 bg-neutral-950 border border-white/5 rounded-[32px] overflow-hidden shadow-2xl flex"
            >
              {!geometryData && !loading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-neutral-950/80 z-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                    <Play className="w-8 h-8 fill-current translate-x-0.5" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Visualização 3D</h3>
                  <p className="text-sm text-gray-500 max-w-sm">
                    Selecione uma superfície e clique em "Gerar" para visualizar sua estrutura tridimensional e mapa de curvatura.
                  </p>
                </div>
              )}

              {geometryData && <GeometryViewer data={geometryData} />}
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}