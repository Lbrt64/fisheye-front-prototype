// import this function to execute it on click on contact form button, see below
import { displayModal } from '../utils/contactForm.js'

// PHOTOGRAPHER FACTORY, used to create elements based on media data from photographers.json
export function photographerFactory (data) {
  // identify what data we extract
  const {
    name,
    id,
    city,
    country,
    tagline,
    price,
    portrait
  } = data
  // create picture path based on portrait data, used in getUserCardDOM
  const picture = `assets/photographers/${portrait}`

  // function to create photographer cards in INDEX.HTML through INDEX.JS
  // it returns 'article'
  function getUserCardDOM () {
    // GETUSERCARDDOM - CREATE ELEMENTS
    // create the container article for the whole card
    const article = document.createElement('article')
    article.setAttribute('id', id)
    // create a clickable container for the photographer image and title
    const imgcontainer = document.createElement('a')
    imgcontainer.classList.add('profile-picture-container')
    // add photographer id to the destination url to use later in photographer.html
    imgcontainer.setAttribute('onclick', "window.location='photographer.html?" + id + " ' ")
    // ACCESSIBILITY - make clickable cards with picture and title focusable with tab
    imgcontainer.setAttribute('tabindex', '0')
    // ACCESSIBILITY - make cards with picture and title clicked on pressing the enter key
    imgcontainer.addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
        imgcontainer.click()
      }
    })
    // create photographer profile picture
    const photographerImage = document.createElement('img')
    photographerImage.setAttribute('src', picture)
    photographerImage.setAttribute('alt', name)
    photographerImage.classList.add('profile-picture-front')
    // create photographer name
    const h2 = document.createElement('h2')
    h2.textContent = name
    // create photographer location text
    const location = document.createElement('p')
    location.textContent = city + ', ' + country
    location.classList.add('photographer_place')
    // create photographer quote text
    const quote = document.createElement('p')
    quote.textContent = tagline
    quote.classList.add('photographer_quote')
    // create photographer pricing text
    const pricing = document.createElement('p')
    pricing.textContent = price + '€/jour'
    pricing.classList.add('photographer_price')

    // GETUSERCARDDOM - ORGANIZE ELEMENTS
    // append image & title to the clickable area
    imgcontainer.appendChild(photographerImage)
    imgcontainer.appendChild(h2)
    // adding all elements inside the article
    article.appendChild(imgcontainer)
    article.appendChild(location)
    article.appendChild(quote)
    article.appendChild(pricing)
    // return article so that it can be appended to the page by another function
    return (article)
  }

  // function to create photographer information in PHOTOGRAPHER.HTML through PHOTOGRAPHER.JS
  // it returns 'profileBox'
  function getPhotographInfoDOM () {
    // GETPHOTOGRAPHINFODOM - CREATE ELEMENTS
    // Create container the photographer profile elements
    const profileBox = document.createElement('div')
    profileBox.classList.add('profileBox')
    // Create container for all text information
    const infos = document.createElement('div')
    infos.classList.add('textInfoBox')
    // create page title based on photograper name
    const h1 = document.createElement('h1')
    h1.textContent = name
    h1.classList.add('photographerName')
    // create paragraph for photographer location
    const location = document.createElement('p')
    location.textContent = city + ', ' + country
    location.classList.add('photographer-place')
    // create paragraph for photographer quote
    const quote = document.createElement('p')
    quote.textContent = tagline
    quote.classList.add('photographer-quote')
    // create button to open form to contact photographer
    const boutonContact = document.createElement('button')
    boutonContact.textContent = 'Contactez-moi'
    boutonContact.classList.add('contact-button')
    // this function opens the modal, but also adds the photographer's name to the modam title. It is imported from contactForm.js
    boutonContact.addEventListener('click', displayModal)
    boutonContact.id = 'boutonContactPhotographe'
    // create a container for the profile picture
    const imgcontainer = document.createElement('div')
    imgcontainer.classList.add('profile-picture-container')
    // create photographer profile picture
    const photographerImage = document.createElement('img')
    photographerImage.setAttribute('src', picture)
    photographerImage.setAttribute('alt', name)
    photographerImage.classList.add('profile-picture-front')

    // GETPHOTOGRAPHINFODOM - ORGANIZE ELEMENTS
    // appends the photographer profile picture inside its container
    imgcontainer.appendChild(photographerImage)
    // appends the photographer related text to thei container
    infos.appendChild(h1)
    infos.appendChild(location)
    infos.appendChild(quote)
    // appends all elements to the main container with all information
    profileBox.appendChild(infos)
    profileBox.appendChild(boutonContact)
    profileBox.appendChild(imgcontainer)
    // return profileBox so that it can be appended to the page by another function
    return (profileBox)
  }
  // function to create the small box with prices & likes at page bottom in PHOTOGRAPHER.HTML through PHOTOGRAPHER.JS
  // it returns 'boxPrice'
  function getBoxPriceDOM () {
    // create the boxPrice box
    const boxPrice = document.createElement('p')
    boxPrice.textContent = price + '€/jour'
    boxPrice.classList.add('boxprice')
    // return the boxPrice box so that it can be appended to the page by another function
    return (boxPrice)
  }
  // make elements extracted from JSON available to other functions
  return {
    name,
    id,
    city,
    country,
    tagline,
    price,
    portrait,
    picture,
    getUserCardDOM,
    getPhotographInfoDOM,
    getBoxPriceDOM
  }
}
