import { useState } from "react";
import { generateSurface, surfaceInfo } from "../api/surfaceService";

export function useViewer(surface: string) {
  const [curvature, setCurvature] = useState("gaussian");
  const [geometryData, setGeometryData] = useState<any>(null);
  const [surfaceDetails, setSurfaceDetails] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    setGeometryData(null);
    setSurfaceDetails(null);

    try {
      const [geoRes, infoRes] = await Promise.all([
        generateSurface(surface, curvature),
        surfaceInfo(surface),
      ]);

      setGeometryData(geoRes);
      setSurfaceDetails(infoRes);
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
    surfaceDetails,
  };
}