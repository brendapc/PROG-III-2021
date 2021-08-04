function createItem(destiny, src, mainDiv){
    const card = document.createElement('div')
    const title = document.createElement('h2')
    const img = document.createElement('img')
    
    img.src = src
    title.textContent = destiny.loc_chegada.replace('-', " ")
    card.appendChild(title)
    card.appendChild(img)
    card.classList.add("card")
    mainDiv.appendChild(card)
}

(function (){
   const fakeData = [
        {
            loc_chegada: "berlim"
        },
        {
            loc_chegada: "amsterda"
        },
        {
            loc_chegada: "nova-iorque"
        },
        {
            loc_chegada: "russia"
        }
    ]
    const mainDiv = document.querySelector('.main-content')
    fakeData.forEach((destiny)=>{
        const src = `./assets/${destiny.loc_chegada}.jpg`
        createItem(destiny, src, mainDiv)
    })
})();

(function (){
    fetch('http://localhost:8989/tickets/destinations')
    .then((response) => {
        return response.json()
    })
    .then((result) => {
        const mainDiv = document.querySelector('.main-content')
        mainDiv.innerHTML = ' '
        result.forEach((destiny)=>{
            const src = `./assets/${destiny.loc_chegada}.jpg`
            createItem(destiny, src, mainDiv)
        })
    })
})();