let paragraph = document.getElementById('app-explanation')
let title = document.getElementById('app-title')
$(document).ready(() => {
    $('#projects-carousel').carousel({
        interval: 5000
      })
    $('#projects-carousel').on('slide.bs.carousel', function (event) {
        if(event.to === 0) {
            title.textContent = 'Weather App'
            paragraph.textContent = '\t This app allows you to input an address and find the weather at that address.' +
            ' It does this by sending the location to a location API to get the longitude and latitude, and then it sends' +
            ' those coordinates into a weather API to get the weather. Made using Node, Javascript, HTML, and CSS.'
        }
        if(event.to === 1) {
            title.textContent = 'Notes App'
            paragraph.textContent =  "\t This app allows you to take notes. You can create, edit, and delete your notes. Also, each" + 
            " note can be filtered by last edited, recently created, or alphabetically. You can search for" + 
            " notes by the title of the note. Creating using Javascript, HTML, and CSS."
        }
        if(event.to === 2) {
            title.textContent = 'Todo App'
            paragraph.textContent =  "\t This app allows keep track of your todos. It allows you to filter the todos by whether"+
            " they are completed or not. It also allows you to search for a specific todo by the contents" + 
            " of the todo. Todos are saved to local storage on the browser. Made using Javascript, HTML, and CSS."
        }
        if(event.to === 3) {
            title.textContent = 'Hangman App'
            paragraph.textContent =  "\t This app allows you to play a classic game of hangman. It allows you to press a the letter on" +
            " your keyboard that you would like to guess and if the letter is correct, then part of the puzzle is revealed." +
            " Not mobile friendly." +
            " Phrases for the game are randomly fetched from a random phrase API at the start of each game." +
            " Created using Javascript, HTML, and CSS." 
        }
      })
})