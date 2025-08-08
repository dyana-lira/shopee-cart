//Quais ações meu carrinho pode realizar?

//Casos de uso

// ✅adiciona item no carrinho
async function addItem(userCart, item) {
    userCart.push(item);
}

//✅deleta/exclui o item no carrinho
async function deleteItem(userCart, item) {
    const index = userCart.findIndex((product) => product.name === item.name);

    if(index !== -1) {
        userCart.splice(index, 1)
    }
    
}

//✅remove um item do carrinho = diminui um item By Item
async function removeItem(userCart, item) {

    //1. Encontra o indice do ítem
    const indexFound = userCart.findIndex((product) => product.name === item.name);

    //2. Caso não encontre o ítem
    if(indexFound === -1) {
        console.log("Ítem não encontrado")
        return;
    }    

    //3. Item > 1, subtrai um item. 
    if(userCart[indexFound].quantity >= 1) {
        userCart[indexFound].quantity -= 1;
        return
    }
    
    //4. Mas se item = 1, deleta o item
    if(userCart[indexFound].quantity === 1) {
        userCart.splice(indexFound, 1);
    }

}

//✅adiciona um item do carrinho = aumenta a quantidade de um item já existente no carrinho
async function plusItem(userCart, item) {

    //1. Encontra o indice do ítem
    const indexFound = userCart.findIndex((product) => product.name === item.name);  

    //2. Item > 1, soma um item. 
    if(userCart[indexFound].quantity >= 1) {
        userCart[indexFound].quantity += 1;
        return
    }

    
    
}


// remove um item do carrinho = diminui um item By Index
/*async function removeItem(userCart, index) {
    //transforma o indice do usuário par ao indice do BKE
    const deleteItem = index -1;
    //verifica se é maior que zero e menor do que o tamanho do carrinho
    if(deleteItem >= 0 && deleteItem < userCart.length) {
        userCart.splice(deleteItem, 1)
    }
    
}*/

async function calcSubtotal(itemPrice, itemQuantity) {
    return itemPrice * itemQuantity;
}

//🚨calcula total - formatar como o valor aparece: remover excesso de número após a virgula
async function calculateTotal(userCart) {
    console.log("\nShopee Cart TOTAL IS:");
    const result = userCart.reduce((total, item) => total + (item.price * item.quantity), 0);
    
    console.log(`TOTAL: ${result.toFixed(2)}`);

}

//✅mostra lista de itens que estão no carrinho
async function displayCart(userCart) {
    console.log("\nShopee cart list:");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - ${item.price} | ${item.quantity} | Subtotal ${(item.price * item.quantity).toFixed(2)}`)
    })

}


export {
    addItem,
    deleteItem,
    removeItem,
    calculateTotal,
    displayCart,
    plusItem
}

