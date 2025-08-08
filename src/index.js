import createItem from "./services/item.js";
import * as cartService from "./services/cart.js"

const cart = [];
const wishList = [];

console.log("Welcome to your Shopee Cart!");

// a quantidade não deveria ser fixa.
const item1 = await createItem("hotwheels ferrari", 20.99, 1);
const item2 = await createItem("hotwheels lamborghini", 39.99, 3);

cartService.addItem(cart, item1);
cartService.addItem(cart, item2);

await cartService.removeItem(cart, item2);
await cartService.removeItem(cart, item2);

await cartService.displayCart(cart);

await cartService.calculateTotal(cart);







