

function displayLightBox() {
    const lightbox = document.getElementById("lightBoxPhotographer");
	lightbox.style.display = "block";
}

function closeLightBox() {
    const lightbox = document.getElementById("lightBoxPhotographer");
    lightbox.style.display = "none";
}

// gestion de la lightbox

function linkLightBoxToPreview() {
    const previews = document.querySelectorAll('.image-preview')
    previews.forEach((preview, index) =>  {
        preview.addEventListener("click", function() {
            const lightboxmedia = document.querySelector(".lightboxMedia");
            lightboxmedia.src = previews[index].src;

            const lightbox = document.getElementById("lightBoxPhotographer");
            lightbox.style.display = "block";


            const rightbutton = document.querySelector("#navigateRight");
            rightbutton.addEventListener("click", function() {
                if (index === previews.length-1) {
                    lightboxmedia.src = previews[0].src;
                    index = 0;
                } else {
                    lightboxmedia.src = previews[++index].src;
                }
            });


            const leftbutton = document.querySelector("#navigateLeft");
            leftbutton.addEventListener("click", function() {
                if (index === 0) {
                    lightboxmedia.src = previews[previews.length-1].src;
                    index = previews.length-1;
                } else {
                lightboxmedia.src = previews[--index].src;
                }
            });
        });
    });
};