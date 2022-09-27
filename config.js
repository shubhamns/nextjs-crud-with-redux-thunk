const baseURL =
  process.env.NODE_ENV === "development"
    ? REACT_APP_API_URL  // development api
    : REACT_APP_API_URL; // production api

export { baseURL };
