function photographerFactory(data) {
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );

        const imgcontainer = document.createElement( 'div' );
        imgcontainer.classList.add("profile-picture-container");

        const imgfront = document.createElement( 'img' );
        imgfront.setAttribute("src", picture);
        imgfront.classList.add("profile-picture-front");

        const imgbackfilter = document.createElement ('div');
        imgbackfilter.classList.add("profile-picture-back-filter");

        const imgback = document.createElement( 'img' );
        imgback.setAttribute("src", picture);
        imgback.classList.add("profile-picture-background");

        const h2 = document.createElement( 'h2' );
        h2.textContent = name;

        const location = document.createElement ( 'p' );
        location.textContent = city + ', ' + country;
        location.classList.add("photographer_place");

        const quote = document.createElement ( 'p' );
        quote.textContent = tagline;
        quote.classList.add("photographer_quote");

        const pricing = document.createElement ( 'p' );
        pricing.textContent = price + "€/jour";
        pricing.classList.add("photographer_price");

        article.appendChild(imgcontainer);
        article.appendChild(h2);
        article.appendChild(location);
        article.appendChild(quote);
        article.appendChild(pricing);
        imgcontainer.appendChild(imgfront);
        imgcontainer.appendChild(imgbackfilter);
        imgcontainer.appendChild(imgback)

        return (article);
    }
    return { name, picture, getUserCardDOM }
}