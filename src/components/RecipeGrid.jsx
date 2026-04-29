import RecipeCard from "./RecipeCard.jsx"

export default function RecipeGrid({
  recipes,
  favorites,
  onToggleFav,
  onOpen,
}) {
  const cards = recipes.map((r) => {
    ;<RecipeCard
      recipe={r}
      isFavorite={favorites.includes(r.id)}
      onToggleFav={onToggleFav}
      onOpen={onOpen}
    />
  })

  if (cards.length > 0 && cards[0] == null) {
    throw new Error(
      "RecipeGrid rendered no cards. The .map function did not return any JSX — check your return statement.",
    )
  }

  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards}
    </div>
  )
}
