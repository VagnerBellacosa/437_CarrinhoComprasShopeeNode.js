// Ações que o carrinho pode fazer e seus casos de uso

// ➕ Adicionar item
async function addItem(userCart, item){
    userCart.push(item)
}

// 🧮 Calcular o total
async function calculateTotal(userCart){
    console.log("\nShopee Cart TOTAL IS:")
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0)
    console.log(`🛒 Total: ${result}`)
}

// ❌ Deletar item
async function deleteItem(userCart, name){
    const index = userCart.findIndex((item) => item.name === name)

    if (index !== -1){
        userCart.splice(index, 1)
    }

}

// ➖ Remover item
async function removeItem(userCart, item){
    
    //1. Encontrar o índice do item
    const indexFound = userCart.findIndex((p) => p.name === item.name)
    //console.log("item encontrado no index")
    //console.log(indexFound)

    //2. Caso não encontre o índice do item
    if (indexFound == -1){
        console.log("item não encontrado")
        return
    }


    //3. Se item é maior que 1, subtrair 1
    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -=1
        return
    }
    
    //4. Caso item igual a 1, deletar o item
    if(userCart[indexFound].quantity == 1) {
        userCart.splice(indexFound, 1)
        return
    }

}

// 🧾 Mostrar as informações do que há no carrinho
async function displayCart(userCart){
    console.log("\nShopee cart list:")
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal = ${item.subtotal()}`)
    })
    
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart
}