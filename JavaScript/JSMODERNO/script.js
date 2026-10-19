/*const fruits = ["Orange", "Pineapple", "Banana"]

let [orange, Pineapple,banana] = fruits

console.log(orange, Pineapple,banana)

const product = {
    description: "Teclado",
    price: 150,
}

const {description, price} = product
4
*/

const usuario = ["Lucas","Coromandel", "lucastest@test.com", 20, "Cartório", "Leitura"] 

let [nome, cidade, ...outrosValores] = usuario

console.log(nome)
console.log(cidade)
console.log(outrosValores)

function exibirOutrosValores(nome, cidade, email,...dadosRestantes) {
    console.log(`Nome: ${nome}`);
    console.log(`Cidade: ${cidade}`);
    console.log(`Email: ${email}`);
    console.log("REstante dos dados: ", dadosRestantes)
}

exibirOutrosValores(...usuario)