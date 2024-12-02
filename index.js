//логика соглашения cookie

const cookie = document.querySelector('.section-cookie')
const acceptBut = document.querySelector('.section-cookie__cookie-accept')
const declineBut = document.querySelector('.section-cookie__cookie-decline')

acceptBut.addEventListener('click', function() {
    cookie.style.display = 'none';
})

declineBut.addEventListener('click', function() {
    alert('Что бы закрыть диалоговое окно, примите соглашение')
})

//модальные окна

const saleBut = document.querySelectorAll('.header__contact-button, .first-section__slogan div, .seven-section__contact-button, .seven-section__contact-button, .section-footer__contacts div')
const overlay = document.querySelector('.overlay')
const modal = document.querySelector('.modal')
const modalData = document.querySelector('.modal__data')
const modalClose = document.querySelector('.modal__close')
const buttonSend = document.querySelector('.modal__button')
const thankModal = document.querySelector('.thank')
const superBut = document.querySelector('.thank__super')

function modalSale() {
    overlay.style.position = 'fixed'
    modal.style.display = 'flex'
}

function close() {
    overlay.style.position = ''
    modal.style.display = 'none'
    errorSubmit.forEach(function(each) {
        each.style.display = 'none'
        each.style.marginBottom = '0px'
    })
    nameInput.style.borderColor = '#181818';
    emailInput.style.borderColor = '#181818';
    phoneInput.style.borderColor = '#181818';
    modal.style.height = '587px'
    modalData.style.height = '370px'
}

function thank() {
    modal.style.display = 'none'
    thankModal.style.display = 'flex'
}

function exit() {
    thankModal.style.display = 'none'
    overlay.style.position = ''
    errorSubmit.forEach(function(each) {
        each.style.display = 'none'
        each.style.marginBottom = '0px'
    })
    nameInput.style.borderColor = '#181818';
    emailInput.style.borderColor = '#181818';
    phoneInput.style.borderColor = '#181818';
    modal.style.height = '587px'
    modalData.style.height = '370px'
}

saleBut.forEach(function(each) {
    each.addEventListener('click', modalSale)
})

modalClose.addEventListener('click', close)
buttonSend.addEventListener('click', thank)
superBut.addEventListener('click', exit)


//проверка полей
const nameInput = document.querySelector('.modal__data-name input');
const emailInput = document.querySelector('.modal__data-email input');
const phoneInput = document.querySelector('.modal__data-number input');
const buttonContainer = document.querySelector('.modal__button-container');

buttonSend.disabled = true;

function checkInputs() {
    if (nameInput.value && emailInput.value && phoneInput.value) {
        buttonSend.style.backgroundColor = '#954CED';
        buttonSend.disabled = false;
        buttonSend.style.pointerEvents = 'auto'
    } else {
        buttonSend.style.backgroundColor = '#B9B9B9';
        buttonSend.disabled = true;
        buttonSend.style.pointerEvents = 'none';
    }
}

const errorSubmit = document.querySelectorAll('.modal__data-name h4, .modal__data-email h4, .modal__data-number h4, .modal h3')

buttonContainer.addEventListener('click', function() {
    errorSubmit.forEach(function(each) {
        each.style.display = 'block'
        each.style.marginBottom = '10px'
    })
    nameInput.style.borderColor = 'red';
    emailInput.style.borderColor = 'red';
    phoneInput.style.borderColor = 'red';
    modal.style.height = '699px'
    modalData.style.height = 'auto'
})

nameInput.addEventListener('input', checkInputs);
emailInput.addEventListener('input', checkInputs);
phoneInput.addEventListener('input', checkInputs);
