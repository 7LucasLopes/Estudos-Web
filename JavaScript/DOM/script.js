/*const ul = document.querySelector("ul")

ul.addEventListener("scroll", (event) => {
    if (ul.scrollTop > 300){
        //console.log("Fim da lista")

        ul.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }
})


const form = document.querySelector("form")

form.onsubmit = (event) => {
    event.preventDefault() //impedi o recarregamento da página quando é encaminhado um submit

    console.log("Dados enviados sem recarregar a página!")
}
*/

const input = document.querySelector("input")

//keydown - quando uma tecla é pressionada (captura tudo)

input.addEventListener("keydown", (event) => {
    console.log(event.key)
})