
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

const searchButton = document.querySelector('.search-bt');
const searchInput = document.querySelector('.search-input');

searchButton.addEventListener('click', async () => {
    const ulTag = document.querySelector('.poke-ul')
    ulTag.innerHTML = ''

    const loading = document.querySelector('#loading')
    loading.classList.remove('hidden');

    const searchItem = searchInput.value
    const itemTreated = searchItem.toLowerCase()


    const pokeList = await pokeAPI()

   const pokeSearch = {...pokeList.results.find(pokemon => pokemon.name == itemTreated)}
  
    const numPokedex = pokeSearch.url.slice(34, -1)

    console.log(numPokedex);
 
   ulTag.insertAdjacentHTML('afterbegin', `
            <li class="poke-card">
                <img class="poke-icone" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numPokedex}.png" alt=${pokeSearch.name}>
                <strong class="poke-name">${pokeSearch.name}</strong>
            </li>
        `)
    
});

