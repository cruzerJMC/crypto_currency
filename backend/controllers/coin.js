const fetch = require("node-fetch");
const key = "fe278748eb49ae23227e6769d92ef40bde306a9f0c3d91513b3c09680189c717";
// const moment = require("moment");

exports.getAllCoins = async (req, res) => {
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

exports.getCoinList = async (req, res) => {
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
