// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(data => {
    // const cardKeys = Object.keys(data.data.articles)
    // console.log(cardKeys)
    // const dataArticles = []
    // cardKeys.forEach((n) => {
    //     a = `data.data.articles.${n}`
    //     dataArticles.push(a)
    // })
    // console.log(dataArticles)
    // dataArticles.forEach((n) => {
    //     cardsContainer.appendChild(cards(n)) 
    // })
    const javascriptCards = data.data.articles.javascript
    javascriptCards.forEach((n) => {
        cardsContainer.appendChild(cards(n)) 
    })

    const bootstrapCards = data.data.articles.bootstrap
    console.log('bootstrap test cards', bootstrapCards)
    bootstrapCards.forEach((n) => {
        cardsContainer.appendChild(cards(n)) 
    })

    const technologyCards = data.data.articles.technology
    technologyCards.forEach((n) => {
        cardsContainer.appendChild(cards(n)) 
    })

    const jqueryCards = data.data.articles.jquery
    jqueryCards.forEach((n) => {
        cardsContainer.appendChild(cards(n)) 
    })

    const nodeCards = data.data.articles.node
    nodeCards.forEach((n) => {
        cardsContainer.appendChild(cards(n)) 
    })

    console.log('cards component working', data.data.articles)
})
.catch(error => {
    console.log('cards component not pulling from axios', error)
})

function cards (object) {

    const card = document.createElement('div')
    const headLine = document.createElement('div')
    const authorContainer = document. createElement('div')
    const imgContainer = document.createElement('div')
    const img = document.createElement('img')
    const author = document.createElement('span')

    card.classList.add('card')
    headLine.classList.add('headline')
    authorContainer.classList.add('author')
    imgContainer.classList.add('img-container')

    card.appendChild(headLine)
    card.appendChild(authorContainer)
    authorContainer.appendChild(imgContainer)
    imgContainer.appendChild(img)
    authorContainer.appendChild(author)

    headLine.textContent = object.headline
    img.src = object.authorPhoto
    author.textContent = object.authorName

    return card
}