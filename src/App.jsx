import { useState } from "react"
import useRecipes from "./hooks/useRecipes.js"
import useFavorites from "./hooks/useFavorites.js"
import filterRecipes from "./utils/filterRecipes.js"
import Header from "./components/Header.jsx"
import Hero from "./components/Hero.jsx"
import RecipeGrid from "./components/RecipeGrid.jsx"
import RecipeDetail from "./components/RecipeDetail.jsx"
import SearchBar from "./components/ui/SearchBar.jsx"

export default function App() {
  const recipes = useRecipes()
  const { favorites, toggleFavorite } = useFavorites()
  const [search, setSearch] = useState("")
  const [selectedId, setSelectedId] = useState(null)

  const filtered = filterRecipes(recipes, search)

  if (selectedId !== null) {
    return <RecipeDetail id={selectedId} onClose={() => setSelectedId(null)} />
  }

  return (
    <div className="min-h-screen bg-orange-50/60">
      <Header favoritesCount={favorites.length} />
      <main className="max-w-6xl mx-auto px-6 py-12">
        <Hero />
        <SearchBar value={search} onChange={setSearch} />
        <RecipeGrid
          recipes={filtered}
          favorites={favorites}
          onToggleFav={toggleFavorite}
          onOpen={setSelectedId}
        />
      </main>
    </div>
  )
}
