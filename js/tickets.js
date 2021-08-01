(function (){
    fetch('http://localhost:8989/tickets/destinations')
    .then((response) => {
        return response.json()
    })
    .then((result) => {
        result.forEach((destiny)=>{
            createItem(destiny)
        })
    })
    .catch(() => {createWarning()})
})()

function createItem(destiny){
    const mainDiv = document.querySelector('.main-content')
    const card = document.createElement('div')
    const title = document.createElement('h2')
    const img = document.createElement('img')
    
    img.src = `./assets/${destiny.loc_chegada}.jpg`
    title.textContent = destiny.loc_chegada.replace('-', " ")
    card.appendChild(title)
    card.appendChild(img)
    card.classList.add("card")
    mainDiv.appendChild(card)
}

function createWarning(){
    const mainDiv = document.querySelector('.main-content')
    const card = document.createElement('div')
    const title = document.createElement('h2')
    
    title.textContent = "É preciso iniciar o backend"
    title.classList.add('fail-message')
    card.appendChild(title)
    //card.classList.add("card")
    mainDiv.appendChild(card)
}