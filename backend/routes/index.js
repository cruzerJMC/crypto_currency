const historicalController = require("../controllers/historical");
const coinController = require("../controllers/coin");
const articleController = require("../controllers/article");

module.exports = app => {
  app.get("/api", (req, res) =>
    res.status(200).send({
      message: "Welcome to the API!"
    })
  );
  app.use("/api/allcoins", coinController.getAllCoins);
  app.use("/api/historicals", historicalController.getHistoricals);
  app.use("/api/coinlist", coinController.getCoinList);
  app.use("/api/news", articleController.getNews);
};
