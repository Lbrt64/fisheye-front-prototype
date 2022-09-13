// CREATION DE LA FACTORY, AJOUT DE DONNES EN "DATA", PAR EXEMPLE LE TABLEAU DES PHOTOGRAPHES
function photographerFactory(data) {

    // SETUP PREALABLE 
        // identification des data a extraire des tableaux passés en DATA
        const { name, id, city, country, tagline, price, portrait } = data;
        // construction d'une nouvelle data - le lien d'accès aux photos
        const picture = `assets/photographers/${portrait}`;

    // CREATION DES ARTICLES POUR LA PAGE D'ACCUEIL 
    function getUserCardDOM() {

        // CREATION DES ELEMENTS A IMPORTER DANS LA PAGE -- LES ELEMENTS NE SONT PAS ENCORE AJOUTES A LA PAGE
            // Création de l'élément article -- pas encore rattaché au DOM 
            const article = document.createElement( 'article' );
            article.setAttribute("id", id);
            article.setAttribute("onclick", "window.location='photographer.html?" + id + " ' ");

            // Création de l'élément qui contient la profile picture et les effets visuels
            const imgcontainer = document.createElement( 'div' );
            imgcontainer.classList.add("profile-picture-container");

                // Création de la profile picture
                const imgfront = document.createElement( 'img' );
                imgfront.setAttribute("src", picture);
                imgfront.classList.add("profile-picture-front");
                // Création du filtre blanc autour de l'image de fond
                const imgbackfilter = document.createElement ('div');
                imgbackfilter.classList.add("profile-picture-back-filter");
                // Création de l'image de fond
                const imgback = document.createElement( 'img' );
                imgback.setAttribute("src", picture);
                imgback.classList.add("profile-picture-background");
 
            // Création du titre contenant le nom du photographe
            const h2 = document.createElement( 'h2' );
            h2.textContent = name;

            // Création du paragraphe contenant la localisation du photographe
            const location = document.createElement ( 'p' );
            location.textContent = city + ', ' + country;
            location.classList.add("photographer_place");

            // Création du paragraphe contenant la tagline du photographe     
            const quote = document.createElement ( 'p' );
            quote.textContent = tagline;
            quote.classList.add("photographer_quote");

            // Création du paragraphe contenant le pricing du photographe
            const pricing = document.createElement ( 'p' );
            pricing.textContent = price + "€/jour";
            pricing.classList.add("photographer_price");

            // ORGANISATION DES ELEMENTS DE LA PHOTO AU SEIN DE LEUR CONTENEUR (front, filtre, back) -- ELEMENTS PAS AJOUTES A LA PAGE
            imgcontainer.appendChild(imgfront);
            imgcontainer.appendChild(imgbackfilter);
            imgcontainer.appendChild(imgback)

            // ORGANISATION DES ELEMENTS CREES AU SEIN DE L'ARTICLE -- ELEMENTS PAS AJOUTES A LA PAGE
            article.appendChild(imgcontainer);
            article.appendChild(h2);
            article.appendChild(location);
            article.appendChild(quote);
            article.appendChild(pricing);

            // VISUALISATION DE L'OBJET ARTICLE POUR CONTROLE
            console.log(article);

            // VALIDATION DE L'OPERATION DE CREATION D'UN ARTICLE 
            return (article);
    }



    return { name, id, city, country, tagline, price, portrait, picture, getUserCardDOM }
}
