const baseURL =
  process.env.NODE_ENV === "development"
    ? "https://node-express-app-api.herokuapp.com" // development api
    : "https://node-express-app-api.herokuapp.com"; // production api

export { baseURL };
