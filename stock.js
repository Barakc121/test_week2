import { stockMarket } from "./db.js";
import input from "analiza-sync";

export function searchStock(identifier) {
  for (let i = 0; i < stockMarket.stocks.length; i++) {
    if (stockMarket.stocks[i].name === identifier || stockMarket.stocks[i].id)
      return stockMarket.stocks[i];
  }
  return "not found";
}
// console.log(searchStock("x7l2df9"))

export function filterStocksByPrice(givenPrice, above) {
  let arr = [];
  if (above === true) {
    for (let i = 0; i < stockMarket.stocks.length; i++) {
      stockMarket.stocks[i].currentPrice >= givenPrice;
      arr.push(stockMarket.stocks[i]);
    }
  }
  if (above === false) {
    for (let i = 0; i < stockMarket.stocks.length; i++) {
      stockMarket.stocks[i].currentPrice <= givenPrice;
      arr.push(stockMarket.stocks[i]);
    }
  }
  return arr;
}
// console.log(filterStocksByPrice(50, true));

export function OperateOnStock(operation, identifier) {
  if (operation !== "sell" && operation !== "buy")
    return "its data not good your need to write or buy or sell";
  if (operation === "buy") {
    for (let i = 0; i < stockMarket.stocks.length; i++) {
      if (
        stockMarket.stocks[i].name === identifier ||
        stockMarket.stocks[i].id === identifier
      ) {
        let pbuy = input("how pcs your wont to buy");
        if (stockMarket.stocks[i].availableStocks >= pbuy) {
          stockMarket.stocks[i].availableStocks -= pbuy;
          stockMarket.stocks[i].currentPrice *= 1.05;
          stockMarket.stocks[i].currentPrice *= 1.01;
          console.log(stockMarket.stocks[i].name,'buying');
          return stockMarket.stocks[i].currentPrice;
        }
      }
    }
  } else
    for (let i = 0; i < stockMarket.stocks.length; i++) {
      if (
        stockMarket.stocks[i].name === identifier ||
        stockMarket.stocks[i].id === identifier
      ) {
        let psell = input("how pcs your wont to sell");
        if (stockMarket.stocks[i].availableStocks >= psell) {
          stockMarket.stocks[i].availableStocks += psell;
          stockMarket.stocks[i].currentPrice *= 0.05;
          stockMarket.stocks[i].currentPrice *= 0.01;
          console.log(stockMarket.stocks[i].name, 'selled');
          return stockMarket.stocks[i].currentPrice;
        }
      }
    }
  return "not found";
}
// console.log(OperateOnStock("buy", "v3b9qte"));


