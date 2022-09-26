import { sortByLikes, sortByDate, sortByName } from '../pages/photographer.js'

document.getElementById('triMenu').addEventListener('change', function () {
  if (this.value === 'Date') {
    sortByDate()
  } else if (this.value === 'Popularité') {
    sortByLikes()
  } else if (this.value === 'Titre') {
    sortByName()
  }
})
