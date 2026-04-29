// In a real app, point this at your backend.
// Example: const API_BASE = "https://api.recipes.com/v1"
const API_BASE = ""

// GET /api/recipes
export async function getRecipes() {
  const response = await fetch(`${API_BASE}/recipes.json`)
  if (!response.ok) {
    throw new Error(`Failed to load recipes (${response.status})`)
  }
  return response.json()
}

// GET /api/recipes/:id
export async function getRecipeById(id) {
  const all = await getRecipes()
  return all.find((r) => r.id === Number(id))
}
