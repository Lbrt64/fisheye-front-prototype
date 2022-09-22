// PARTIE 0 -- PREPARATION --------------------

// RECUPERE L'ID DU PHOTOGRAPHE DANS L'URL
const currentPhotographerID = window.location.search.split('?').join('')

// PARTIE 1 -- GESTION DE L'EN TETE --------------------

// DEFINIT L'IMPORT DES DONNES DU JSON PHOTOGRAPHERS AU SEIN DE LA VARIABLE PHOTOGRAPHERS
async function getPhotographers () {
  // Ajout des données du fichier "photographers.json" dans la constante photographers -- sous forme d'un tableau avec des objets
  const photographers = await fetch('data/photographers.json').then(photographers => photographers.json())
  // Validation de l'opération d'import
  return photographers
}

// DEFINIT L'AFFICHAGE DES DONNES DES PHOTOGRAPHES SUR LA PAGE PHOTOGRAPHE DANS LA SECTION DEDIEE
async function displayData (photographers) {
  // Identifie la section où les data seront ajoutées : PHOTOGRAPHER SECTION
  const photographersHeader = document.querySelector('.photograph-header')

  // Pour chaque ligne du tableau photographers
  photographers.forEach((photographer) => {
    // si l'ID du photographe est dans l'URLs
    if (photographer.id == currentPhotographerID) {
      // Utilise la FACTORY pour créer les PHOTOGRAPHINFODOM des photographes à partir des données de PHOTOGRAPHER
      const photographerModel = photographerFactory(photographer)
      const photographInfoDOM = photographerModel.getPhotographInfoDOM()
      // Ajoute les PHOTOGRAPHINFODOM sur la section PHOTOGRAPHER SECTION
      photographersHeader.appendChild(photographInfoDOM)
    }
  })
};

// Récupérer le nom du photographe pour la modale
const formTitle = document.querySelector('.form-title')

function updateFormHeader () {
  const photographerNameForm = document.querySelector('h1').innerText
  formTitle.innerHTML = 'Contactez-moi<br>' + photographerNameForm
}

// PARTIE 2 -- GESTION DES MEDIA --------------------

// DEFINIT L'IMPORT DES DONNES DU JSON MEDIA AU SEIN DE LA VARIABLE MEDIA
async function getMedia () {
  // Ajout des données du fichier "media.json" dans la constante media -- sous forme d'un tableau avec des objets
  const media = await fetch('data/media.json').then(media => media.json())
  // Vérificaiton de l'import du JSON
  // Validation de l'opération d'import
  return media
}

// DEFINIT L'AFFICHAGE DES DONNES DES MEDIA SUR LA PAGE D'ACCUEIL DANS LES CARTES
const mediaSection = document.querySelector('.media-section')

async function displayMedia (media) {
  // Identifie la section où les data seront ajoutées : PHOTOGRAPHER SECTION

  // Pour chaque ligne du tableau photographers
  media.forEach((media) => {
    // si l'ID du media est dans l'URL
    if (media.photographerId == currentPhotographerID) {
      // Utilise la FACTORY pour créer les MEDIACARDDOM des MEDIA à partir des données de MEDIA
      const mediaModel = mediaFactory(media)
      const mediaCardDOM = mediaModel.getMediaCardDOM()
      // Ajoute les MEDIACARDDOM sur la section PHOTOGRAPHER SECTION
      mediaSection.appendChild(mediaCardDOM)
    }
  })
};

// PARTIE 3 -- EXECUTION ---------------------------

// DEFINIT CE QUI SE PASSE AU LANCEMENT DE LA PAGE
async function init () {
  const { photographers } = await getPhotographers()
  displayData(photographers)
  displayBoxPrice(photographers)
  const { media } = await getMedia()
  displayMedia(media)
  updateFormHeader()
  setLikes()
  linkLightBoxToPreview()
};

// SE LANCE AU DEMARRAGE DE LA PAGE
init()

function resetMediaSection () {
  mediaSection.innerHTML = ''
  document.querySelector('.box-likes-price').innerHTML = ''
}

async function displayMediaByLikes (media) {
  // Identifie la section où les data seront ajoutées : PHOTOGRAPHER SECTION
  media.sort(function (a, b) {
    return b.likes - a.likes
  })
  console.log(media[1].likes)
  console.log(media[40].likes)
  // Pour chaque ligne du tableau photographers
  media.forEach((media) => {
    // si l'ID du media est dans l'URL
    if (media.photographerId == currentPhotographerID) {
      // Utilise la FACTORY pour créer les MEDIACARDDOM des MEDIA à partir des données de MEDIA
      const mediaModel = mediaFactory(media)
      const mediaCardDOM = mediaModel.getMediaCardDOM()
      // Ajoute les MEDIACARDDOM sur la section PHOTOGRAPHER SECTION
      mediaSection.appendChild(mediaCardDOM)
    }
  })
};

async function displayMediaByDate (media) {
  // Identifie la section où les data seront ajoutées : PHOTOGRAPHER SECTION
  media.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date)
  })
  console.log(media[1].date)
  console.log(media[40].date)
  // Pour chaque ligne du tableau photographers
  media.forEach((media) => {
    // si l'ID du media est dans l'URL
    if (media.photographerId == currentPhotographerID) {
      // Utilise la FACTORY pour créer les MEDIACARDDOM des MEDIA à partir des données de MEDIA
      const mediaModel = mediaFactory(media)
      const mediaCardDOM = mediaModel.getMediaCardDOM()
      // Ajoute les MEDIACARDDOM sur la section PHOTOGRAPHER SECTION
      mediaSection.appendChild(mediaCardDOM)
    }
  })
};

async function displayMediaByTitle (media) {
  // Identifie la section où les data seront ajoutées : PHOTOGRAPHER SECTION
  media.sort(function (a, b) {
    return a.title.localeCompare(b.title)
  })
  console.log(media[1].title)
  console.log(media[40].title)
  // Pour chaque ligne du tableau photographers
  media.forEach((media) => {
    // si l'ID du media est dans l'URL
    if (media.photographerId == currentPhotographerID) {
      // Utilise la FACTORY pour créer les MEDIACARDDOM des MEDIA à partir des données de MEDIA
      const mediaModel = mediaFactory(media)
      const mediaCardDOM = mediaModel.getMediaCardDOM()
      // Ajoute les MEDIACARDDOM sur la section PHOTOGRAPHER SECTION
      mediaSection.appendChild(mediaCardDOM)
    }
  })
};

async function sortByLikesSorting () {
  resetMediaSection()
  const { media } = await getMedia()
  displayMediaByLikes(media)
  linkLightBoxToPreview()
};

async function sortByDateSorting () {
  resetMediaSection()
  const { media } = await getMedia()
  displayMediaByDate(media)
  linkLightBoxToPreview()
};

async function sortByNameSorting () {
  resetMediaSection()
  const { media } = await getMedia()
  displayMediaByTitle(media)
  linkLightBoxToPreview()
};

async function sortByLikes () {
  resetMediaSection()
  sortByLikesSorting()
  const { photographers } = await getPhotographers()
  displayBoxPrice(photographers)
  setLikes()
  closeSortMenu()
}

async function sortByName () {
  resetMediaSection()
  sortByNameSorting()
  const { photographers } = await getPhotographers()
  displayBoxPrice(photographers)
  setLikes()
  closeSortMenu()
}

async function sortByDate () {
  resetMediaSection()
  sortByDateSorting()
  const { photographers } = await getPhotographers()
  displayBoxPrice(photographers)
  setLikes()
  closeSortMenu()
}
