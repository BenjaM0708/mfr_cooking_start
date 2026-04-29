import { categoryColors, fallbackCategory } from "../data/categoryColors.js"
import { ClockIcon, HeartIcon } from "./ui/icons.jsx"

export default function RecipeCard({
  recipe,
  isFavorite,
  onToggleFav,
  onOpen,
}) {
  const categoryClass = categoryColors[recipe.category] ?? fallbackCategory

  return (
    <div
      onClick={() => onOpen(recipe.id)}
      className="group block bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all overflow-hidden border border-slate-100 cursor-pointer"
    >
      <div className="relative overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <button
          onClick={(e) => {
            e.stopPropagation()
            onToggleFav(recipe.id)
          }}
          className={`absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur rounded-full shadow flex items-center justify-center hover:scale-110 transition ${
            isFavorite ? "text-rose-500" : "text-slate-400 hover:text-rose-500"
          }`}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <HeartIcon filled={isFavorite} className="w-5 h-5" />
        </button>
      </div>
      <div className="p-5">
        <span
          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${categoryClass}`}
        >
          {recipe.category}
        </span>
        <h2 className="mt-3 text-lg font-bold leading-tight text-slate-900">
          {recipe.title}
        </h2>
        <p className="text-sm text-slate-500 mt-2 flex items-center gap-1.5">
          <ClockIcon className="w-4 h-4" />
          <span>{recipe.time} min</span>
        </p>
      </div>
    </div>
  )
}
