// COLLECT DATA

// reuse elements that were used to create the page at initialization
import { mediaSection, currentPhotographerID, getMedia, mediaFactory, getPhotographers } from '../pages/photographer.js'
// function to update lightbox content based on which preview is clicked
import { linkLightBoxToPreview } from '../utils/lightBox.js'
// functions to set and update total likes value
import { setLikes, displayBoxPrice } from '../utils/likes.js'

// SORTING MEDIA BY DATE

// to delete all existing media previews, called when using sort buttons
function resetMediaSection () {
  mediaSection.innerHTML = ''
  document.querySelector('.box-likes-price').innerHTML = ''
}

// to sort media by date
async function displayMediaByDate (media) {
  // sorting ALL media by date
  media.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date)
  })
  // creating media previews ONLY for media with the right photographer ID, using the mediaFactory
  media.forEach((media) => {
    if (media.photographerId === currentPhotographerID) {
      const mediaModel = mediaFactory(media)
      const mediaCardDOM = mediaModel.getMediaCardDOM()
      mediaSection.appendChild(mediaCardDOM)
    }
  })
};

// Combines the two previous functions to reset the media section and create new media previews. Also sets up the lightbox content when previews are clicked
async function sortByDateSorting () {
  resetMediaSection()
  const {
    media
  } = await getMedia()
  displayMediaByDate(media)
  // this function is imported, it is used to make previews open the right media in the lightbox when clicked, see lightbox.js for details
  linkLightBoxToPreview()
};

// Does the same as sortByDateSorting, but in addition updates photographer price and total likes data
export async function sortByDate () {
  resetMediaSection()
  sortByDateSorting()
  const {
    photographers
  } = await getPhotographers()
  // Creates the box with photographers prices and total likes, see likes.js for details
  displayBoxPrice(photographers)
  // Computes and updates the total number of likes, see likes.js for details
  setLikes()
}

// SORTING MEDIA BY LIKES
// WORKS EXACTLY THE SAME AS SORT BY DATE, SEE ABOVE

async function displayMediaByLikes (media) {
  media.sort(function (a, b) {
    return b.likes - a.likes
  })
  media.forEach((media) => {
    if (media.photographerId === currentPhotographerID) {
      const mediaModel = mediaFactory(media)
      const mediaCardDOM = mediaModel.getMediaCardDOM()
      mediaSection.appendChild(mediaCardDOM)
    }
  })
};

async function sortByLikesSorting () {
  resetMediaSection()
  const {
    media
  } = await getMedia()
  displayMediaByLikes(media)
  linkLightBoxToPreview()
};

export async function sortByLikes () {
  resetMediaSection()
  sortByLikesSorting()
  const {
    photographers
  } = await getPhotographers()
  displayBoxPrice(photographers)
  setLikes()
}

// SORTING MEDIA BY NAME
// WORKS EXACTLY THE SAME AS SORT BY DATE, SEE ABOVE

async function sortByNameSorting () {
  resetMediaSection()
  const {
    media
  } = await getMedia()
  displayMediaByTitle(media)
  linkLightBoxToPreview()
};

async function displayMediaByTitle (media) {
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

export async function sortByName () {
  resetMediaSection()
  sortByNameSorting()
  const {
    photographers
  } = await getPhotographers()
  displayBoxPrice(photographers)
  setLikes()
}

// TRIGGERING SORTS WITH SELECT MENU

// trigger one of the sort function if the value of triMenu select changes
document.getElementById('triMenu').addEventListener('change', function () {
  if (this.value === 'Date') {
    sortByDate()
  } else if (this.value === 'Popularité') {
    sortByLikes()
  } else if (this.value === 'Titre') {
    sortByName()
  }
})
