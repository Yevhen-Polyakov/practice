const controlModal = {
    openModal: document.querySelector('[data-open-modal-form]'),
    closeModal: document.querySelector('[data-modal-form-close]'),
    modal: document.querySelector('[data-modal-form]'),
};

controlModal.openModal.addEventListener('click', toggleModal);
controlModal.closeModal.addEventListener('click', toggleModal);

function toggleModal(){
    controlModal.modal.classList.toggle('is-open');
    document.body.classList.toggle('no-scroll');
}


export { toggleModal, controlModal };