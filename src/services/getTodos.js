export default function getTodos() {
  return fetch('/todos')
    .then(res => res.json())
}
