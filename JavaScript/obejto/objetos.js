/* 
 OBJETO
  - Uma coleção de dados e/ou funcionalidades;
  - Podem ter propriedades e métodos;
*/
// Cria um obejto vazio

const obj = {}

console.log(obj)

// Cria um objeto com propriedades e métodos

const user = {
  email: "test@test.com",
  age: 15,
  name: {
    first_name: "Junior",
    surname: "Juninho"
  },
  address: {
    street: "Rua test",
    number: 45,
    city: "Test",
    postal_code: 12.345-678,
    state: "Test Testando"
  },

  message: function() {
    console.log(`Olá, ${this.name.first_name}`)
  },

}

user.message()