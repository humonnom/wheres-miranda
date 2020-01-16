import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Wheres Miranda?";
  res.locals.routes = routes;
  next();
};
