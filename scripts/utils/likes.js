// DEFINIT L'AFFICHAGE DES DONNES DE PRIX AU SEIN DE LA BOX FLOTTANTE

const boxlikesprice = document.querySelector('.box-likes-price')

function displayBoxPrice (photographers) {
  photographers.forEach((photographer) => {
    // si l'ID du photographe est dans l'URL
    if (photographer.id === currentPhotographerID) {
      // Utilise la FACTORY pour créer les boxLikes des photographes à partir des données de PHOTOGRAPHER
      const photographerBoxPrice = photographerFactory(photographer)
      const boxPriceDOM = photographerBoxPrice.getBoxPriceDOM()
      // Ajoute les PHOTOGRAPHINFODOM sur la section PHOTOGRAPHER SECTION
      boxlikesprice.appendChild(boxPriceDOM)
    }
  })
};

// Calculer le total des likes sur la page
async function setLikes () {
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
  console.log(updatedSumLikes)
  document.querySelector('.boxlikes').innerHTML = updatedSumLikes + '<i class="fa-solid fa-heart totalLikesHeart">'
}
