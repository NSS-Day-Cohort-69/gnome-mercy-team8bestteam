/*
  Responsibility
    Generate the HTML for all completed potions and elixirs
*/
/*
export const completions = async () => {
  const completionResponse = await fetch("http://localhost:8088/completions")
  const allCompletions = await completionResponse.json()

  const completionArray = allCompletions.map(
    (completion) => {
      return `<ul>
          <li>${completion}</li>
      </ul>`
    }
  ).join("")

  let html = `
    <section>
      <h4>Completed Potions and Elixirs</h4>
      ${completionArray}
    </section>
  `

  return html
}
*/