let numdice = document.getElementById("num-dice");
let numsides = document.getElementById("num-sides");
let buttn = document.getElementById("startStopBtn");
let output = document.getElementById("output");
let totalDiv = document.getElementById("total");

let rolling = false;
let intervalId;

buttn.addEventListener("click", () => {
  if (rolling) {
    clearInterval(intervalId);
    buttn.textContent = "Roll Dice";
    rolling = false;
  } else {
    startrolling();
    buttn.textContent = "Stop dice";
    rolling = true;
  }
});
//function to start rolling the dice
function startrolling() {
  const numDice = parseInt(numdice.value);
  const numSides = parseInt(numsides.value);

  intervalId = setInterval(() => {
    const results = [];
    let total = 0;
    for (let i = 0; i < numDice; i++) {
      const roll = Math.floor(Math.random() * numSides) + 1;
      results.push(`Die ${i + 1}: ${roll}`);
      total += roll;
    }

    //Display the results and total
    output.textContent = results.join(",");
    totalDiv.textContent = `Total: ${total}`;
  }, 100);
}
