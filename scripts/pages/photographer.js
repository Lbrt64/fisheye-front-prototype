// PARTIE 0 -- PREPARATION --------------------

// RECUPERE L'ID DU PHOTOGRAPHE DANS L'URL
const currentPhotographerID = window.location.search.split("?").join("");

// PARTIE 1 -- GESTION DE L'EN TETE --------------------


// DEFINIT L'IMPORT DES DONNES DU JSON PHOTOGRAPHERS AU SEIN DE LA VARIABLE PHOTOGRAPHERS
async function getPhotographers() {
    // Ajout des données du fichier "photographers.json" dans la constante photographers -- sous forme d'un tableau avec des objets
    const photographers = await fetch("data/photographers.json").then(photographers => photographers.json());
    // Vérificaiton de l'import du JSON 
    console.log(photographers);
    // Validation de l'opération d'import
    return photographers;
}

// DEFINIT L'AFFICHAGE DES DONNES DES PHOTOGRAPHES SUR LA PAGE PHOTOGRAPHE DANS LA SECTION DEDIEE
async function displayData(photographers) {

    // Identifie la section où les data seront ajoutées : PHOTOGRAPHER SECTION
    const photographersHeader = document.querySelector(".photograph-header");

    // Pour chaque ligne du tableau photographers
    photographers.forEach((photographer) => {
        // si l'ID du photographe est dans l'URL
        if (photographer.id == currentPhotographerID) {
            // Utilise la FACTORY pour créer les PHOTOGRAPHINFODOM des photographes à partir des données de PHOTOGRAPHER
            const photographerModel = photographerFactory(photographer);
            const photographInfoDOM = photographerModel.getPhotographInfoDOM();
            // Ajoute les PHOTOGRAPHINFODOM sur la section PHOTOGRAPHER SECTION
            photographersHeader.appendChild(photographInfoDOM);
        }
    });
};

// DEFINIT L'AFFICHAGE DES DONNES DE PRIX AU SEIN DE LA BOX FLOTTANTE

const boxlikesprice = document.querySelector(".box-likes-price");

async function displayBoxPrice(photographers) {
    photographers.forEach((photographer) => {
        // si l'ID du photographe est dans l'URL
        if (photographer.id == currentPhotographerID) {
            // Utilise la FACTORY pour créer les boxLikes des photographes à partir des données de PHOTOGRAPHER
            const photographerBoxPrice = photographerFactory(photographer);
            const boxPriceDOM = photographerBoxPrice.getBoxPriceDOM();
            // Ajoute les PHOTOGRAPHINFODOM sur la section PHOTOGRAPHER SECTION
            boxlikesprice.appendChild(boxPriceDOM);
            }
        });
};

// Calculer le total des likes sur la page
function sumLikes() {
        const allLikes = document.querySelectorAll(".likes")
        console.log(allLikes[2].innerHTML);
        var sumLikes = 0;
        for (let i = 0; i < allLikes.length; i++) {
            sumLikes += parseFloat(allLikes[i].innerHTML);
            console.log(sumLikes);
        }
        console.log(sumLikes);
        const likesDisplay = document.createElement( 'p' );
        likesDisplay.textContent = sumLikes + " <3";
        likesDisplay.classList.add("boxlikes");
        boxlikesprice.appendChild(likesDisplay);
    }
    
    // for (let i = 0; i < cars.length; i++) {
    //     text += cars[i] + "<br>";
    //   } 


// PARTIE 2 -- GESTION DES MEDIA --------------------

// DEFINIT L'IMPORT DES DONNES DU JSON MEDIA AU SEIN DE LA VARIABLE MEDIA
async function getMedia() {
    // Ajout des données du fichier "media.json" dans la constante media -- sous forme d'un tableau avec des objets
    const media = await fetch("data/media.json").then(media => media.json());
    // Vérificaiton de l'import du JSON 
    console.log(media);
    // Validation de l'opération d'import
    return media;
}

// DEFINIT L'AFFICHAGE DES DONNES DES MEDIA SUR LA PAGE D'ACCUEIL DANS LES CARTES
async function displayMedia(media) {

    // Identifie la section où les data seront ajoutées : PHOTOGRAPHER SECTION
    const mediaSection = document.querySelector(".media-section");

    // Pour chaque ligne du tableau photographers
    media.forEach((media) => {
        // si l'ID du media est dans l'URL
        if (media.photographerId == currentPhotographerID) {
            // Utilise la FACTORY pour créer les MEDIACARDDOM des MEDIA à partir des données de MEDIA
            const mediaModel = mediaFactory(media);
            const mediaCardDOM = mediaModel.getMediaCardDOM();
            // Ajoute les MEDIACARDDOM sur la section PHOTOGRAPHER SECTION
            mediaSection.appendChild(mediaCardDOM);
        }
    });
};


// PARTIE 3 -- EXECUTION ---------------------------

// DEFINIT CE QUI SE PASSE AU LANCEMENT DE LA PAGE
async function init() {
    // Lance la création du tableau photographers via ce que return GETPHOTOGRAPHERS 
    // et transforme le tableau en OBJET pour la fonction DISPLAYDATA
    const { photographers } = await getPhotographers();
    // Crée et affiche les cartes en se basant sur la factory et les data
    displayData(photographers);
    displayBoxPrice(photographers);

    const { media } = await getMedia();
    displayMedia(media);

    sumLikes();
};


// SE LANCE AU DEMARRAGE DE LA PAGE
init();





