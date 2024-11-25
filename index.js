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
}

function thank() {
    modal.style.display = 'none'
    thankModal.style.display = 'flex'
}

function exit() {
    thankModal.style.display = 'none'
    overlay.style.position = ''
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
const submitButton = document.querySelector('.modal__button');

function checkInputs() {
    if (nameInput.value && emailInput.value && phoneInput.value) {
        submitButton.style.backgroundColor = '#954CED';
    } else {
        submitButton.style.backgroundColor = '#B9B9B9';
    }
}

nameInput.addEventListener('input', checkInputs);
emailInput.addEventListener('input', checkInputs);
phoneInput.addEventListener('input', checkInputs);
