/*
  Responsibility
    Generate HTML for the dropdown of craftRequests.

    Criteria:
      * Only incomplete requests should be converted to options
*/
import { setCraftRequests } from "./dataAccess.js"

document.addEventListener("change", (changeEvt) => {
  if (changeEvt.target.name === "craftRequest") {
    setCraftRequests(parseInt(changeEvt.target.value))
  }
})

export const craftRequests = async () => {
  const response = await fetch("http://localhost:8088/craftRequests")
  const allCraftRequests = await response.json()

  const allRequestArray = allCraftRequests.map(
    (request) => {
        return`<div>
          <option value="${request.id}">${request.name}</option>
        </div>`
    }
).join("")

  let html = `
    <section>
      <h4>Craft Requests</h4>
      <select name="craftRequest">
        <option value="0" selected disabled hidden>--Choose A Request--</option>
        ${allRequestArray}
      </select>
    </section>

  `

  return html
}