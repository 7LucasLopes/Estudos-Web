const ul = document.querySelector("ul")

ul.addEventListener("scroll", (event) => {
    if (ul.scrollTop > 300){
        //console.log("Fim da lista")

        ul.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }
})