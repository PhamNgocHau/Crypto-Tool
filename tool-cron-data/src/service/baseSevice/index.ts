import axios from "axios";

const baseURL = "https://restcountries.com/v3.1";

// const token = "ce455bd7c5183b1c9298e25f7dde95f2196f52d089c555fdce30afa3f5bc35de";

const createAxiosInstance = () => {
  const instance = axios.create({
    baseURL: baseURL,
    // headers: {
    //   Authorization: `Bearer ${token}`,
    // },
    timeout: 30000,
  });

  return instance;
}

const API = {
  instance: createAxiosInstance(),
};

export const callHttp = {
  get: (endpoint: string, params?: object) =>
    API.instance
      .get(endpoint, params)
      .then(response => response.data)
      .catch(error => {
        throw error;
      }),
  put: (endpoint: string, params?: object) =>
    API.instance
      .put(endpoint, params)
      .then(response => response.data)
      .catch(error => {
        throw error;
      }),
  post: (endpoint: string, params?: object) =>
    API.instance
      .post(endpoint, params)
      .then(response => response.data)
      .catch(error => {
        throw error;
      }),
  delete: (endpoint: string, params?: object) =>
    API.instance
      .delete(endpoint, params)
      .then(response => response.data)
      .catch(error => {
        throw error;
      }),
};

