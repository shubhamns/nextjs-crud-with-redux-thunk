const APIURL = process.env.REACT_APP_API_URL;
const baseURL =
  process.env.NODE_ENV === "development"
    ? APIURL // development api
    : APIURL; // production api

export { baseURL };
