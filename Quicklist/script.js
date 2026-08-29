const itemInput = document.getElementById("get-item")
const submit = document.getElementById("submit")
const list = document.querySelector(".itemsList")
const form = document.querySelector("form")
const deleteAlert = document.getElementById("delete-alert")

itemInput.addEventListener("input", function() {
    const hasSpecialCharacters = /[^A-Za-z0-9 ]/g

    itemInput.value = itemInput.value.replace(hasSpecialCharacters, "")
})

form.addEventListener("submit", (event) => {
    event.preventDefault()
    
    const itemValue = itemInput.value.trim()

    if (itemValue !== ""){
        const itemId = `item-${Date.now()}`

        const newLi = document.createElement("li")
        newLi.classList.add("item")

        newLi.innerHTML = `
            <div class="checkbox-wrapper">
                <input type="checkbox" id="${itemId}">
                <label for="${itemId}">${itemValue}</label>
            </div>
            <button type="button" class="delete-btn" aria-label="Botão que serve para retirar o item da lista de compras."><img src="../Quicklist/assets/icons/trashIcon.svg" alt="ícone de uma lixeira"></button>`

        list.appendChild(newLi) 
            
        itemInput.value = ""
        itemInput.focus()        
    }
})

list.addEventListener("click", (event) => {
    const deleteBtn = event.target.closest(".delete-btn")

    if (deleteBtn) {
        const itemToRemove = deleteBtn.closest(".item")

        itemToRemove.remove()

        deleteAlert.classList.remove("hidden")

        setTimeout(() => {
            deleteAlert.classList.add("hidden")
        }, 1500)
    }
})






