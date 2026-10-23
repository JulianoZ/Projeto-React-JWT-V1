import axios from "axios";

const API_URL = "https://localhost:7084/api/user";

export const authService = {
  async login(credentials) {
    const response = await axios.post(`${API_URL}/login`, credentials, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const token = response.data.token;
    localStorage.setItem("token", token);
    return response.data;
  },

  logout() {
    localStorage.removeItem("token");
  },

  getToken() {
    return localStorage.getItem("token");
  },
};
