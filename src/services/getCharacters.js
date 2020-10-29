export default function getCharacters() {
  return fetch('https://rickandmortyapi.com/api/character')
    .then(res => res.json())
}
