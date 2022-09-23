const mainwrapperForLightBox = document.querySelector('.main-wrapper')
const lightBoxClose = document.getElementById('lightBoxClose')
lightBoxClose.setAttribute('tabindex', '0')

function displayLightBox () {
  const lightbox = document.getElementById('lightBoxPhotographer')
  lightbox.style.display = 'block'
  mainwrapperForLightBox.setAttribute('aria-hidden', true)
  mainwrapperForLightBox.classList.add('no-scroll')
  lightbox.setAttribute('aria-hidden', false)
  lightBoxClose.focus()
}

function closeLightBox () {
  const lightbox = document.getElementById('lightBoxPhotographer')
  lightbox.style.display = 'none'
  mainwrapperForLightBox.setAttribute('aria-hidden', false)
  mainwrapperForLightBox.classList.remove('no-scroll')
  lightbox.setAttribute('aria-hidden', true)
}

// gestion de la lightbox

function linkLightBoxToPreview () {
  const previews = document.querySelectorAll('.image-preview')
  const titles = document.querySelectorAll('.cardTitles')
  previews.forEach((preview, index) => {
    preview.addEventListener('click', function () {
      displayLightBox()

      const lightboxMediaContainer = document.querySelector('.lightboxMediaContainer')
      const mediaTitle = document.querySelector('.mediaTitle')

      function generateLightBoxMedia () {
        if (previews[index].src.includes('mp4')) {
          lightboxMediaContainer.innerHTML = `
                        <video tabindex="0" class="lightboxMedia" src="${previews[index].src}" type="video/mp4" controls>Erreur dans le chargement du media<video>
                    `
        } else {
          lightboxMediaContainer.innerHTML = `
                        <img class="lightboxMedia" src="${previews[index].src}">
                    `
        }
      }

      function emptyLightBoxMedia () {
        lightboxMediaContainer.innerHTML = ''
      }

      generateLightBoxMedia()

      const lightboxmedia = document.querySelector('.lightboxMedia')
      mediaTitle.textContent = titles[index].textContent

      const rightbutton = document.querySelector('#navigateRight')
      rightbutton.setAttribute('tabindex', '0')

      function navigateRight () {
        if (index === previews.length - 1) {
          lightboxmedia.src = previews[0].src
          mediaTitle.textContent = titles[0].textContent
          index = 0
        } else {
          lightboxmedia.src = previews[++index].src
          mediaTitle.textContent = titles[index].textContent
        }
        emptyLightBoxMedia()
        generateLightBoxMedia()
      }

      rightbutton.addEventListener('click', navigateRight);

      const leftbutton = document.querySelector('#navigateLeft')
      leftbutton.setAttribute('tabindex', '0')

      function navigateLeft () {
        if (index === 0) {
          lightboxmedia.src = previews[previews.length - 1].src
          mediaTitle.textContent = titles[titles.length - 1].textContent
          index = previews.length - 1
        } else {
          lightboxmedia.src = previews[--index].src
          mediaTitle.textContent = titles[index].textContent
        }
        emptyLightBoxMedia()
        generateLightBoxMedia()
      }
      leftbutton.addEventListener('click', navigateLeft)
      // Close modal when escape key is pressed
      document.addEventListener('keydown', e => {
        console.log(e.key)
        const lightbox = document.getElementById('lightBoxPhotographer')
        if (lightbox.style.display === 'block' && e.key === 'Escape') {
          closeLightBox()
        } else if (lightbox.style.display === 'block' && e.key === 'ArrowLeft') {
          navigateLeft();
        } else if (lightbox.style.display === 'block' && e.key === 'ArrowRight') {
          navigateRight();
        }
      })
    })
  })
};
