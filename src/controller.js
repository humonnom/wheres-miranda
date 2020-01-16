import routes from "./routes";

export const getHome = (req, res) => {
  res.render("home");
};

export const getGame = (req, res) => {
  try {
    res.render("game");
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const getMusic = (req, res) => {
  try {
    res.render("music");
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const getBestscene = (req, res) => {
  try {
    res.render("bestscene");
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};
