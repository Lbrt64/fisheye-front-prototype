// MEDIA FACTORY, used to create elements based on media data from media.json
export function mediaFactory (data) {
  // identify what data we extract
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
  // create media paths based on media data, used in getMediaCardDOM
  const picturePath = `assets/media/${image}`
  const videoPath = `assets/media/${video}`
  // transform likes data into a string
  const likesCount = likes.toString()

  // function to create media previews based on media data
  // it returns 'article'
  function getMediaCardDOM () {
    // GETMEDIACARDDOM - CREATE ELEMENTS
    // create the container article for the whole card
    const article = document.createElement('article')
    // create the container div for the media preview (image or video)
    const preview = document.createElement('div')
    // create the container for media info sur as title and likes
    const mediaInfo = document.createElement('div')
    mediaInfo.classList.add('media-info')
    // create media title
    const h2 = document.createElement('h2')
    h2.classList.add('cardTitles')
    h2.textContent = title
    // create container for likes label and clickable icon
    const likesBoxLabel = document.createElement('div')
    likesBoxLabel.classList.add('likesBoxLabel')
    // create text that displays like amounts for media
    const likesCheckBox = document.createElement('p')
    likesCheckBox.classList.add('mediaLikes')
    likesCheckBox.textContent = likesCount
    // create clickable icon to increment likes
    const likesLikeButton = document.createElement('i')
    likesLikeButton.classList.add('fa-regular')
    likesLikeButton.classList.add('fa-heart')
    likesLikeButton.classList.add('heart-front')
    likesLikeButton.classList.add('likeUnchecked')
    // ACCESSIBILITY - make the likes icon focusable with tab
    likesLikeButton.setAttribute('tabindex', '0')
    // ACCESSIBILITY - make icon clickable on pressing enter
    likesLikeButton.addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
        likesLikeButton.click()
      }
    })
    // GETMEDIACARDDOM - ORGANIZE ELEMENTS
    // check if the media is an image or a video, then creates preview and appends it to article
    article.appendChild(preview)
    // check if the data "image" exists for this media
    if (image !== undefined) {
      // create an image preview
      const imgPreview = document.createElement('img')
      imgPreview.setAttribute('src', picturePath)
      // ACCESSIBILITY - set the alt for media preview
      imgPreview.setAttribute('alt', title + ', vue rapprochée')
      imgPreview.classList.add('image-preview')
      // ACCESSIBILITY - make preview focusable with tab
      imgPreview.setAttribute('tabindex', '0')
      // append image preview to article
      preview.appendChild(imgPreview)
      // check if the data "video" exists for this media
    } else if (video !== undefined) {
      // create a video preview
      const videoPreview = document.createElement('video')
      videoPreview.setAttribute('src', videoPath)
      // ACCESSIBILITY - set the alt for media preview
      videoPreview.setAttribute('alt', title + ', vue rapprochée')
      videoPreview.classList.add('image-preview')
      // ACCESSIBILITY - make preview focusable with tab
      videoPreview.setAttribute('tabindex', '0')
      // ACCESSIBILITY - set subtitles for video
      videoPreview.innerHTML = '<track kind="subtitles" src="assets/subtitles.vtt" srclang="fr" />'
      // append video preview to article
      preview.appendChild(videoPreview)
    }
    // appends likes text and icon to their container
    likesBoxLabel.appendChild(likesCheckBox)
    likesBoxLabel.appendChild(likesLikeButton)
    // appends title information to mediaInfo
    mediaInfo.appendChild(h2)
    // appends like container to mediaInfo
    mediaInfo.appendChild(likesBoxLabel)
    // appends mediaInfo to the media article
    article.appendChild(mediaInfo)
    // return article so that it can be appended to the page by another function
    return (article)
  }
  // make elements extracted from JSON available to other functions
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
