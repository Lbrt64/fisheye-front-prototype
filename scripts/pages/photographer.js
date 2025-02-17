// COLLECT DATA

// function to create DOM elements based on photographer data - used for photographers information at page top, used for photographer price
import { photographerFactory } from '../factories/photographerFactory.js'
// function to create DOM elements based on media data - used to create media preview cards
import { mediaFactory } from '../factories/mediaFactory.js'
// function to update lightbox content based on which preview is clicked
import { createLightBox } from '../utils/lightBox.js'
// functions to set and update total likes value
import { setLikes, displayBoxPrice } from '../utils/likes.js'
// get photographer ID from page URL, export for likes.js
import { sortByLikes } from '../utils/sortMenu.js'
// get photographer ID from page URL, export for likes.js
export const currentPhotographerID = parseInt(window.location.search.split('?').join(''))

// fetch data from photographers.json
export async function getPhotographers () {
  const photographers = await fetch('data/photographers.json').then(photographers => photographers.json())
  return photographers
}

// fetch data from media.json
export async function getMedia () {
  const media = await fetch('data/media.json').then(media => media.json())
  return media
}

// DEFINE PAGE CONTENT

// use the photographerFactory to create content of the photographer header
const photographersHeader = document.querySelector('.photograph-header')
async function displayData (photographers) {
  photographers.forEach((photographer) => {
    if (photographer.id === currentPhotographerID) {
      const photographerModel = photographerFactory(photographer)
      const photographInfoDOM = photographerModel.getPhotographInfoDOM()
      photographersHeader.appendChild(photographInfoDOM)
    }
  })
};

// define the contact form custom title based on photographer's name generated by photographerFactory
const formTitle = document.querySelector('.form-title')
function updateFormHeader () {
  const photographerNameForm = document.querySelector('.photographerName').innerText
  formTitle.innerHTML = 'Contactez-moi<br>' + photographerNameForm
}

// use the mediaFactory to create the media previews
export const mediaSection = document.querySelector('.media-section')
async function displayMedia (media) {
  media.forEach((media) => {
    if (media.photographerId === currentPhotographerID) {
      const mediaModel = mediaFactory(media)
      const mediaCardDOM = mediaModel.getMediaCardDOM()
      mediaSection.appendChild(mediaCardDOM)
    }
  })
};

// DEFINE WHAT WILL HAPPEN AT PAGE LAUNCH

// launch all required actions at page launch to generate and display data, async because waiting for data from fetch
async function init () {
  // create elements that use photograper data
  const {
    photographers
  } = await getPhotographers()
  displayData(photographers)
  displayBoxPrice(photographers)
  // create elements that use media data
  const {
    media
  } = await getMedia()
  displayMedia(media)
  updateFormHeader()
  setLikes()
  sortByLikes()
  createLightBox()
};

// PAGE LAUNCH

// start when page is launched to generate it
init()
