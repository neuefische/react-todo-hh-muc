export default function saveLocally(key, data) {
  localStorage.setItem(key, JSON.stringify(data))
}
