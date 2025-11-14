export const validateToken = async () => {
  const token = localStorage.getItem("jwt");

  // Variable de entorno.-
  const API_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3001";

  if (!token) return false;

  try {
    const response = await fetch(`${API_URL}/api/verify`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });

    if (!response.ok) {
      localStorage.removeItem("jwt");
      localStorage.removeItem("user");
      return false;
    }

    const data = await response.json();
    localStorage.setItem("user", JSON.stringify(data.user));

    return data;
  } catch (error) {
    console.error("Error validando el token", error);
    return false;
  }
};
