
async function renderPokemons() {
    const ulTag = document.querySelector('.poke-ul')

 
    const pokeList = await pokeAPI()

   
    pokeList.results.forEach(pokemon => {
       
        const numPokedex = pokemon.url.slice(34, -1)

        ulTag.insertAdjacentHTML('beforeend', `
            <li class="poke-card">
                <img class="poke-icone" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numPokedex}.png" alt=${pokemon.name}>
                <strong class="poke-name">${pokemon.name}</strong>
            </li>
        `)
    })
}
renderPokemons()