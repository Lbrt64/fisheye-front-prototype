// CREATION DE LA FACTORY, AJOUT DE DONNES EN "DATA", PAR EXEMPLE LE TABLEAU DES PHOTOGRAPHES
function mediaFactory(data) {

    // SETUP PREALABLE 
        // identification des data a extraire des tableaux passés en DATA
        const { id, photographerID, title, image, likes, date, price } = data;
        // construction d'une nouvelle data - le lien d'accès aux photos
        const picturepath = `assets/media/${image}`;

    // CREATION DES ARTICLES POUR LA PAGE D'ACCUEIL 
    function getMediaCardDOM() {

        // CREATION DES ELEMENTS A IMPORTER DANS LA PAGE -- LES ELEMENTS NE SONT PAS ENCORE AJOUTES A LA PAGE
            // Création de l'élément article -- pas encore rattaché au DOM 
            const article = document.createElement( 'article' );

            // Création de la preview de l'image
            const imgPreview = document.createElement( 'img' );
            imgPreview.setAttribute("src", picturepath);
            imgPreview.classList.add("image-preview");

            const mediaInfo = document.createElement( 'div' );
            mediaInfo.classList.add("media-info")

                // Création du titre contenant le nom du photographe
                const h2 = document.createElement( 'h2' );
                h2.textContent = title;

                // Création du paragraphe contenant le pricing du photographe
                const likes = document.createElement ( 'p' );
                likes.textContent = likes + "<3";
                likes.classList.add("likes");

            // ORGANISATION DES ELEMENTS TEXTUELS AU SEIN DE LEUR CONTENEUR -- ELEMENTS PAS AJOUTES A LA PAGE
            mediaInfo.appendChild(h2);
            mediaInfo.appendChild(likes);

            // ORGANISATION DES ELEMENTS CREES AU SEIN DE L'ARTICLE -- ELEMENTS PAS AJOUTES A LA PAGE
            article.appendChild(imgPreview);
            article.appendChild(mediaInfo);

            // VISUALISATION DE L'OBJET ARTICLE POUR CONTROLE

            // VALIDATION DE L'OPERATION DE CREATION D'UN ARTICLE 
            return (article);
    }


    return { id, photographerID, title, image, likes, date, price, getMediaCardDOM }
}
