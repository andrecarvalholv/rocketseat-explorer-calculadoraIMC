// Variáveis
const buttonImc = document.querySelector('#calculate-button')
const sectionModal = document.querySelector('.modal')
const textModal = document.querySelector('.modal h2')
const buttonClose = document.querySelector('#close-button')
const sectionError = document.querySelector('.error')

// Eventos
buttonImc.addEventListener('click', calculateIMC)
buttonClose.addEventListener('click', toggleModal)


// Funções
function calculateIMC(event) {
    event.preventDefault()

    const inputTextWeight = document.querySelector('#weight-imc')
    const inputTextHeight = document.querySelector('#height-imc')

    const numberWeight = Number(inputTextWeight.value)
    const numberHeight = Number(inputTextHeight.value)

    conditions = isNaN(numberWeight) || isNaN(numberWeight) || inputTextWeight.value === "" || inputTextHeight.value === "" || numberWeight <= 0 || numberHeight <= 0 || numberHeight >= 3

    if (conditions) {
        addError()    
    } else {
        removeError()
        toggleModal()
        let IMC = numberWeight/(numberHeight**2)
        textModal.innerText = `Seu IMC é de ${IMC.toFixed(2)}`
        console.log(IMC)
    }
}

function toggleModal() {
    sectionModal.classList.toggle('open')
}

function addError() {
    sectionError.classList.add('open')
}

function removeError() {
    sectionError.classList.remove('open')
}
