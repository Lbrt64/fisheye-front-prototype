import { currentPhotographerID } from '../pages/photographer.js'
import { photographerFactory } from '../factories/photographerFactory.js'

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

export async function setLikes () {
  const allMediaLikes = document.querySelectorAll('.mediaLikes')
  let sumLikes = 0

  for (let i = 0; i < allMediaLikes.length; i++) {
    sumLikes += parseFloat(allMediaLikes[i].innerText)
  }
  const likesDisplay = document.createElement('p')
  likesDisplay.innerHTML = sumLikes + '<i class="fa-solid fa-heart totalLikesHeart">'
  likesDisplay.classList.add('boxlikes')
  boxlikesprice.appendChild(likesDisplay)

  const likesHearts = document.querySelectorAll('.heart-front')

  likesHearts.forEach((likesHeart, index) => {
    likesHeart.addEventListener('click', function () {
      if (likesHeart.classList.contains('fa-regular')) {
        likesHeart.classList.remove('fa-regular')
        likesHeart.classList.add('fa-solid')
        ++allMediaLikes[index].innerText
      } else {
        likesHeart.classList.remove('fa-solid')
        likesHeart.classList.add('fa-regular')
        --allMediaLikes[index].innerText
      }
      updateLikes()
    })
  })
};

function updateLikes () {
  const updatedMediaLikes = document.querySelectorAll('.mediaLikes')
  let updatedSumLikes = 0
  for (let i = 0; i < updatedMediaLikes.length; i++) {
    updatedSumLikes += parseFloat(updatedMediaLikes[i].innerText)
  }
  document.querySelector('.boxlikes').innerHTML = updatedSumLikes + '<i class="fa-solid fa-heart totalLikesHeart">'
}
