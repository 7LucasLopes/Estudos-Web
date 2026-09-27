
const newArray = new Array()
console.log(newArray)

//Ler uma string 
console.log("Lucas".length)

const available = new Array(10)
console.log(available)
console.log(available.length)


let fruits = ["Apple", "Banana", "Orange", "Pinapple"]
console.log(fruits)

console.log(fruits[2])

//Acessando o último índice do array
console.log(fruits[fruits.length - 1])


let users = []
//Push adiciona no final da lista unshift adiniona no início do Array
users.push("Lucas")
users.push("Lopes")
users.unshift("Sophia")

//shift remove do início o pop do final
users.shift()
users.pop()

console.log(users)


let myArray = [
    "Um texto",
    15,
    true,
    function() {
        console.log("Função dentro do array");
    },
    {
        name: "Lopes",
        email: "lopes@test.com"
    },
]

// Texto
console.log(myArray[1])


let fruits1 = ["apple", "orange", "Pineapple", "banana"]
console.log(fruits1.includes("orange"))