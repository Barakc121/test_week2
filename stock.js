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
  if (operation === "buy") {
    for (let i = 0; i < stockMarket.stocks.length; i++) {
      if (
        stockMarket.stocks[i].name === identifier ||
        stockMarket.stocks[i].id=== identifier
      ) {
        let pbuy = input("how pcs your wont to buy");
        if (stockMarket.stocks[i].availableStocks <= pbuy) {
          stockMarket.stocks[i].availableStocks -= pbuy;
          stockMarket.stocks[i].currentPrice *= 1.05;
          stockMarket.stocks[i].currentPrice *= 1.01;54
        }
      }
    }
  }

  if (operation === "sell")
    for (let i = 0; i < stockMarket.stocks.length; i++) {
      if (
        stockMarket.stocks[i].name === identifier ||
        stockMarket.stocks[i].id  === identifier
      ) {
        let psell = input("how pcs your wont to sell");
         if (stockMarket.stocks[i].availableStocks <= pbuy) {
          stockMarket.stocks[i].availableStocks -= pbuy;
          stockMarket.stocks[i].currentPrice *= 1.05;
          stockMarket.stocks[i].currentPrice *= 1.01;54
      }
    }
}
console.log(OperateOnStock("buy", "x7l2df9"));
