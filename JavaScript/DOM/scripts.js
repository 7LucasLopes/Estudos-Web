console.log(document.title)

// Acessar elemento com o ID (Seletor ID)
const guest = document.getElementById("guest-2")

console.log(guest)

// Acessar elemento com o Class (Seletor class)

const guestsByClass = document.getElementsByClassName("guest")

console.log(guestsByClass)

console.log(guestsByClass.item(0)) 
console.log(guestsByClass[1])

const guestsTag = document.getElementsByTagName("li")
console.log(guestsTag)