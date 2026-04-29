# Your mission

You're going to take a broken recipe blog and bring it to life. **6 goals in order.** Each one is a single file to open. The app will tell you what's broken — keep the browser console (F12) open the whole time.

✅ Tick each goal when its check passes.

---

## ☐ Goal 1 — Get Tailwind running

The page is currently raw HTML. The `className` attributes are already sprinkled all over the code — they're just sitting there with nothing to interpret them. Your job: install Tailwind and wire it up so those classes start working.

The Tailwind docs at **[tailwindcss.com/docs/installation](https://tailwindcss.com/docs/installation)** show exactly how. We're using **Vite**, so follow the Vite path. Three things will need to happen: install the package, register the plugin, import the styles. The docs will walk you through it.

After wiring it up, restart the dev server (`Ctrl+C`, then `npm run dev`).

✅ **Check**: The header has a sticky white background. The "Hungry?" hero is huge and bold. The search bar is a rounded pill. Recipe cards still look bare — that's the next goal.

---

## ☐ Goal 2 — Style the recipe cards

Open `src/components/RecipeCard.jsx`. The structure is there but no Tailwind classes. Add classes to make each card look like the deployed `final/` version: rounded white container, image filling the top, padding around the title, soft shadow that grows on hover.

✅ **Check**: Hovering over a card lifts it visually. Cards line up in a 3-column grid on desktop.

---

## ☐ Goal 3 — Make the recipe list show

Look at the homepage. There's a hero, a search bar, but **no cards** — even though 6 recipes loaded. Open the console.

✅ **Check**: 6 recipe cards appear in the grid.

---

## ☐ Goal 4 — Make the favorite button work

Click any heart icon on a card. Nothing happens visually. Open the console.

✅ **Check**: Clicking a heart fills it red. The favorites count in the top-right updates instantly.

---

## ☐ Goal 5 — Make the detail page work

Click anywhere on a card. The page crashes with a React error overlay. The error message tells you exactly what's null.

After you stop the crash, you may notice the Network tab keeps requesting `/recipes.json` non-stop. That's a second issue in the same `useEffect`.

✅ **Check**: Clicking a card opens its detail page with image, ingredients, and steps. No console errors. Only **one** request to `/recipes.json` in the Network tab when the page loads.

---

## 🎉 When goals 1-5 are done

Compare your app to the deployed `final/` version. The header, hero, cards, favorites and detail page all work. **You did it.**

If you finished early or feel like a challenge, try the bonus below.

---

## ⭐ Bonus — Make the search bar filter recipes

This one is harder. Two things are broken:

- The search input itself is not connected to state (your IDE will warn you about unused props).
- Even after you connect it, the filter logic ignores the search term — the console will throw a fresh error pointing you there.

It touches two files and a React concept (controlled inputs) we haven't fully covered yet. Don't worry if you don't finish — you've already learned the main lessons.

✅ **Check**: Typing "pasta" narrows the list to pasta recipes only. Typing nothing shows all 6. **All 4 tests in the dashboard turn green.**
