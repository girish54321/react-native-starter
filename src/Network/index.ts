import axios, { AxiosResponse } from "axios";
import { BASE_URL } from "./api.constant";
import { USER_LIST } from "./apiEndpoints";
const API_HEADER = {
  // "x-api-key": "your-access-token",
};


export const getUsers = () =>
  new Promise(async (resolve, reject) => {
    const url = BASE_URL + USER_LIST;
    axios
      .get(url, {
        headers: API_HEADER,
      })
      .then((res: AxiosResponse) => {
        res && resolve(res);
      })
      .catch((error) => {
        error && resolve(error.response);
      });
  });

