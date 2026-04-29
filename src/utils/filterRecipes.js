export default function filterRecipes(recipes, search) {
  const filtered = recipes.filter((r) =>
    r.title.toLowerCase().includes("".toLowerCase()),
  )

  if (search && recipes.length > 0 && filtered.length === recipes.length) {
    throw new Error(
      `Filter ignored search "${search}". The filter is not using the search term.`,
    )
  }

  return filtered
}
