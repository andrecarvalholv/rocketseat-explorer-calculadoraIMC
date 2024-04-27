export const Alert = {
    sectionError: document.querySelector('.error'),
    addError() {
        Alert.sectionError.classList.add('open')
    },
    removeError() {
        Alert.sectionError.classList.remove('open')
    }
}
