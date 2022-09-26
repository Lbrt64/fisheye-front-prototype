function mediaFactory(data) {
  const {
    id,
    photographerID,
    title,
    image,
    video,
    likes,
    date,
    price
  } = data
  const picturePath = `assets/media/${image}`
  const videoPath = `assets/media/${video}`

  function defineMediaPreview() {
    if (image) {
      preview = document.createElement('img')
      preview.setAttribute('src', picturePath)
      preview.setAttribute('alt', title + ', vue rapprochée')
      preview.classList.add('image-preview')
      preview.setAttribute('tabindex', '0')
    } else {
      preview = document.createElement('video')
      preview.setAttribute('src', videoPath)
      preview.setAttribute('alt', title + ', vue rapprochée')
      preview.classList.add('image-preview')
      preview.setAttribute('tabindex', '0')
    }
  }
  const likesCount = likes.toString()

  function getMediaCardDOM() {
    const article = document.createElement('article')
    defineMediaPreview()
    const mediaInfo = document.createElement('div')
    mediaInfo.classList.add('media-info')
    const h2 = document.createElement('h2')
    h2.classList.add('cardTitles')
    h2.textContent = title
    const likesBoxLabel = document.createElement('div')
    likesBoxLabel.classList.add('likesBoxLabel')
    const likesCheckBox = document.createElement('p')
    likesCheckBox.classList.add('mediaLikes')
    likesCheckBox.textContent = likesCount
    const likesLikeButton = document.createElement('i')
    likesLikeButton.classList.add('fa-regular')
    likesLikeButton.classList.add('fa-heart')
    likesLikeButton.classList.add('heart-front')
    likesLikeButton.classList.add('likeUnchecked')
    likesLikeButton.setAttribute('aria-label', 'likes de ' + title)
    likesLikeButton.setAttribute('tabindex', '0')
    likesLikeButton.addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
        likesLikeButton.click()
      }
    })
    likesBoxLabel.appendChild(likesCheckBox)
    likesBoxLabel.appendChild(likesLikeButton)
    mediaInfo.appendChild(h2)
    mediaInfo.appendChild(likesBoxLabel)
    article.appendChild(preview)
    article.appendChild(mediaInfo)
    return (article)
  }
  return {
    id,
    photographerID,
    title,
    image,
    likes,
    date,
    price,
    getMediaCardDOM
  }
}
