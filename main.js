/* OBJECTIVE
To build a 'What Cat Treat Should I Give to Puddy Today?' generator.

PLAN
MAIN FUNCTIONALITY
x Create an array.
x This array should include cat treat options.
x Create a function that loops through the array.
x The function should index the array's whole length and randomly select an entry.

CSS AND DOM INTERFACE
x Create a header.
x Create a 'p' tag.
x Create a 'Generate Treat' button.
x Event Listen to the button, and when it's clicked, run the function to randomise a treat.
x reflect the returned treat variable into the empty 'p' tag.
- Have a 'p' tag on page reminding people to double-check their dietary requirements for their cats.

SIDE FUNCTIONALITY
x Fetch data from a cat fact API
x Display this data as a 'fun facts' banner on the page.

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
let factBlock = document.querySelector("#fact-block");

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
  treatBlock.innerText = treat;
  return treat;
}

// CAT FACT API CODE.

// async function catFact() {
//   let response = await fetch("https://meowfacts.herokuapp.com/");
//   let data = await response.json();
//   let quote = data.data[0];
//   factBlock.textContent = quote;
//   return quote;
// }

// setInterval(catFact, 10000);
