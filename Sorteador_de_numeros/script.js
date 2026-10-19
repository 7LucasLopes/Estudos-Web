const form = document.querySelector('form');
const fieldsetFormulario = document.querySelector('.form-fieldset');
const fieldsetResultado = document.querySelector('.hidde');
const divResultados = document.getElementById('resultado-numeros');
const btnVoltar = document.getElementById('btn-voltar');

form.addEventListener('submit', function (event) {
    event.preventDefault()

    const quantidade = Number(document.getElementById('quantidade').value)
    const minimo = Number(document.getElementById('minimo').value)
    const maximo = Number(document.getElementById('maximo').value)
    const naoRepetir = document.getElementById('no-repeat').checked

    if (minimo >= maximo) {
        alert('O valor mínimo deve ser menor que o valor máximo!')
        return
    }

    const totalNumerosPossiveis = (maximo - minimo) + 1

    if (naoRepetir && quantidade > totalNumerosPossiveis) {
        alert(`A quantidade de números a sortear (${quantidade}) é maior do que os números disponíveis no intervalo (${totalNumerosPossiveis}) sem repetição!`)
        return
    }

    const numerosSorteados = []

    while (numerosSorteados.length < quantidade) {
        const numeroAleatorio = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo

        if (naoRepetir) {
            if (!numerosSorteados.includes(numeroAleatorio)) {
                numerosSorteados.push(numeroAleatorio)
            }
        } else {
            numerosSorteados.push(numeroAleatorio)
        }
    }

    console.log("Números sorteados: ", numerosSorteados)

   
    fieldsetFormulario.classList.add('hidde')
    fieldsetResultado.classList.remove('hidde')

    
    divResultados.innerHTML = numerosSorteados.map(numero => `
        <div style=" width: 86px; height: 86px;">
            ${numero}
        </div>
    `).join('')
})


btnVoltar.addEventListener('click', function () {
    fieldsetResultado.classList.add('hidde')
    fieldsetFormulario.classList.remove('hidde')
})