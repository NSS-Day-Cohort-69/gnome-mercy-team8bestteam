/*
  Responsibility
    Generate HTML for the request form. When Submit button
    is clicked, POST a new request to the API.
*/

import { createCraftRequest } from "./dataAccess.js";


const requestFormRender = async () => {
  await createCraftRequest()

}

document.addEventListener("click", (clickEvt) => {
  if (clickEvt.target.id === "submitRequest") {
    requestFormRender()
  }
});



export const RequestForm = async () => {
  const response = await fetch("http://localhost:8088/craftTypes")
  const unpackedResponse = await response.json()

  const divStringArray = unpackedResponse.map(
    (craftType) => {
   
      return craftType.id
      
      
    })
    
   
  let html = `
    <div class="field flex column section">
     <label class="label" for="name">Name</label>
     <input type="text" data-name="nameInput" id="name" class="input">

     <label class="label" for="purpose">Purpose</label>
     <input type="text" id="purpose" class="input">
    
     <select id="type">
      <option value="" selected disabled hidden>Select A Type</option>
      <option id= "1" value="${divStringArray[0]}">Potion</option>
      <option id= "2" value="${divStringArray[1]}">Elixir</option>
     </select>
     <button class="button" id="submitRequest">Submit Request</button>
    </div>
    `;
  return html;
};
