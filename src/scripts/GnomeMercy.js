/*
  Responsibility
    Generate the entire HTML string template for 
    Gnome Mercy by using all other HTML generation
    components.
*/
import { RequestForm } from "./RequestForm.js"; 
import { craftRequests } from "./CraftRequests.js";
import { Crafters } from "./Crafters.js";
import { ingredientList } from "./Ingredients.js";
import { buildFinishBtn } from "./CompleteButton.js";
// import { completions } from "./Completions.js";

export const GnomeMercy = async () => {
  const requestFormHTML = await RequestForm()
  const craftRequestsHTML = await craftRequests()
  const craftersHTML = await Crafters()
  const ingredientHTML = await ingredientList()
  const finishBtn = await buildFinishBtn()
  // const completionHTML = await completions()

  return `
    <h1>Gnome Mercy</h1>
    ${requestFormHTML}
    ${craftRequestsHTML}
    ${craftersHTML}
    ${ingredientHTML}
    ${finishBtn}
    `;
};
