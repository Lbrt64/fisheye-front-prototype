export function mediaFactory (data) {
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
  const likesCount = likes.toString()
  function getMediaCardDOM () {
    const article = document.createElement('article')
    const preview = document.createElement('div')
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
    if (image !== undefined) {
      const imgPreview = document.createElement('img')
      imgPreview.setAttribute('src', picturePath)
      imgPreview.setAttribute('alt', title + ', vue rapprochée')
      imgPreview.classList.add('image-preview')
      imgPreview.setAttribute('tabindex', '0')
      preview.appendChild(imgPreview)
    } else if (video !== undefined) {
      const videoPreview = document.createElement('video')
      videoPreview.setAttribute('src', videoPath)
      videoPreview.setAttribute('alt', title + ', vue rapprochée')
      videoPreview.classList.add('image-preview')
      videoPreview.setAttribute('tabindex', '0')
      preview.appendChild(videoPreview)
    }
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
