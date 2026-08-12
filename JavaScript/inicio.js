/*const showMessage = (name) => {
    console.log("Olá, ", name)
}

showMessage("Lucas")

const showMessage1 = (username, email) => {
    console.log(`Olá, ${username}! Seu e-mail é: ${email} `)
}

showMessage1("Lucas", "godisgood@gamil.com")
*/

function execute(taskName,callBack){
    console.log("Executando a tarefa: ", taskName)

    callBack()
}

function callBack(){
    console.log("Tarefa finalizada.")
}

execute("Download do arquivo...", callBack)