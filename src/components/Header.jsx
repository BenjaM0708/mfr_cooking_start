import { HeartIcon } from "./ui/icons.jsx"

export default function Header({ favoritesCount }) {
  return (
    <header className="flex items-center justify-between, max-w-6xl mx-auto, px-6 py-4, gap-2, bg-white, border-b border-slate-200, sticky top-0, font-bold text-xl, rounded-full, bg-slate-100, px-3 py-1">
      <div>
        <span>Recipes</span>
        <div>
          <HeartIcon filled />
          <span>{favoritesCount}</span>
          <span>{favoritesCount === 1 ? "favorite" : "favorites"}</span>
        </div>
      </div>
    </header>
  )
}
