async function pokeAPI() {
  
    const loading = document.querySelector('#loading')

 
    const pokemonsDaAPI = await fetch('https://pokeapi.co/api/v2/pokemon')
      .then(
        response => response.json()
      )
      .catch(
 
        error => console.log(error)
      )

    loading.classList.add('hidden')

  
    return pokemonsDaAPI
}
console.log(pokeAPI())

