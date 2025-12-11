
import { filterStocksByPrice, OperateOnStock, searchStock } from "./stock.js";
import input from "analiza-sync";
export function choise() {
  let choice = input("  \n1.searchStock  \n2.searchStock  \n3.filterStocksByPrice \n4.stop  \nChoose: ");
  if (choice === "1")console.log(searchStock("x7l2df9"));
  else if (choice === "2") console.log(filterStocksByPrice(50, true));
  else if (choice === "3") console.log(OperateOnStock("buy", "v3b9qte"));
  else if (choice === "4") return "exit";
  else console.log("Invalid choice, try again.");
}

console.log(choise());
