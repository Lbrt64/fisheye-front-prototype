// GET DATA

// import functions from other files
import { currentPhotographerID } from '../pages/photographer.js'
import { photographerFactory } from '../factories/photographerFactory.js'

// use the photographerFactory to create content of the likes price box
const boxlikesprice = document.querySelector('.box-likes-price')
export function displayBoxPrice (photographers) {
  photographers.forEach((photographer) => {
    if (photographer.id === currentPhotographerID) {
      const photographerBoxPrice = photographerFactory(photographer)
      const boxPriceDOM = photographerBoxPrice.getBoxPriceDOM()
      boxlikesprice.appendChild(boxPriceDOM)
    }
  })
};

// SETUP THE LIKES SYSTEM
export async function setLikes () {
  // select all media likes that have already been filtered for this photograph
  const allMediaLikes = document.querySelectorAll('.mediaLikes')
  let sumLikes = 0
  // make this operation for all mediaLikes on the page
  for (let i = 0; i < allMediaLikes.length; i++) {
    // convert likes text into float and add it to sumLikes
    sumLikes += parseFloat(allMediaLikes[i].innerText)
  }
  const likesDisplay = document.createElement('p')
  // show sumLikes + the heart icon next to it
  likesDisplay.innerHTML = sumLikes + '<i class="fa-solid fa-heart totalLikesHeart">'
  likesDisplay.classList.add('boxlikes')
  // add likesDisplay to boxlikesprice
  boxlikesprice.appendChild(likesDisplay)

  // select all like icons on the page
  const likesHearts = document.querySelectorAll('.heart-front')
  // for all like icons on the page, setup the like increment + aspect change
  likesHearts.forEach((likesHeart, index) => {
    likesHeart.addEventListener('click', function () {
      // if the like is unclicked, clicking it makes it dark and add 1 to the total of medialikes
      if (likesHeart.classList.contains('fa-regular')) {
        likesHeart.classList.remove('fa-regular')
        likesHeart.classList.add('fa-solid')
        ++allMediaLikes[index].innerText
        // if the like is clicked, clicking it makes it empty and remove 1 to the total of medialikes
      } else {
        likesHeart.classList.remove('fa-solid')
        likesHeart.classList.add('fa-regular')
        --allMediaLikes[index].innerText
      }
      // Replaces the total likes count with the updated value, see details below
      updateLikes()
    })
  })
};

// function to update the original likes number
function updateLikes () {
  const updatedMediaLikes = document.querySelectorAll('.mediaLikes')
  // create updatedSumLikes to replace the content of boxlikes
  let updatedSumLikes = 0
  for (let i = 0; i < updatedMediaLikes.length; i++) {
    // same way of working as sumLikes, see above
    updatedSumLikes += parseFloat(updatedMediaLikes[i].innerText)
  }
  // replace the content of the likes box with the updated amount
  document.querySelector('.boxlikes').innerHTML = updatedSumLikes + '<i class="fa-solid fa-heart totalLikesHeart">'
}
