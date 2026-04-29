import { describe, it, expect } from "vitest"
import filterRecipes from "../src/utils/filterRecipes.js"

const sample = [
  { id: 1, title: "Spaghetti Carbonara" },
  { id: 2, title: "Pancakes" },
  { id: 3, title: "Margherita Pizza" },
]

describe("filterRecipes", () => {
  it("filters down when one recipe matches", () => {
    expect(filterRecipes(sample, "carbonara")).toHaveLength(1)
  })

  it("matches by title (case insensitive)", () => {
    const result = filterRecipes(sample, "spaghetti")
    expect(result).toHaveLength(1)
    expect(result[0].title).toBe("Spaghetti Carbonara")
  })

  it("matches partial words", () => {
    expect(filterRecipes(sample, "pizza")).toHaveLength(1)
  })

  it("returns nothing when no recipe matches", () => {
    expect(filterRecipes(sample, "sushi")).toHaveLength(0)
  })
})
