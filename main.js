/* OBJECTIVE
To build a 'What Cat Treat Should I Give to Puddy Today?' generator.

PLAN V1.1


REFACTORING
- Put the cat facts on a fade-in-fade-out interval timer.
- Make it so you can filter treat suggestions by dietary requirements.
- Make it so you can add your own options to the array.
- Some of the cat facts are very long. Maybe limit length of quote that can be displayed?
- Remove some of the facts that aren't relevant like the unsubscribe and invalid command facts.

- NOTE: COMMENTED OUT THE API, FACTS WERE A BIT GRIM.
*/

// QUERY SELECTORS AND EVENT LISTENERS.
let treatBtn = document.querySelector("#treat-btn");
treatBtn.addEventListener("click", randomTreat);

let treatBlock = document.querySelector("#treat-block");

// CAT TREAT GENERATOR CODE.
let treatArray = [
  "Some catnip!",
  "Some catgrass!",
  "Cat milk!",
  "Chicken!",
  "Fish!",
  "Make something at home!",
  "Mousse!",
  "Dried biscuit treat!",
  "Gravy-based treat!",
  "A tiny little bit of porridge!",
  "Beef!",
];

function randomTreat() {
  let random = Math.floor(Math.random() * treatArray.length);
  let treat = treatArray[random];
  if (treatArray[random] == treatBlock.textContent) {
    randomTreat();
  } else {
    treatBlock.innerText = treat;
  }
  return treat;
}
