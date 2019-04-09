const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const app = express();
const fetch = require("node-fetch");
const morgan = require("morgan");
const cors = require("cors");
const moment = require("moment");
const key = "fe278748eb49ae23227e6769d92ef40bde306a9f0c3d91513b3c09680189c717";
const helmet = require("helmet");
const securityTxt = require("express-security.txt");

app.use(helmet());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//Import Routes
const newsRoutes = require("./routes/news");
const coinsRoutes = require("./routes/coins");

app.use("/news", newsRoutes.getNews);
app.use("/allcoins", coinsRoutes.getAllCoins);
app.use("/historical", coinsRoutes.getHistorical);
app.use("/coinlist", coinsRoutes.getCoinList);

const port = process.env.PORT || 5000;
const server = app.listen(port, () => console.log(`Listening on port ${port}`));

//set up socket io via function and pass in server
// let io = socket(server);
const io = require("socket.io").listen(server);
const connections = [];

//listen for event connection when the browser connection is made
io.sockets.on("connection", socket => {
  socket.once("diconnect", () => {
    connections.splice(connections.indexOf(socket), 1);
    socket.disconnect();
    console.log("disconnected: %s sockets remaining", connections.length);
  });
  connections.push(socket);
  console.log(
    "made socket connection: %s sockets connected",
    socket.id,
    connections.length
  );
  setInterval(() => getApiAndEmit(socket), 10000);
});

const getApiAndEmit = async socket => {
  const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=50&tsym=USD&api_key=${key}`;

  let response = await fetch(url);
  // console.log("response", response);

  // only proceed once promise is resolved
  let json = await response.json();
  // console.log("JSON", json);
  // only proceed once second promise is resolved

  let data = await json.Data;
  // console.log("DATA", data);

  let combinedArray = await data.map(object => {
    let one = Object.values(object.CoinInfo);
    // console.log(one);
    let two = Object.values(object.DISPLAY.USD);
    // let key = Object.keys(object.DISPLAY.USD);
    // console.log("two", two);
    let combined = one.concat(two);
    // console.log("HI", combined);
    return combined;
  });

  // console.log("COMBO", combinedArray[0]);

  let coinPrice = await combinedArray.map((object, index) => {
    return {
      index: index,
      id: object[0],
      ticker: object[1],
      company: object[2],
      image: object[4],
      overview: object[5],
      market: object[16],
      price: object[17],
      LASTUPDATE: object[18],
      LASTVOLUME: object[19],
      LASTVOLUMETO: object[20],
      LASTTRADEID: object[21],
      VOLUMEDAY: object[22],
      VOLUMEDAYTO: object[23],
      VOLUME24HOUR: object[24],
      VOLUME24HOURTO: object[25],
      OPENDAY: object[26],
      HIGHDAY: object[27],
      LOWDAY: object[28],
      OPEN24HOUR: object[29],
      HIGH24HOUR: object[30],
      LOW24HOUR: object[31],
      LASTMARKET: object[32],
      VOLUMEHOUR: object[33],
      VOLUMEHOURTO: object[34],
      OPENHOUR: object[35],
      HIGHHOUR: object[36],
      LOWHOUR: object[37],
      CHANGE24HOUR: object[38],
      CHANGEPCT24HOUR: object[39],
      CHANGEDAY: object[40],
      CHANGEPCTDAY: object[41],
      SUPPLY: object[42],
      MKTCAP: object[43],
      TOTALVOLUME24H: object[44],
      TOTALVOLUME24HTO: object[45]
    };
  });
  socket.emit("FromAPI", coinPrice);
};
