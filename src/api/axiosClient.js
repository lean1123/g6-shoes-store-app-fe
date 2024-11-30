import axios from "axios";
import AuthAPI from "./AuthApi";

const AdminAxiosClient = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
});

const getToken = () => {
  const token = localStorage.getItem("accessToken");
  return token ? token : "";
};

AdminAxiosClient.interceptors.request.use(
  async (config) => {
    // const publicEndpoints = [
    //   /auth\/login/,
    //   /auth\/signUp/,
    //   /auth\/refreshToken/,
    //   /auth\/forgotPassword/,
    //   /auth\/resetPassword/,
    // ];

    // const isPublicEndpoint = publicEndpoints.some((pattern) =>
    //   pattern.test(config.url)
    // );

    const publicEndpoints = [
      { urlPattern: /\/auth\/login/, methods: ['POST'] },        // POST /auth/login
      { urlPattern: /\/auth\/signUp/, methods: ['POST'] },     // POST /auth/register
      { urlPattern: /\/auth\/refreshToken/, methods: ['POST'] }, // POST /auth/refreshToken
      { urlPattern: /\/products/, methods: ['GET'] },            // GET /products
      { urlPattern: /\/product-items/, methods: ['GET'] },       // GET /product-items
      { urlPattern: /\/cart/, methods: ['GET', 'POST'] },        // GET, POST /cart
    ];
    
    // Kiểm tra xem URL và phương thức có phù hợp với bất kỳ endpoint công cộng nào không
    const isPublicEndpoint = publicEndpoints.some((endpoint) => 
      endpoint.urlPattern.test(config.url) && endpoint.methods.includes(config.method.toUpperCase())
    );

    if (isPublicEndpoint) {
      if (config.headers.Authorization) {
        delete config.headers.Authorization;
      }
      return config;
    }

    const token = getToken();

    config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

AdminAxiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      let token = getToken();

      if (token) {
        try {
          const refreshedToken = await AuthAPI.refreshToken();

          console.log("refreshedToken in admin axios: ", refreshedToken);
          if (refreshedToken.status !== 200) {
            return Promise.reject(error);
          }
          token = await refreshedToken.data.token;
          localStorage.setItem("accessToken", token);
          originalRequest.headers.Authorization = `Bearer ${token}`;

          return AdminAxiosClient(originalRequest);
        } catch (error) {
          console.error("Error during token refresh request", error);
          //   logOutCurrentUser();
          return Promise.reject(error);
        }
      }

      return Promise.reject(error);
    }

    if (error.response) {
      console.error("Response error", error.response);
    } else if (error.request) {
      console.error("No response received", error.request);
    } else {
      console.error("Request setup error", error.message);
    }

    return Promise.reject(error);
  }
);

export default AdminAxiosClient;
