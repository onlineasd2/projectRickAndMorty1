import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios";

export type RequestConfig<Payload = undefined> = Payload extends undefined
  ? { config?: AxiosRequestConfig }
  : { payload: Payload; config?: AxiosRequestConfig };

export const httpClient: AxiosInstance = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});
