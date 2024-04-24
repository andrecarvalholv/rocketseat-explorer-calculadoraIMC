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
        // classificationIMC(IMC)
        textModal.innerText = `Seu IMC é de ${IMC.toFixed(2)}\n(${classificationIMC(IMC)})  `

        console.log(classificationIMC(IMC))
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

function classificationIMC(index) {
    let classification = ""
    
    if (index < 18.5) {
        classification = "Abaixo do peso"
    } else if (index >= 18.5 && index < 24.9) {
        classification = "Dentro do peso"

    } else if (index >= 25 && index < 29.9) {
        classification = "Sobrepeso"

    } else if (index >= 30 && index < 34.9) {
        classification = "Obesidade 1"

    } else if (index >= 35 && index < 39.9) {
        classification = "Obesidade 2 - Severa"

    } else if (index >= 40) {
        classification = "Obesidade 3 - Mórbida"

    } else {
        classification = "Erro na classificação"
    }
    return classification
}