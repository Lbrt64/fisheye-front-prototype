// COLLECT DATA

// function to create DOM elements based on photographer data - used for photographers article cards
import { photographerFactory } from '../factories/photographerFactory.js'

// define function to fetch data from photographers.json
async function getPhotographers () {
  const photographers = await fetch('data/photographers.json').then(photographers => photographers.json())
  return photographers
}

// DEFINE PAGE CONTENT

// use photographerFactory to create photographers cards with photographers data from previous step
async function displayData (photographers) {
  const photographersSection = document.querySelector('.photographer_section')

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer)
    const userCardDOM = photographerModel.getUserCardDOM()
    photographersSection.appendChild(userCardDOM)
  })
};

// DEFINE WHAT WILL HAPPEN AT PAGE LAUNCH

// launch all required actions at page launch to generate and display data, async because waiting for data from fetch
async function init () {
  // collect photographers data with getPhotographers
  const {
    photographers
  } = await getPhotographers()
  // display photographers data using what has been collected in previous line
  displayData(photographers)
};

// PAGE LAUNCH

// start when page is launched to generate it
init()
