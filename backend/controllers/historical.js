const fetch = require("node-fetch");
const key = "fe278748eb49ae23227e6769d92ef40bde306a9f0c3d91513b3c09680189c717";
const moment = require("moment");

exports.getHistoricals = async (req, res) => {
  console.log("BODY", req.body.post);

  const url = `https://min-api.cryptocompare.com/data/histoday?fsym=${
    req.body.post
  }&tsym=USD&limit=720&aggregate=1&pi_key=${key}`;

  let response = await fetch(url);
  // console.log("response", response);

  // only proceed once promise is resolved
  let json = await response.json();
  console.log("JSON", json);
  // only proceed once second promise is resolved

  // let cryptoJson = await json.Data;

  // let cryptoPrices = await cryptoJson.reverse();
  // // console.log("DATA", cryptoPrices);

  let cryptoPrices = await json.Data;

  let historicalArray = await cryptoPrices.filter((obj, index) => {
    return index > cryptoPrices.length - 6;
  });
  console.log("historical", historicalArray);

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
      ticker: req.body.post,
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
  res.send([newArray]);
};
