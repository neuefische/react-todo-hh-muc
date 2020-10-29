export default function loadLocally(key) {
  const jsonString = localStorage.getItem(key)
  try {
    return JSON.parse(jsonString)
  } catch (error) {
    console.log('localStorage data was bad.')
  }
}
