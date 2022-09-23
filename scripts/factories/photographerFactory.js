// CREATION DE LA FACTORY, AJOUT DE DONNES EN "DATA", PAR EXEMPLE LE TABLEAU DES PHOTOGRAPHES
function photographerFactory (data) {
  // SETUP PREALABLE
  // identification des data a extraire des tableaux passés en DATA
  const { name, id, city, country, tagline, price, portrait } = data
  // construction d'une nouvelle data - le lien d'accès aux photos
  const picture = `assets/photographers/${portrait}`

  // CREATION DES ARTICLES POUR LA PAGE D'ACCUEIL
  function getUserCardDOM () {
    // CREATION DES ELEMENTS A IMPORTER DANS LA PAGE -- LES ELEMENTS NE SONT PAS ENCORE AJOUTES A LA PAGE
    // Création de l'élément article -- pas encore rattaché au DOM
    const article = document.createElement('article')
    article.setAttribute('id', id)

    // Création de l'élément qui contient la profile picture et les effets visuels
    const imgcontainer = document.createElement('a')
    imgcontainer.classList.add('profile-picture-container')
    imgcontainer.setAttribute('onclick', "window.location='photographer.html?" + id + " ' ")
    imgcontainer.setAttribute('aria-label', 'Voir la page de ' + name)
    imgcontainer.setAttribute('tabindex', '0')
    imgcontainer.addEventListener('keypress', function(event) {
      // If the user presses the "Enter" key on the keyboard
      if (event.key === 'Enter') {
        imgcontainer.click()
      }
    })

    // Création de la profile picture
    const imgfront = document.createElement('img')
    imgfront.setAttribute('src', picture)
    imgfront.setAttribute('alt', name)
    imgfront.classList.add('profile-picture-front')

    // Création du titre contenant le nom du photographe
    const h2 = document.createElement('h2')
    h2.textContent = name

    // Création du paragraphe contenant la localisation du photographe
    const location = document.createElement('p')
    location.textContent = city + ', ' + country
    location.classList.add('photographer_place')

    // Création du paragraphe contenant la tagline du photographe
    const quote = document.createElement('p')
    quote.textContent = tagline
    quote.classList.add('photographer_quote')

    // Création du paragraphe contenant le pricing du photographe
    const pricing = document.createElement('p')
    pricing.textContent = price + '€/jour'
    pricing.classList.add('photographer_price')

    // ORGANISATION DES ELEMENTS DE LA PHOTO AU SEIN DE LEUR CONTENEUR (front, filtre, back) -- ELEMENTS PAS AJOUTES A LA PAGE
    imgcontainer.appendChild(imgfront)
    imgcontainer.appendChild(h2)

    // ORGANISATION DES ELEMENTS CREES AU SEIN DE L'ARTICLE -- ELEMENTS PAS AJOUTES A LA PAGE
    article.appendChild(imgcontainer)
    article.appendChild(location)
    article.appendChild(quote)
    article.appendChild(pricing)

    // VISUALISATION DE L'OBJET ARTICLE POUR CONTROLE

    // VALIDATION DE L'OPERATION DE CREATION D'UN ARTICLE
    return (article)
  }

  // CREATION DES ARTICLES POUR LES INFOS DE LA PAGE PHOTOGRAPHE
  function getPhotographInfoDOM () {
    // CREATION DES ELEMENTS A IMPORTER DANS LA PAGE -- LES ELEMENTS NE SONT PAS ENCORE AJOUTES A LA PAGE

    // Creation de la div avec toutes les infos de contact
    const profileBox = document.createElement('div')
    profileBox.classList.add('profileBox')

    // Création de la div avec les infos du photographe
    const infos = document.createElement('div')
    infos.classList.add('textInfoBox')

    // Création du titre contenant le nom du photographe
    const h1 = document.createElement('h1')
    h1.textContent = name

    // Création du paragraphe contenant la localisation du photographe
    const location = document.createElement('p')
    location.textContent = city + ', ' + country
    location.classList.add('photographer-place')

    // Création du paragraphe contenant la tagline du photographe
    const quote = document.createElement('p')
    quote.textContent = tagline
    quote.classList.add('photographer-quote')

    // Création du bouton contactez moi
    const boutonContact = document.createElement('button')
    boutonContact.textContent = 'Contactez-moi'
    boutonContact.classList.add('contact-button')
    boutonContact.setAttribute('onclick', 'displayModal()')
    boutonContact.id = 'boutonContactPhotographe'

    // Création de l'élément qui contient la profile picture et les effets visuels
    const imgcontainer = document.createElement('div')
    imgcontainer.classList.add('profile-picture-container')

    // Création de la profile picture
    const imgfront = document.createElement('img')
    imgfront.setAttribute('src', picture)
    imgfront.setAttribute('alt', name)
    imgfront.classList.add('profile-picture-front')

    // ORGANISATION DES ELEMENTS DE LA PHOTO AU SEIN DE LEUR CONTENEUR (front, filtre, back) -- ELEMENTS PAS AJOUTES A LA PAGE
    imgcontainer.appendChild(imgfront)

    // ORGANISATION DES ELEMENTS INFOS -- ELEMENTS PAS AJOUTES A LA PAGE
    infos.appendChild(h1)
    infos.appendChild(location)
    infos.appendChild(quote)

    // Intégration de tout le reste dans la profileBox
    profileBox.appendChild(infos)
    profileBox.appendChild(boutonContact)
    profileBox.appendChild(imgcontainer)

    // VISUALISATION DE L'OBJET ARTICLE POUR CONTROLE

    // VALIDATION DE L'OPERATION DE CREATION D'UN ARTICLE
    return (profileBox)
  }

  function getBoxPriceDOM () {
    // CREATION DES ELEMENTS A IMPORTER DANS L'ENCART flottant -- LES ELEMENTS NE SONT PAS ENCORE AJOUTES A LA PAGE
    // Création de l'élément boxprice -- pas encore rattaché au DOM
    const boxPrice = document.createElement('p')
    boxPrice.textContent = price + '€/jour'
    boxPrice.classList.add('boxprice')
    // VALIDATION DE L'OPERATION DU BOXPRICE
    return (boxPrice)
  }

  return { name, id, city, country, tagline, price, portrait, picture, getUserCardDOM, getPhotographInfoDOM, getBoxPriceDOM }
}
