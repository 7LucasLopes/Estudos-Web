const products = ["Teclado", "Mouse", "Monitor", "Mesa", "Livro"]

//Percorrendo os itens do Array
products.map((product)=> {
    console.log(product)
})

//Sintaxe reduzida
products.map((product) => console.log(product))

//Utilizando o novo objeto retornado

const formatted = products.map((product) => {
    //return product.toUpperCase()

    return {
        id: Math.random(),
        description: product,
    }
})

console.log(formatted)