

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
    const titles = document.querySelectorAll('.cardTitles');
    previews.forEach((preview, index) =>  {
        preview.addEventListener("click", function() {

            displayLightBox();
            
            const lightboxmedia = document.querySelector(".lightboxMedia");
            const mediaTitle = document.querySelector(".mediaTitle");
            lightboxmedia.src = previews[index].src;
            mediaTitle.textContent = titles[index].textContent;



            const rightbutton = document.querySelector("#navigateRight");
            rightbutton.addEventListener("click", function() {
                if (index === previews.length-1) {
                    lightboxmedia.src = previews[0].src;
                    mediaTitle.textContent = titles[0].textContent;
                    index = 0;
                } else {
                    lightboxmedia.src = previews[++index].src;
                    mediaTitle.textContent = titles[index].textContent;
                }
            });
            const leftbutton = document.querySelector("#navigateLeft");
            leftbutton.addEventListener("click", function() {
                if (index === 0) {
                    lightboxmedia.src = previews[previews.length-1].src;
                    mediaTitle.textContent = titles[titles.length-1].textContent;
                    index = previews.length-1;
                } else {
                    lightboxmedia.src = previews[--index].src;
                    mediaTitle.textContent = titles[index].textContent;
                }
            });
        });
    });
};