/*
  Responsibility
    Generate HTML for the request form. When Submit button
    is clicked, POST a new request to the API.
*/

document.addEventListener("click", (clickEvt) => {
  if (clickEvt.target.id === "submitRequest") {
  }
});

export const RequestForm = () => {
  let html = `
    <div class="field flex column section">
     <label class="label" for="name">Name</label>
     <input type="text" id="name" class="input">

     <label class="label" for="purpose">Purpose</label>
     <input type="text" id="purpose" class="input">
    
     <select id="type">
      <option value="" selected disabled hidden>Select A Type</option>
      <option value="Potion">Potion</option>
      <option value="Elixer">Elixir</option>
     </select>
     <button class="button" id="submitRequest">Submit Request</button>
    </div>
    `;
  return html;
};
