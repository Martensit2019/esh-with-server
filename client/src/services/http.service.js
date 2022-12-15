import axios from "axios";
// import { toast } from "react-toastify";
// import configFile from "../../config.json";
// import authService from "./auth.service";
// import localStorageService from "./localStorage.service";

// const http = axios.create({
//   baseURL: configFile.apiEndPoint
// });
import config from "../config.json"

const http = axios.create({
  baseURL: config.apiEndpoint
  // baseURL: "http://localhost:3001/",
});

// http.interceptors.request.use(
//   async function (config) {
//     if (configFile.isFireBase) {
//       const containSlash = /\/$/gi.test(config.url);
//       config.url =
//         (containSlash ? config.url.slice(0, -1) : config.url) + ".json";
//       const expiresDate = localStorageService.getTokenExpiresDate();
//       const refreshToken = localStorageService.getRefreshToken();
//       if (refreshToken && expiresDate < Date.now()) {
//         const data = await authService.refresh();
//         localStorageService.setTokens({
//           refreshToken: data.refresh_token,
//           idToken: data.id_token,
//           expiresIn: data.expires_in,
//           localId: data.user_id
//         });
//       }
//       const accessToken = localStorageService.getAccessToken();
//       if (accessToken) {
//         config.params = { ...config.params, auth: accessToken };
//       }
//     }
//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );
// function transformData(data) {
//   return data && !data._id
//     ? Object.keys(data).map((key) => ({
//         ...data[key]
//       }))
//     : data;
// }

http.interceptors.request.use(
  async function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  // (res) =>  res,
  (res) => {
    return res;
  },
  function (error) {
    const expectedErrors =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;
    if (!expectedErrors) {
      console.log(error);
      // toast.error("Ошибка");
    }
    return Promise.reject(error);
  }
);

const httpService = {
  get: http.get,
  // get: http.get,
  post: http.post,
  // put: http.put,
  // delete: http.delete,
  patch: http.patch
};

export default httpService;