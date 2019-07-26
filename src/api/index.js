export const fetchPictures = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos')
    return await res.clone().json()
  } catch (error) {
    return (error)
  }
}

export const getFavoritedPics = () => {
  return JSON.parse(localStorage.getItem("favorited-pics")) || []
}

export const setFavoritePic = (id) => {
  const favorites = getFavoritedPics()
  const index = favorites.indexOf(id)
  if (index === -1) {
    favorites.push(id)
  } else {
    favorites.splice(index, 1)
  }
  localStorage.setItem("favorited-pics", JSON.stringify(favorites))
}