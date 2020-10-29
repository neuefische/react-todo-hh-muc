export default function loadLocally(key) {
  const jsonString = localStorage.getItem(key)
  return JSON.parse(jsonString)
}
