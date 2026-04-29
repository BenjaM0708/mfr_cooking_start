import { useEffect, useState } from "react"
import { getRecipes } from "../services/recipes.js"

export default function useRecipes() {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    getRecipes().then(setRecipes)
  }, [])

  return recipes
}
