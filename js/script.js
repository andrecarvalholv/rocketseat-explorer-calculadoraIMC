import { Modal } from './modal.js'
import { Alert } from './alert.js'
import { classificationIMC } from './utils.js'

const inputTextWeight = document.querySelector('#weight-imc')
const inputTextHeight = document.querySelector('#height-imc')
const buttonImc = document.querySelector('#calculate-button')

buttonImc.addEventListener('click', calculateIMC)

function calculateIMC(event) {
    event.preventDefault()

    const numberWeight = Number(inputTextWeight.value)
    const numberHeight = Number(inputTextHeight.value)

    let conditions = isNaN(numberWeight) || isNaN(numberWeight) || inputTextWeight.value === "" || inputTextHeight.value === "" || numberWeight <= 0 || numberHeight <= 0 || numberHeight >= 3

    if (conditions) {
        Alert.addError()
        return 
    }

    Alert.removeError()
    Modal.openModal()

    let IMC = (numberWeight/(numberHeight**2)).toFixed(2)

    Modal.textModal.innerText = `Seu IMC é de ${IMC}\n(${classificationIMC(IMC)})  `
}