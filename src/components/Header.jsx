import { HeartIcon } from "./ui/icons.jsx"

export default function Header({ favoritesCount }) {
  return (
    <header>
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
