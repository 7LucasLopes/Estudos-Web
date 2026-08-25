// Cotação de moedas dos dia.  "Ver se posso criar essa constante e nela inserir uma API que busca o valor atual em tempo real"

const USD = 4.87
const EUR = 5.32
const GBP = 6.08

const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")

// Manipulando o input amount para receber somente números.
amount.addEventListener("input", function() {
    const hasCharactersRegex = /\D+/g    
    amount.value = amount.value.replace(hasCharactersRegex, " ")    
    
})

// Capturando o envento de submit do formulário.
form.onsubmit = (event) => {
    event.preventDefault()

    switch (currency.value){
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
    }
}

// Função para converter a moeda.
function convertCurrency(amount, price, symbol){
    //Aplica a classe que exibe o footer para mostrar o resultado 
    try {
        description.textContent = `${symbol} 1 = ${price}`

        footer.classList.add("show-result")
    }
    catch (error) {
        console.log(error)

        // Remove a classe do footer removendo ele da tela.
        footer.classList.remove("show-result")
        alert("Não foi possível converter. Tente novamente mais tarde.")
    }
}