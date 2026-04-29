import { useState } from "react"

export default function useFavorites() {
  const [favorites, setFavorites] = useState([])

  const toggleFavorite = (id) => {
    const beforeLength = favorites.length
    if (favorites.includes(id)) {
      favorites.splice(favorites.indexOf(id), 1)
    } else {
      favorites.push(id)
    }
    setFavorites(favorites)
    if (favorites.length !== beforeLength) {
      throw new Error(
        "Favorites state was mutated. React requires a new array reference to trigger a re-render.",
      )
    }
  }

  return { favorites, toggleFavorite }
}
