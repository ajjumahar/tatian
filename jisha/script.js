// Example: random poem of the day
const poems = [
  "The sun wakes me up with a smile...",
  "Little rivers run to the sea...",
  "Dreams are wings for little hearts..."
];

function showRandomPoem() {
  const poemBox = document.getElementById("randomPoem");
  if (poemBox) {
    const random = poems[Math.floor(Math.random() * poems.length)];
    poemBox.textContent = random;
  }
}

document.addEventListener("DOMContentLoaded", showRandomPoem);
