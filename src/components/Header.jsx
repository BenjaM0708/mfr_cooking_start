import { HeartIcon } from "./ui/icons.jsx"

export default function Header({ favoritesCount }) {
  return (
    <header className="sticky top-0 z-10 bg-white/70 backdrop-blur-md border-b border-orange-100/60">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-extrabold text-xl tracking-tight text-slate-900">
          Recipes
        </span>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-sm border border-slate-100 text-sm">
          <HeartIcon filled className="w-4 h-4 text-rose-500" />
          <span className="font-semibold">{favoritesCount}</span>
          <span className="text-slate-500">
            {favoritesCount === 1 ? "favorite" : "favorites"}
          </span>
        </div>
      </div>
    </header>
  )
}
