export function classificationIMC(index) {
    let classification = ""
    
    if (index < 18.5) {
        classification = "Abaixo do peso"
    } else if (index >= 18.5 && index < 25) {
        classification = "Dentro do peso"

    } else if (index >= 25 && index < 30) {
        classification = "Sobrepeso"

    } else if (index >= 30 && index < 35) {
        classification = "Obesidade 1"

    } else if (index >= 35 && index < 40) {
        classification = "Obesidade 2 - Severa"

    } else if (index >= 40) {
        classification = "Obesidade 3 - Mórbida"

    } else {
        classification = "Erro na classificação"
    }
    return classification
}