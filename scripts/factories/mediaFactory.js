// CREATION DE LA FACTORY, AJOUT DE DONNES EN "DATA", PAR EXEMPLE LE TABLEAU DES PHOTOGRAPHES
function mediaFactory (data) {
  // SETUP PREALABLE
  // identification des data a extraire des tableaux passés en DATA
  const { id, photographerID, title, image, video, likes, date, price } = data
  // construction d'une nouvelle data - le lien d'accès aux photos
  const picturePath = `assets/media/${image}`
  // construction d'une nouvelle data - le lien d'accès aux videos
  const videoPath = `assets/media/${video}`
  // fonction pour la création du media preview en fonctoin du type;
  function defineMediaPreview () {
    if (image) {
      preview = document.createElement('img')
      preview.setAttribute('src', picturePath)
      preview.setAttribute('alt', title)
      preview.classList.add('image-preview')
    } else {
      preview = document.createElement('video')
      preview.setAttribute('src', videoPath)
      preview.setAttribute('alt', title)
      preview.classList.add('image-preview')
    }
  }
  // rendre les likes visibles
  const likesCount = likes.toString()

  // CREATION DES ARTICLES POUR LA PAGE D'ACCUEIL
  function getMediaCardDOM () {
    // CREATION DES ELEMENTS A IMPORTER DANS LA PAGE -- LES ELEMENTS NE SONT PAS ENCORE AJOUTES A LA PAGE
    // Création de l'élément article -- pas encore rattaché au DOM
    const article = document.createElement('article')

    // Création de la preview de l'image
    defineMediaPreview()

    const mediaInfo = document.createElement('div')
    mediaInfo.classList.add('media-info')

    // Création du titre contenant le nom du photographe
    const h2 = document.createElement('h2')
    h2.classList.add('cardTitles')
    h2.textContent = title

    // Nombre de likes du media
    const likesBoxLabel = document.createElement('div')
    likesBoxLabel.classList.add('likesBoxLabel')

    // const likes = document.createElement('p');
    // likes.textContent = likesCount;
    // likes.classList.add("likes");
    const likesCheckBox = document.createElement('p')
    likesCheckBox.classList.add('mediaLikes')
    likesCheckBox.textContent = likesCount

    const likesLikeButton = document.createElement('i')
    likesLikeButton.classList.add('fa-regular')
    likesLikeButton.classList.add('fa-heart')
    likesLikeButton.classList.add('heart-front')
    likesLikeButton.classList.add('likeUnchecked')

    // ORGANISATION DES ELEMENTS AU SEIN DE LA PARTIE LIKES -- ELEMENTS PAS AJOUTES A LA PAGE
    // likesBox.appendChild(likes);
    likesBoxLabel.appendChild(likesCheckBox)
    likesBoxLabel.appendChild(likesLikeButton)

    // ORGANISATION DES ELEMENTS TEXTUELS AU SEIN DE LEUR CONTENEUR -- ELEMENTS PAS AJOUTES A LA PAGE
    mediaInfo.appendChild(h2)
    mediaInfo.appendChild(likesBoxLabel)

    // ORGANISATION DES ELEMENTS CREES AU SEIN DE L'ARTICLE -- ELEMENTS PAS AJOUTES A LA PAGE
    article.appendChild(preview)
    article.appendChild(mediaInfo)

    // VISUALISATION DE L'OBJET ARTICLE POUR CONTROLE

    // VALIDATION DE L'OPERATION DE CREATION D'UN ARTICLE
    return (article)
  }

  return { id, photographerID, title, image, likes, date, price, getMediaCardDOM }
}
