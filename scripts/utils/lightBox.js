// COLLECT DATA

// import mainwrapper already defined in contactForm.js, we will hide it when modal is displayed
import { mainwrapper } from '../utils/contactForm.js'
// get DOM elements
const lightBoxClose = document.getElementById('lightBoxClose')
// ACCESSIBILITY - set focus order
lightBoxClose.setAttribute('tabindex', '1')

// OPEN AND CLOSE LIGHTBOX

// define  actions when opening the lightbox
function displayLightBox () {
  const lightbox = document.getElementById('lightBoxPhotographer')
  lightbox.style.display = 'block'
  // ACCESSIBILITY - make the rest of the page invisible for screen readers
  mainwrapper.setAttribute('aria-hidden', true)
  mainwrapper.classList.add('no-scroll')
  // ACCESSIBILITY - make the lightbox visible for screen readers
  lightbox.setAttribute('aria-hidden', false)
  // ACCESSIBILITY - focus on close button
  lightBoxClose.focus()
}

// define actions when closing the lightbox
function closeLightBox () {
  const lightbox = document.getElementById('lightBoxPhotographer')
  lightbox.style.display = 'none'
  mainwrapper.setAttribute('aria-hidden', false)
  mainwrapper.classList.remove('no-scroll')
  lightbox.setAttribute('aria-hidden', true)
  createLightBox()
}
// when the close button is clicked, start closeLightBox
document.getElementById('lightBoxClose').addEventListener('click', closeLightBox)

// CREATE ALL LIGHTBOX CONTENT

