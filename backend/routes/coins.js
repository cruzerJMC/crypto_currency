const fetch = require("node-fetch");
const key = "fe278748eb49ae23227e6769d92ef40bde306a9f0c3d91513b3c09680189c717";
const moment = require("moment");

const getAllCoins = async (req, res) => {
  const ticker =
    "BTC,ETH,EOS,LTC,XRP,BCH,ETC,OKB,NEO,ZEC,BNB,DASH,TRX,QTUM,XLM,BGG,HT,XMRADA,BSV,BZ,PAX,PPT,USDT,ENJ,OMG,ABT";
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${ticker}&tsyms=USD&api_key=${key}`;
  let response = await fetch(url);
  // console.log("response", response);

  // only proceed once promise is resolved
  let json = await response.json();
  // console.log("JSON", json);
  // only proceed once second promise is resolved

  const data = await json.DISPLAY;
  // console.log("DATA", data);

  let newCoinArray = Object.entries(data);
  // console.log("NEWCOIN", newCoinArray);

  let fullCoinData = await newCoinArray.map(object => {
    let obj = Object.values(object);
    let objTwo = obj[1].USD;
    return { ticker: object[0], data: objTwo };
  });
  res.send(fullCoinData);
};

const getCoinList = async (req, res) => {
  const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD&api_key=${key}`;

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
    // console.log("HI", key);
    let combined = one.concat(two);
    // console.log("HI", combined);
    return combined;
  });

  // console.log("COMBO", combinedArray[0]);

  let coinListArray = await combinedArray.map((object, index) => {
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
  // console.log(coinListArray[0]);
  res.send(coinListArray);
};

const getHistorical = async (req, res) => {
  console.log("BODY", req.body.post);

  const url = `https://min-api.cryptocompare.com/data/histoday?fsym=${
    req.body.post
  }&tsym=USD&limit=720&aggregate=1&pi_key=${key}`;

  let response = await fetch(url);
  // console.log("response", response);

  // only proceed once promise is resolved
  let json = await response.json();
  // console.log("JSON", json);
  // only proceed once second promise is resolved

  let cryptoprice = await json.Data;
  // console.log("DATA", cryptoprice);

  let historicalArray = await cryptoprice.map(obj => {
    return obj;
  });
  // console.log("historical", historicalArray);

  let reformated = await historicalArray.map((object, index) => {
    let date = moment(object.time * 1000).format("MMM DD YYYY");
    let close = object.close.toLocaleString("us-EN", {
      style: "currency",
      currency: "USD"
    });
    let o = object.open.toLocaleString("us-EN", {
      style: "currency",
      currency: "USD"
    });
    let h = object.high.toLocaleString("us-EN", {
      style: "currency",
      currency: "USD"
    });
    let l = object.low.toLocaleString("us-EN", {
      style: "currency",
      currency: "USD"
    });
    return {
      time: object.time,
      d: date,
      open: o,
      high: h,
      low: l,
      p: close,
      x: index,
      y: object.close
    };
  });

  let newArray = await reformated;
  console.log(newArray);
  res.send(newArray);
};

module.exports = {
  getHistorical,
  getCoinList,
  getAllCoins
};
