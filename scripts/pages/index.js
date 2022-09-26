import { photographerFactory } from '../factories/photographerFactory.js'

// define function to extract data from photographers.json
async function getPhotographers () {
  const photographers = await fetch('data/photographers.json').then(photographers => photographers.json())
  return photographers
}

// use photographerFactory to create photographers cards with photographers data from previous step
async function displayData (photographers) {
  const photographersSection = document.querySelector('.photographer_section')

  photographers.forEach((photographer) => {
    // for each photographer from data, use the photographerFactory to plug data
    const photographerModel = photographerFactory(photographer)
    // for each for each photographer, create a UserCardDom with getUserCardDOM
    const userCardDOM = photographerModel.getUserCardDOM()
    // for each userCardDOM created, add it to the photographer section
    photographersSection.appendChild(userCardDOM)
  })
};

// launch all required actions at page launch to generate and display data
async function init () {
  // collect photographers data with getPhotographers
  const {
    photographers
  } = await getPhotographers()
  // display photographers data using what has been collected in previous line
  displayData(photographers)
};

// start when page is launched to generate it
init()
