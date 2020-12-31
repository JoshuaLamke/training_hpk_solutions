let form = document.getElementById('blog-form')
let conatiner = document.getElementById('blog-posts')
let titleText = document.getElementById('title-text')
let bodyText = document.getElementById('body-text')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    if(document.getElementById('title-text').value === '' || document.getElementById('body-text').value === '') {
        alert('Please input a title and body for your post.')
        return
    }
    let postContainer = document.createElement('div')
    postContainer.className = 'col-12 d-flex flex-column align-items-center mt-3 pt-3 blog-post'

    let titleContainer = document.createElement('div')
    titleContainer.className = 'title-container text-wrap text-break'


    let bodyContainer = document.createElement('div')
    bodyContainer.className = 'body-container text-wrap text-break'


    let titleMessage = document.createElement('h3')

    let bodyMessage = document.createElement('p')

    bodyContainer.appendChild(bodyMessage)
    titleContainer.appendChild(titleMessage)
    postContainer.appendChild(titleContainer)
    postContainer.appendChild(document.createElement('hr'))
    postContainer.appendChild(bodyContainer)

    titleMessage.textContent = titleText.value
    bodyMessage.textContent = bodyText.value

    conatiner.appendChild(postContainer)
    
    titleText.value = ''
    bodyText.value = ''
})