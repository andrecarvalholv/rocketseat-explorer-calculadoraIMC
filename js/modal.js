export const Modal = {
    sectionModal: document.querySelector('.modal'),
    textModal: document.querySelector('.modal h2'),
    buttonClose: document.querySelector('#close-button'),
    
    openModal() {
        Modal.sectionModal.classList.add('open')
    },
    closeModal() {
        Modal.sectionModal.classList.remove('open')
    }
}

Modal.buttonClose.addEventListener('click', Modal.closeModal)
window.addEventListener('keydown', escClick)

function escClick(event) {
    if (event.key === 'Escape') {
        Modal.closeModal()
    }
}