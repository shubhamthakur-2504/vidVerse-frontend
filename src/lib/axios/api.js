import axios from "axios";

// Main API client with interceptors
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 120000,
  withCredentials: true,
});

// Plain Axios instance with NO interceptors
const plainAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 120000,
  withCredentials: true,
});

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, response = null) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(response);
    }
  });
  failedQueue = [];
};

apiClient.interceptors.response.use(
  response => response,
  async (error) => {
    const originalRequest = error.config;

    // Prevent retrying refresh request
    const isRefreshRequest = originalRequest.url?.includes("/user/refreshaccess");

    if (error.response?.status === 401 && !originalRequest._retry && !isRefreshRequest) {
      originalRequest._retry = true;

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then(() => apiClient(originalRequest))
          .catch(err => Promise.reject(err));
      }

      isRefreshing = true;

      try {
        // Use plainAxios to avoid interceptor recursion
        await plainAxios.post("user/refreshaccess");

        console.log("refreshed");

        processQueue(null);
        return apiClient(originalRequest); // Retry original request
      } catch (refreshError) {
        console.log("inside catch to redirect to auth");

        processQueue(refreshError, null);
        window.location.href = "/auth/login"; // Redirect to login
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;
