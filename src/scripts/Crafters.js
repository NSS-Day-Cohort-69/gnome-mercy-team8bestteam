/*
  Responsibility
    Generate HTML for the dropdown of crafters. When one is
    selected, update transient state.
*/

export const Crafters = async () => {
  const crafters = await fetch("http://localhost:8088/crafters")
  const craftersResponse = await crafters.json()

  const AllCraftersArray = craftersResponse.map(
    (crafter) => {
      return `<div>
        <option value="${crafter.id}">${crafter.name}</option>
      </div>`
    }
  ).join("")

  let craftHTML = `
    <h3>Crafters</h3>
    <select id="crafter">
        <option value="0">--Choose A Crafter--</option>
        ${AllCraftersArray}
    </select>
  `;

  return craftHTML
};
