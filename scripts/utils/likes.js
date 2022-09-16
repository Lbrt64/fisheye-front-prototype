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
    const allLikesLabels = document.querySelectorAll("article label")
    var sumLikes = 0;
    for (let i = 0; i < allLikesLabels.length; i++) {
        sumLikes += parseFloat(allLikesLabels[i].innerText);
    }
    const likesDisplay = document.createElement( 'p' );
    likesDisplay.textContent = sumLikes + " <3";
    likesDisplay.classList.add("boxlikes");
    boxlikesprice.appendChild(likesDisplay);
}

// const allLikesAreas = document.querySelectorAll(".likesInCardBox")
// const allLikeButtons = document.querySelectorAll(".heart-front")
// const allUnlikeButtons = document.querySelectorAll(".heart-back")

// allLikesAreas.forEach((likesArea, index) => {
//     likesArea.addEventListener("click", function() {
//         allLike

//     });

// });




// previews.forEach((preview, index) =>  {
//     preview.addEventListener("click", function() {

//         displayLightBox();
        
//         const lightboxMediaContainer = document.querySelector('.lightboxMediaContainer')
//         const mediaTitle = document.querySelector(".mediaTitle");

//         function generateLightBoxMedia() {

//             if(previews[index].src.includes("mp4")) {
//                 lightboxMediaContainer.innerHTML = `
//                     <video class="lightboxMedia" src="${previews[index].src}" type="video/mp4" controls>Erreur dans le chargement du media<video>
//                 `
//             } else {
//                 lightboxMediaContainer.innerHTML = `
//                     <img class="lightboxMedia" src="${previews[index].src}">
//                 `
//             }

//         }

//         function emptyLightBoxMedia() {
//             lightboxMediaContainer.innerHTML = "";
//         }

//         generateLightBoxMedia();

//         const lightboxmedia = document.querySelector(".lightboxMedia");
//         mediaTitle.textContent = titles[index].textContent;

//         const rightbutton = document.querySelector("#navigateRight");
//         rightbutton.addEventListener("click", function() {
//             if (index === previews.length-1) {
//                 lightboxmedia.src = previews[0].src;
//                 mediaTitle.textContent = titles[0].textContent;
//                 index = 0;
//             } else {
//                 lightboxmedia.src = previews[++index].src;
//                 mediaTitle.textContent = titles[index].textContent;
//             }
//             emptyLightBoxMedia()
//             generateLightBoxMedia();
//         });
//         const leftbutton = document.querySelector("#navigateLeft");
//         leftbutton.addEventListener("click", function() {
//             if (index === 0) {
//                 lightboxmedia.src = previews[previews.length-1].src;
//                 mediaTitle.textContent = titles[titles.length-1].textContent;
//                 index = previews.length-1;
//             } else {
//                 lightboxmedia.src = previews[--index].src;
//                 mediaTitle.textContent = titles[index].textContent;
//             }
//             emptyLightBoxMedia()
//             generateLightBoxMedia();
//         });
//     });
// });