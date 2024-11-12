import axios from "axios";

const appService = axios.create({
  baseURL: "{baseUrl}",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    // "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json"
  }
});

const appImageUploadService = axios.create({
  baseURL: "{imageUploadUrl}",
  withCredentials: false,
  headers: {
    //Accept: "application/json",
    // "Access-Control-Allow-Origin": "*",
    "Content-Type": "multipart/form-data"
  }
});

appService.interceptors.request.use(config => {
  config.headers.Authorization = "{token}";
  return config;
});

appService.interceptors.response.use(response => {
  if (response != null) {
    if (response.data != null) {
    }
  }
  return response;
});

export const apiClient = {
  appService: appService,
  appImageUploadService: appImageUploadService
};
