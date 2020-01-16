import express from "express";
import routes from "./routes";
import { getHome, getGame, getMusic, getBestscene } from "./controller";

const router = express.Router();

router.get(routes.home, getHome);
router.get(routes.game, getGame);
router.get(routes.music, getMusic);
router.get(routes.bestscene, getBestscene);

export default router;
