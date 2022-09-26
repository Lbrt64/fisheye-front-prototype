const mainwrapper = document.querySelector('.main-wrapper')
const modal = document.getElementById('contact_modal')
const modalCloseButton = document.getElementById('modalCloseButton')

export function displayModal () {
  modal.style.display = 'block'
  mainwrapper.setAttribute('aria-hidden', true)
  mainwrapper.classList.add('no-scrol')
  modal.setAttribute('aria-hidden', false)
  modalCloseButton.focus()
  const firstFocusableElement = modalCloseButton
  const lastFocusableElement = submitFormButton
  document.addEventListener('keydown', function (e) {
    const isTabPressed = e.key === 'Tab'

    if (!isTabPressed) {
      return
    }

    if (e.shiftKey) {
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus()
        e.preventDefault()
      }
    } else {
      if (document.activeElement === lastFocusableElement) {
        firstFocusableElement.focus()
        e.preventDefault()
      }
    }
  })
}

function closeModal () {
  const modalOpenButton = document.getElementById('boutonContactPhotographe')
  modal.style.display = 'none'
  mainwrapper.setAttribute('aria-hidden', false)
  mainwrapper.classList.remove('no-scroll')
  modal.setAttribute('aria-hidden', true)
  modalOpenButton.focus()
}

const firstNameField = document.getElementById('first')
const lastNameField = document.getElementById('last')
const emailField = document.getElementById('email')
const messageField = document.getElementById('message')

const submitFormButton = document.getElementById('submitFormButton')

const contactForm = document.getElementById('contact-me-form')

function getFieldsValue () {
  console.log('Prenom : ' + firstNameField.value)
  console.log('Nom : ' + lastNameField.value)
  console.log('Email : ' + emailField.value)
  console.log('Message : ' + messageField.value)
}

function validateForm () {
  getFieldsValue()
  closeModal()
}

if (modal) {
  document.addEventListener('keydown', e => {
    if (modal.style.display === 'block' && e.key === 'Escape') {
      closeModal()
    }
  })
}
if (modalCloseButton) {
  document.getElementById('modalCloseButton').addEventListener('click', closeModal)
}
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault()
  })
}
if (submitFormButton) {
  submitFormButton.addEventListener('click', validateForm)
}
