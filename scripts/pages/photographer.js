

// DEFINIT L'IMPORT DES DONNES DU JSON PHOTOGRAPHERS AU SEIN DE LA VARIABLE PHOTOGRAPHERS
async function getPhotographers() {
    // Ajout des données du fichier "photographers.json" dans la constante photographers -- sous forme d'un tableau avec des objets
    const photographers = await fetch("data/photographers.json").then(photographers => photographers.json());
    // Vérificaiton de l'import du JSON 
    console.log(photographers);
    // Validation de l'opération d'import
    return photographers;
}

// DEFINIT L'AFFICHAGE DES DONNES DES PHOTOGRAPHES SUR LA PAGE D'ACCUEIL DANS LES CARTES
async function displayData(photographers) {
    // Identifie la section où les data seront ajoutées : PHOTOGRAPHER SECTION
    const photographersSection = document.querySelector(".photograph-header");

    // Pour chaque ligne du tableau photographers
    photographers.forEach((photographer) => {

        // Utilise la FACTORY pour créer les USERCARDDOM des photographes à partir des données de PHOTOGRAPHER
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        // Ajoute les USERCARDDOM sur la section PHOTOGRAPHER SECTION
        photographersSection.appendChild(userCardDOM);
    });
};

// DEFINIT CE QUI SE PASSE AU LANCEMENT DE LA PAGE
async function init() {
    // Lance la création du tableau photographers via ce que return GETPHOTOGRAPHERS 
    // et transforme le tableau en OBJET pour la fonction DISPLAYDATA
    const { photographers } = await getPhotographers();
    // Crée et affiche les cartes en se basant sur la factory et les data
    displayData(photographers);
};

// SE LANCE AU DEMARRAGE DE LA PAGE
init();
