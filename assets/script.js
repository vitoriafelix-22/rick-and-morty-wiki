const API_URL = "https://rickandmortyapi.com/api/character";

const container = document.getElementById("main-container");

fetch(API_URL)
.then(resp => resp.json())
.then(resp => {
    resp.results.map(personagem => {
        container.innerHTML += `
        <div class="personagem-card">
            <img src="${personagem.image}" alt="personagem"/>
            <p class="text">${personagem.name}</p>
            <p class="text">${personagem.origin.name}</p>
        </div>
    `
    })
    
})