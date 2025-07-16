import api from "./axiosInstance";

export const generateCurve = async (curve: string, curvature: string) => {
  try {
    const response = await api.get("/curve/", {
      params: {
          curve,
          curvature,
          a: 1.0,
          b: 1.0,
        },
    });
    return response.data;
  } catch (error) {
    console.error("Error generating curve:", error);
    throw error;
  }
};

export const curveInfo = async (curve: string) => {
  try {
    const response = await api.get("/curve/info", {
      params: { curve },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching curve info:", error);
    throw error;
  }
}