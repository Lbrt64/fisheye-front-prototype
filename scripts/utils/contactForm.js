// MANAGE MODAL OPEN & CLOSE

// get DOM elements
export const mainwrapper = document.querySelector('.main-wrapper')
const modal = document.getElementById('contact_modal')
const modalCloseButton = document.getElementById('modalCloseButton')

// define actions when modal is opened, manage accessibility
export function displayModal () {
  modal.style.display = 'block'
  // ACCESSIBILITY - make elements that are not in the modal disappear for screen readers + lock scroll
  mainwrapper.setAttribute('aria-hidden', true)
  mainwrapper.classList.add('no-scroll')
  // ACCESSIBILITY - make the modal appear for screen readers
  modal.setAttribute('aria-hidden', false)
  // ACCESSIBILITY - focus on the modal exit button first
  modalCloseButton.focus()
  // ACCESSIBILITY - get first and last focusable elements to loop focus inside modal
  const firstFocusableElement = modalCloseButton
  const lastFocusableElement = submitFormButton
  // monitor click on keyboard
  document.addEventListener('keydown', function (e) {
    const isTabPressed = e.key === 'Tab'
    // if the character is not tab, the function ends
    if (!isTabPressed) {
      return
    }
    // if the character is tab + shift at form start, prevent default + focus on last element
    if (e.shiftKey) {
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus()
        e.preventDefault()
      }
    } else {
      // if the character is tab at form end, prevent default + focus on first element
      if (document.activeElement === lastFocusableElement) {
        firstFocusableElement.focus()
        e.preventDefault()
      }
    }
  })
}

// define actions when modal is closed, manage accessibility
function closeModal () {
  const modalOpenButton = document.getElementById('boutonContactPhotographe')
  modal.style.display = 'none'
  // make regular page content visible again for screen readers + unlock scroll
  mainwrapper.setAttribute('aria-hidden', false)
  mainwrapper.classList.remove('no-scroll')
  // hide modal for screen readers
  modal.setAttribute('aria-hidden', true)
  // focus back on modal open button
  modalOpenButton.focus()
}

// MANAGE MODAL CONTENT

// get modal DOM elements
const firstNameField = document.getElementById('first')
const lastNameField = document.getElementById('last')
const emailField = document.getElementById('email')
const messageField = document.getElementById('message')
const submitFormButton = document.getElementById('submitFormButton')
const contactForm = document.getElementById('contact-me-form')

// display the content of each field of the modal in the console as required
function getFieldsValue () {
  console.log('Prenom : ' + firstNameField.value)
  console.log('Nom : ' + lastNameField.value)
  console.log('Email : ' + emailField.value)
  console.log('Message : ' + messageField.value)
}

// used when the user submits the form
function validateForm () {
  getFieldsValue()
  closeModal()
}

// EVENT TRACKING FOR USER ACTIONS
// using conditions because this page is linked to INDEX.HTML via other import/export operations
// setting these tracking on index.html create errors, so if the DOM delements do not exist, no tracking is set up

// Launch closeModal when the close button is clicked
if (modalCloseButton) {
  document.getElementById('modalCloseButton').addEventListener('click', closeModal)
}
// ACCESSIBILITY - close the modal when escape is pressed
if (modal) {
  document.addEventListener('keydown', e => {
    if (modal.style.display === 'block' && e.key === 'Escape') {
      closeModal()
    }
  })
}
// Make sure contact form doesnt submit automatically without triggering validateForm and collecting data from inputs
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault()
  })
}
// Validate the form when click on submit button, no validation rules required
if (submitFormButton) {
  submitFormButton.addEventListener('click', validateForm)
}
