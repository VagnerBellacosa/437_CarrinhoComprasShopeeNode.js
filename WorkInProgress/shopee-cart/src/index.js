import * as cartService from './services/cart.js'
import createItem from "./services/item.js"

const myCart = []
const myWishList = []

console.log("Welcome to the your Shopee Cart!")

// Criando itens
const item1 = await createItem("Hot Wheels Ferrari", 20.99, 1)
const item2 = await createItem("Hot Wheels Lamborghini", 39.99, 3)

// Itens adicionado ao carrinho
await cartService.addItem(myCart, item1)
await cartService.addItem(myCart, item2)

// Removendo itens do carrinho
await cartService.removeItem(myCart, item2)

// Mostrando o que tem no carrinho
await cartService.displayCart(myCart)

await cartService.calculateTotal(myCart)