import { useState } from "react";
import { generateCurve, curveInfo } from "../api/curveService";

export function useViewer(curve: string) {
  const [curvature, setCurvature] = useState("gaussian");
  const [geometryData, setGeometryData] = useState<any>(null);
  const [curveDetails, setCurveDetails] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    setGeometryData(null);
    setCurveDetails(null);

    try {
      const [geoRes, infoRes] = await Promise.all([
        generateCurve(curve, curvature),
        curveInfo(curve),
      ]);

      setGeometryData(geoRes);
      setCurveDetails(infoRes);
    } catch (err) {
      console.error("Erro ao buscar dados:", err);
    } finally {
      setLoading(false);
    }
  };

  return {
    curvature,
    setCurvature,
    geometryData,
    loading,
    handleGenerate,
    curveDetails,
  };
}