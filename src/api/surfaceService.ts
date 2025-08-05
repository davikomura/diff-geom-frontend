import api from "./axiosInstance";

export const generateSurface = async (surface: string, curvature: string) => {
  try {
    const response = await api.get("/surface/", {
      params: {
          surface,
          curvature,
          a: 1.0,
          b: 1.0,
        },
    });
    return response.data;
  } catch (error) {
    console.error("Error generating surface:", error);
    throw error;
  }
};

export const surfaceInfo = async (surface: string) => {
  try {
    const response = await api.get("/surface/info", {
      params: { surface },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching surface info:", error);
    throw error;
  }
}