 // Armazenando a URL base da API de pokemons
 const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

 // Função para obter a lista de pokemons
 async function getPokemons() {
   // Fazendo a requisição para a API
   const response = await fetch(`${API_URL}?limit=151`);
   const data = await response.json();

   // Obtendo a lista de pokemons
   const pokemons = data.results;

   // Criando a lista de pokemons no HTML
   const pokemonsList = document.getElementById('pokemons-list');
   pokemons.forEach(async (pokemon) => {
     // Fazendo uma nova requisição para obter os detalhes do pokemon
     const res = await fetch(pokemon.url);
     const pokeData = await res.json();

     // Criando um elemento <li> para cada pokemon
     const pokemonItem = document.createElement('li');

     //Criando uma tag <img> para a imagem do pokemon
     const pokemonImg = document.createElement('img');
     pokemonImg.src = pokeData.sprites.front_default;
     pokemonImg.alt = pokemon.name;

     // Adicionando o nome do pokemon e a imagem ao elemento <li>
     pokemonItem.appendChild(document.createTextNode(pokemon.name));
     pokemonItem.appendChild(pokemonImg);

     // Adicionando o elemento <li> à lista de pokemons no HTML
     pokemonsList.appendChild(pokemonItem);
   });
 }

 // Chamando a função para obter a lista de pokemons