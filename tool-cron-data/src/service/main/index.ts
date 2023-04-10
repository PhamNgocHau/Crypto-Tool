import { callHttp } from "../baseSevice";

export const testCallAPI = async () => {
  try {
    const response = await callHttp.get('/capital/tallinn');

    console.log('response >>>>>>', response);

  } catch (error) {
    throw error;
  }
}