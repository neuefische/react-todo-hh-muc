export default function getTodos() {
  return fetch('http://localhost:4000/todos')
    .then(res => res.json())
}
