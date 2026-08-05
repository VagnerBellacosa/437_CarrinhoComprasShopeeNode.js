// Casos de usos dos itens

// 📦 Criar um item com subtotal já calculado
async function createItem(name, price, quantity){
    return {
        name,
        price,
        quantity,
        subtotal: function(){
            return this.quantity * this.price
        //subtotal: () => price * quantity,
        }
// ------------------------------------------        
// No código original do subtotal tinha um problema na função subtotal, que ao remover itens o preço não era recalculado. 
// Ao ir em busca de ler o código no GitHub para comparações, encontrei a seguinte issue no repositório 
// https://github.com/digitalinnovationone/formacao-nodejs/issues/6, então apliquei a correção ao meu código também.
// ------------------------------------------    
    }
}

export default createItem