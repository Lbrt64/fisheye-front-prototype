import { displayModal } from '../utils/contactForm.js'

export function photographerFactory (data) {
  const {
    name,
    id,
    city,
    country,
    tagline,
    price,
    portrait
  } = data
  const picture = `assets/photographers/${portrait}`

  function getUserCardDOM () {
    const article = document.createElement('article')
    article.setAttribute('id', id)
    const imgcontainer = document.createElement('a')
    imgcontainer.classList.add('profile-picture-container')
    imgcontainer.setAttribute('onclick', "window.location='photographer.html?" + id + " ' ")
    imgcontainer.setAttribute('aria-label', 'Voir la page de ' + name)
    imgcontainer.setAttribute('tabindex', '0')
    imgcontainer.addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
        imgcontainer.click()
      }
    })
    const imgfront = document.createElement('img')
    imgfront.setAttribute('src', picture)
    imgfront.setAttribute('alt', name)
    imgfront.classList.add('profile-picture-front')
    const h2 = document.createElement('h2')
    h2.textContent = name
    const location = document.createElement('p')
    location.textContent = city + ', ' + country
    location.classList.add('photographer_place')
    const quote = document.createElement('p')
    quote.textContent = tagline
    quote.classList.add('photographer_quote')
    const pricing = document.createElement('p')
    pricing.textContent = price + '€/jour'
    pricing.classList.add('photographer_price')
    imgcontainer.appendChild(imgfront)
    imgcontainer.appendChild(h2)
    article.appendChild(imgcontainer)
    article.appendChild(location)
    article.appendChild(quote)
    article.appendChild(pricing)
    return (article)
  }

  function getPhotographInfoDOM () {
    const profileBox = document.createElement('div')
    profileBox.classList.add('profileBox')
    const infos = document.createElement('div')
    infos.classList.add('textInfoBox')
    const h1 = document.createElement('h1')
    h1.textContent = name
    const location = document.createElement('p')
    location.textContent = city + ', ' + country
    location.classList.add('photographer-place')
    const quote = document.createElement('p')
    quote.textContent = tagline
    quote.classList.add('photographer-quote')
    const boutonContact = document.createElement('button')
    boutonContact.textContent = 'Contactez-moi'
    boutonContact.classList.add('contact-button')
    boutonContact.addEventListener('click', displayModal)
    boutonContact.id = 'boutonContactPhotographe'
    const imgcontainer = document.createElement('div')
    imgcontainer.classList.add('profile-picture-container')
    const imgfront = document.createElement('img')
    imgfront.setAttribute('src', picture)
    imgfront.setAttribute('alt', name)
    imgfront.classList.add('profile-picture-front')
    imgcontainer.appendChild(imgfront)
    infos.appendChild(h1)
    infos.appendChild(location)
    infos.appendChild(quote)
    profileBox.appendChild(infos)
    profileBox.appendChild(boutonContact)
    profileBox.appendChild(imgcontainer)
    return (profileBox)
  }

  function getBoxPriceDOM () {
    const boxPrice = document.createElement('p')
    boxPrice.textContent = price + '€/jour'
    boxPrice.classList.add('boxprice')
    return (boxPrice)
  }
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
