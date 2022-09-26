const currentPhotographerID = parseInt(window.location.search.split('?').join(''))

async function getPhotographers() {
  const photographers = await fetch('data/photographers.json').then(photographers => photographers.json())
  return photographers
}

async function displayData(photographers) {
  const photographersHeader = document.querySelector('.photograph-header')

  photographers.forEach((photographer) => {
    if (photographer.id === currentPhotographerID) {
      const photographerModel = photographerFactory(photographer)
      const photographInfoDOM = photographerModel.getPhotographInfoDOM()
      photographersHeader.appendChild(photographInfoDOM)
    }
  })
};

const formTitle = document.querySelector('.form-title')

function updateFormHeader() {
  const photographerNameForm = document.querySelector('h1').innerText
  formTitle.innerHTML = 'Contactez-moi<br>' + photographerNameForm
}

async function getMedia() {
  const media = await fetch('data/media.json').then(media => media.json())
  return media
}

const mediaSection = document.querySelector('.media-section')

async function displayMedia(media) {
  media.forEach((media) => {
    if (media.photographerId === currentPhotographerID) {
      const mediaModel = mediaFactory(media)
      const mediaCardDOM = mediaModel.getMediaCardDOM()
      mediaSection.appendChild(mediaCardDOM)
    }
  })
};

async function init() {
  const {
    photographers
  } = await getPhotographers()
  displayData(photographers)
  displayBoxPrice(photographers)
  const {
    media
  } = await getMedia()
  displayMedia(media)
  updateFormHeader()
  setLikes()
  linkLightBoxToPreview()
};

init()

function resetMediaSection() {
  mediaSection.innerHTML = ''
  document.querySelector('.box-likes-price').innerHTML = ''
}

async function displayMediaByLikes(media) {
  media.sort(function (a, b) {
    return b.likes - a.likes
  })
  console.log(media[1].likes)
  console.log(media[40].likes)
  media.forEach((media) => {
    if (media.photographerId === currentPhotographerID) {
      const mediaModel = mediaFactory(media)
      const mediaCardDOM = mediaModel.getMediaCardDOM()
      mediaSection.appendChild(mediaCardDOM)
    }
  })
};

async function displayMediaByDate(media) {
  media.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date)
  })
  console.log(media[1].date)
  console.log(media[40].date)
  media.forEach((media) => {
    if (media.photographerId === currentPhotographerID) {
      const mediaModel = mediaFactory(media)
      const mediaCardDOM = mediaModel.getMediaCardDOM()
      mediaSection.appendChild(mediaCardDOM)
    }
  })
};

async function displayMediaByTitle(media) {
  media.sort(function (a, b) {
    return a.title.localeCompare(b.title)
  })
  media.forEach((media) => {
    if (media.photographerId === currentPhotographerID) {
      const mediaModel = mediaFactory(media)
      const mediaCardDOM = mediaModel.getMediaCardDOM()
      mediaSection.appendChild(mediaCardDOM)
    }
  })
};

async function sortByLikesSorting() {
  resetMediaSection()
  const {
    media
  } = await getMedia()
  displayMediaByLikes(media)
  linkLightBoxToPreview()
};

async function sortByDateSorting() {
  resetMediaSection()
  const {
    media
  } = await getMedia()
  displayMediaByDate(media)
  linkLightBoxToPreview()
};

async function sortByNameSorting() {
  resetMediaSection()
  const {
    media
  } = await getMedia()
  displayMediaByTitle(media)
  linkLightBoxToPreview()
};

async function sortByLikes() {
  resetMediaSection()
  sortByLikesSorting()
  const {
    photographers
  } = await getPhotographers()
  displayBoxPrice(photographers)
  setLikes()
}

async function sortByName() {
  resetMediaSection()
  sortByNameSorting()
  const {
    photographers
  } = await getPhotographers()
  displayBoxPrice(photographers)
  setLikes()
}

async function sortByDate() {
  resetMediaSection()
  sortByDateSorting()
  const {
    photographers
  } = await getPhotographers()
  displayBoxPrice(photographers)
  setLikes()
}
