import { join } from "path";
import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import passport from "passport";
import { localsMiddleware } from "./middlewares";
import router from "./router";
import routes from "./routes";

import "./passport";

const app = express();

app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(cookieParser());
app.use(morgan("dev"));
app.use(express.static(join(__dirname, "static")));
app.use(passport.initialize());
app.use(passport.session());

app.use(localsMiddleware);

app.use(routes.home, router);

export default app;
