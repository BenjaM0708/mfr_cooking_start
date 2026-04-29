import { HeartIcon } from "./ui/icons.jsx"

export default function RecipeCard({
  recipe,
  isFavorite,
  onToggleFav,
  onOpen,
}) {
  return (
    <div onClick={() => onOpen(recipe.id)}>
      <img src={recipe.image} alt={recipe.title} />
      <div>
        <h2>{recipe.title}</h2>
        <p>
          {recipe.time} min · {recipe.category}
        </p>
        <button
          onClick={(e) => {
            e.stopPropagation()
            onToggleFav(recipe.id)
          }}
        >
          <HeartIcon filled={isFavorite} />
        </button>
      </div>
    </div>
  )
}
