const mainwrapper = document.querySelector('.main-wrapper')
const modal = document.getElementById('contact_modal')
const modalCloseButton = document.getElementById('modalCloseButton')


function displayModal () {
  modal.style.display = 'block'
  mainwrapper.setAttribute('aria-hidden', true)
  mainwrapper.classList.add('no-scroll')
  modal.setAttribute('aria-hidden', false)
  modalCloseButton.focus()

  // add all the elements inside modal which you want to make focusable
  const firstFocusableElement = modalCloseButton; // get first element to be focused inside modal
  const lastFocusableElement = submitFormButton; // get last element to be focused inside modal 

  document.addEventListener('keydown', function(e) {
    const isTabPressed = e.key === 'Tab';

    if (!isTabPressed) {
      return;
    }

    if (e.shiftKey) { // if shift key pressed for shift + tab combination
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus(); // add focus for the last focusable element
        e.preventDefault();
      }
    } else { // if tab key is pressed
      if (document.activeElement === lastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
        firstFocusableElement.focus(); // add focus for the first focusable element
        e.preventDefault();
      }
    }
  });
}
// Close modal when escape key is pressed
document.addEventListener('keydown', e => {
  if (modal.style.display === 'block' && e.key === 'Escape') {
    closeModal()
  }
})

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
contactForm.addEventListener('submit', function (e) {
  e.preventDefault()
})

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
submitFormButton.addEventListener('click', validateForm)

