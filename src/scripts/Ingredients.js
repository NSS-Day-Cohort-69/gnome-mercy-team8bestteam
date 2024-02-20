/*
  Responsibility
    Generate HTML for checkboxes for each ingredient and
    store each choice in transient state.
*/
import { setIngredients } from "./dataAccess.js"

document.addEventListener("change", (changeEvt) => {
  if(changeEvt.target.name == "ingredient") {
    setIngredients(parseInt(changeEvt.target.value))
    }
})

export const ingredientList = async () => {
  const ingredientResponse = await fetch("http://localhost:8088/ingredients")
  const allIngredients = await ingredientResponse.json()

  const allIngredientMap = allIngredients.map(
    (ingredient) => {
      return `<div>
        <input name="ingredient" type="checkbox" value="${ingredient.id}">${ingredient.name}</input>
      </div>`
    }
  ).join("")

  let html = `
  <section>
    <h4>Ingredients</h4>
    ${allIngredientMap}
  </section>`

  return html
}


