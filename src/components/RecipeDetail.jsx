import { useEffect, useState } from "react"
import { getRecipeById } from "../services/recipes.js"
import { categoryColors, fallbackCategory } from "../data/categoryColors.js"
import { ClockIcon } from "./ui/icons.jsx"

export default function RecipeDetail({ id, onClose }) {
  const [recipe, setRecipe] = useState(null)

  useEffect(() => {
    getRecipeById(id).then(setRecipe)
  })

  const categoryClass = categoryColors[recipe.category] ?? fallbackCategory;

  return (
    <div className="min-h-screen bg-orange-50/60">
      <button
        onClick={onClose}
        className="fixed top-6 left-6 z-10 px-4 py-2 bg-white rounded-full shadow hover:shadow-md transition flex items-center gap-2 text-sm font-semibold"
      >
        ← Back
      </button>

      <article className="max-w-3xl mx-auto px-6 py-12">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-72 md:h-96 object-cover rounded-3xl shadow-md"
        />
        <div className="mt-8">
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${categoryClass}`}
          >
            {recipe.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-4 text-slate-900">
            {recipe.title}
          </h1>
          <p className="text-slate-500 mt-3 flex items-center gap-1.5">
            <ClockIcon className="w-4 h-4" />
            <span>{recipe.time} minutes</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-12">
          <section>
            <h2 className="text-xl font-bold mb-4 text-slate-900">
              Ingredients
            </h2>
            <ul className="space-y-3">
              {recipe.ingredients.map((ing, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2.5 shrink-0" />
                  <span>{ing}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-slate-900">Steps</h2>
            <ol className="space-y-4">
              {recipe.steps.map((s, i) => (
                <li key={i} className="flex gap-4 text-slate-700">
                  <span className="w-7 h-7 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <span className="pt-0.5">{s}</span>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </article>
    </div>
  );
}
