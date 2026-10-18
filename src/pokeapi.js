
const API_URL = 'https://pokeapi.co/api/v2';

export async function getPokemonList() {
  const response = await fetch(
    `${API_URL}/pokemon?limit=151&offset=0`
  );

  if (!response.ok) {
    throw new Error('No se pudo obtener la lista de Pokémon.');
  }

  const data = await response.json();

  return data.results;
}

export async function getPokemonDetails(name) {
  const response = await fetch(
    `${API_URL}/pokemon/${encodeURIComponent(name.toLowerCase())}`
  );

  if (!response.ok) {
    throw new Error('No se pudieron obtener los datos del Pokémon.');
  }

  const pokemon = await response.json();

  return {
    id: pokemon.id,
    name: pokemon.name,
    image:
      pokemon.sprites.other['official-artwork'].front_default
      ?? pokemon.sprites.front_default
  };
}