export function createLightBox () {
  // STEP 1 - GET DOM ELEMENTS
  // select all the previews (images and videos) on the grid, that were created by mediaFactory
  const previews = document.querySelectorAll('.image-preview')
  // select all the titles on the grid, that were created by mediaFactory
  const titles = document.querySelectorAll('.cardTitles')
  // STEP 2 - DEFINE WHAT HAPPENS WHEN MEDIA PREVIEWS ARE CLICKED
  previews.forEach((preview, index) => {
    preview.addEventListener('click', function () {
      // STEP 2.1 - LIGHTBOX IS DISPLAYED
      displayLightBox()
      // STEP 2.2 - COLLECT DOM ELEMENTS FROM LIGHTBOX
      // select the div inside the lightbox that will contain the media (image or video)
      const lightboxMediaContainer = document.querySelector('.lightboxMediaContainer')
      // select the div inside the title area that will contain the media title
      const mediaTitle = document.querySelector('.mediaTitle')
      // STEP 2.3 - DEFINE WHAT MEDIA IS DISPLAYED INSIDE THE LIGHTBOX
      // define how to create the media that will be inserted in the lightbox
      function generateLightBoxMedia () {
        // if the media preview is a video, create a video element with the same src as the preview
        // ACCESSIBILITY - add subtititles track for video
        // ACCESSIBILITY - define focus order for keyboard navigation
        if (previews[index].src.includes('mp4')) {
          lightboxMediaContainer.innerHTML = `
                        <video tabindex="3" class="lightboxMedia" src="${previews[index].src}" controls>
                        video.innerHTML = '<track default kind="subtitles" label="French" src="assets/subtitles.vtt" srclang="fr"/>'
                        Erreur dans le chargement du media<video>
                    `
        // create the media that will be inserted in the lightbox
        // ACCESSIBILITY - add alt for image
        // ACCESSIBILITY - define focus order for keyboard navigation
        } else {
          lightboxMediaContainer.innerHTML = `
                        <img tabindex="3" class="lightboxMedia" src="${previews[index].src}" alt="${previews[index].alt}">
                    `
        }
      }
      generateLightBoxMedia()
      // STEP 3 - DEFINE WHAT TITLE IS DISPLAYED IN THE LIGHTBOX
      const lightboxmedia = document.querySelector('.lightboxMedia')
      mediaTitle.textContent = titles[index].textContent
      // ACCESSIBILITY - Setup labelled-by to link media and title
      lightboxmedia.setAttribute('labelled-by', 'mediaTitleId')
      // STEP 4 - PREPARE FOR LIGHTBOX NAVIGATION WHEN WE NEED TO CHANGE CONTENT
      function emptyLightBoxMedia () {
        lightboxMediaContainer.innerHTML = ''
      }
      // STEP 5 - MANAGE NAVIGATION WITH RIGHT BUTTON
      const rightbutton = document.querySelector('#navigateRight')
      // ACCESSIBILITY - setup focus order for right button
      rightbutton.setAttribute('tabindex', '4')
      // define how the right button modifies the selection of lightbox content
      function navigateRight () {
        // select the first media to loop in case we are currently at last media
        if (index === previews.length - 1) {
          lightboxmedia.src = previews[0].src
          mediaTitle.textContent = titles[0].textContent
          index = 0
        // select next media
        } else {
          lightboxmedia.src = previews[++index].src
          mediaTitle.textContent = titles[index].textContent
        }
        // delete the previous content of the lightbox after using the right button
        emptyLightBoxMedia()
        // display the new content of the lightbox after using right button
        generateLightBoxMedia()
      }
      // make the right button trigger navigateRight
      rightbutton.addEventListener('click', navigateRight)
      // ACCESSIBILITY - make the right button usable with keyboard
      rightbutton.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
          rightbutton.click()
        }
      })
      // STEP 6 - MANAGE NAVIGATION WITH LEFT BUTTON
      // Exactly the same as navigation with right button, see STEP 5 for explanations
      const leftbutton = document.querySelector('#navigateLeft')
      leftbutton.setAttribute('tabindex', '2')

      function navigateLeft () {
        if (index === 0) {
          lightboxmedia.src = previews[previews.length - 1].src
          mediaTitle.textContent = titles[titles.length - 1].textContent
          index = previews.length - 1
        } else {
          lightboxmedia.src = previews[--index].src
          mediaTitle.textContent = titles[index].textContent
        }
        emptyLightBoxMedia()
        generateLightBoxMedia()
      }

      leftbutton.addEventListener('click', navigateLeft)
      leftbutton.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
          leftbutton.click()
        }
      })
      document.addEventListener('keydown', e => {
        const lightbox = document.getElementById('lightBoxPhotographer')
        if (lightbox.style.display === 'block' && e.key === 'Escape') {
          closeLightBox()
        } else if (lightbox.style.display === 'block' && e.key === 'ArrowLeft') {
          navigateLeft()
        } else if (lightbox.style.display === 'block' && e.key === 'ArrowRight') {
          navigateRight()
        }
      })
      // FINISH CREATELIGHTBOX
    })
    // ACCESSIBILITY - make previews clickable with enter key to launch CREALIGHTBOX
    preview.addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
        preview.click()
      }
    })
  })
};

// SET KEYBOARD NAVIGATION FOR LIGHTBOX

// get DOM elements
const lbclosebutton = document.querySelector('#lightBoxClose')
const rightbutton = document.querySelector('#navigateRight')
const lightbox = document.querySelector('#lightBoxPhotographer')

// select first and last focusable elements to trap focus in lightbox
const firstFocusableElement = lbclosebutton
const lastFocusableElement = rightbutton
// monitor click on keyboard
lightbox.addEventListener('keydown', function (e) {
  const isTabPressed = e.key === 'Tab'
  // if the character is not tab, the function ends
  if (!isTabPressed) {
    return
  }
  // if the character is tab + shift at lightbox start, prevent default + focus on last element
  if (e.shiftKey) {
    if (document.activeElement === firstFocusableElement) {
      lastFocusableElement.focus()
      e.preventDefault()
    }
  } else {
    // if the character is tab at lightbox end, prevent default + focus on first element
    if (document.activeElement === lastFocusableElement) {
      firstFocusableElement.focus()
      e.preventDefault()
    }
  }
})
