export const fetchPictures = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos')
    return await res.clone().json()
  } catch (error) {
    return (error)
  }
}
