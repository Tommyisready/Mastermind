// Etape 1

// const colors = ["red", "blue", "green", "yellow"];

// function isValidProposal(proposal) {
//   /**
//    * Checks if the proposal is a list of exactly two valid colors.
//    */
//   return Array.isArray(proposal) && proposal.length === 2 && proposal.every((color) => colors.includes(color));
// }

// function isCorrectCombination(proposal, combination) {
//   /**
//    * Checks if the proposal matches the target combination.
//    */
//   return proposal[0] === combination[0] && proposal[1] === combination[1];
// }

// function playGame() {
//   /**
//    * Manages the game flow.
//    */
//   // Generate the target combination
//   const combination = [colors[Math.floor(Math.random() * colors.length)], colors[Math.floor(Math.random() * colors.length)]];

//   let attemptsLeft = 12;

//   while (attemptsLeft > 0) {
//     console.log(`You have ${attemptsLeft} attempts left.`);

//     // Prompt user for their guess
//     let input = prompt("Enter your guess (two colors separated by a space):");
//     let proposal = input.trim().split(/\s+/);

//     if (!isValidProposal(proposal)) {
//       console.log("Invalid proposal. Make sure to use exactly two of the following colors: " + colors.join(", "));
//       continue;
//     }

//     if (isCorrectCombination(proposal, combination)) {
//       console.log("Congratulations! You found the correct combination.");
//       return;
//     }

//     attemptsLeft--;
//     console.log("Incorrect combination. Try again.");
//   }

//   console.log(`Game over. The correct combination was: ${combination.join(", ")}`);
// }

// // Start the game
// playGame();

// Etape 2

// const allColors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "brown"];

// function isValidProposal(proposal) {
//   /**
//    * Checks if the proposal is a list of exactly four different valid colors.
//    */
//   if (!Array.isArray(proposal) || proposal.length !== 4) {
//     return false;
//   }
//   const uniqueColors = new Set(proposal);
//   return uniqueColors.size === 4 && proposal.every((color) => allColors.includes(color));
// }

// function isCorrectCombination(proposal, combination) {
//   /**
//    * Checks if the proposal matches the target combination.
//    */
//   return proposal.every((color, index) => color === combination[index]);
// }

// function playGame() {
//   /**
//    * Manages the game flow.
//    */
//   // Generate the target combination (4 different colors)
//   const shuffledColors = allColors.sort(() => 0.5 - Math.random());
//   const combination = shuffledColors.slice(0, 4);

//   let attemptsLeft = 12;

//   while (attemptsLeft > 0) {
//     console.log(`You have ${attemptsLeft} attempts left.`);

//     // Prompt user for their guess
//     let input = prompt("Enter your guess (four colors separated by spaces):");
//     let proposal = input.trim().split(/\s+/);

//     if (!isValidProposal(proposal)) {
//       console.log("Invalid proposal. Make sure to use exactly four different colors from the following: " + allColors.join(", "));
//       continue;
//     }

//     if (isCorrectCombination(proposal, combination)) {
//       console.log("Congratulations! You found the correct combination.");
//       return;
//     }

//     attemptsLeft--;
//     console.log("Incorrect combination. Try again.");
//   }

//   console.log(`Game over. The correct combination was: ${combination.join(", ")}`);
// }

// // Start the game
// playGame();

// Etape 3

// const allColors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "brown"];

// function isValidProposal(proposal) {
//   /**
//    * Checks if the proposal is a list of exactly four valid colors.
//    */
//   if (!Array.isArray(proposal) || proposal.length !== 4) {
//     return false;
//   }
//   return proposal.every((color) => allColors.includes(color));
// }

// function isCorrectCombination(proposal, combination) {
//   /**
//    * Checks if the proposal matches the target combination.
//    */
//   return proposal.every((color, index) => color === combination[index]);
// }

// function playGame() {
//   /**
//    * Manages the game flow.
//    */
//   // Generate the target combination (4 colors, which can include repeats)
//   const combination = Array.from({ length: 4 }, () => allColors[Math.floor(Math.random() * allColors.length)]);

//   let attemptsLeft = 12;

//   while (attemptsLeft > 0) {
//     console.log(`You have ${attemptsLeft} attempts left.`);

//     // Prompt user for their guess
//     let input = prompt("Enter your guess (four colors separated by spaces):");
//     let proposal = input.trim().split(/\s+/);

//     if (!isValidProposal(proposal)) {
//       console.log("Invalid proposal. Make sure to use exactly four colors from the following: " + allColors.join(", "));
//       continue;
//     }

//     if (isCorrectCombination(proposal, combination)) {
//       console.log("Congratulations! You found the correct combination.");
//       return;
//     }

//     attemptsLeft--;
//     console.log("Incorrect combination. Try again.");
//   }

//   console.log(`Game over. The correct combination was: ${combination.join(", ")}`);
// }

// // Start the game
// playGame();

// Etape 4

// const allColors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "brown"];

// function generateRandomCombination() {
//   /**
//    * Generates a random combination of 4 colors, allowing for repeats.
//    */
//   return Array.from({ length: 4 }, () => allColors[Math.floor(Math.random() * allColors.length)]);
// }

// function isValidProposal(proposal) {
//   /**
//    * Checks if the proposal is a list of exactly four valid colors.
//    */
//   if (!Array.isArray(proposal) || proposal.length !== 4) {
//     return false;
//   }
//   return proposal.every((color) => allColors.includes(color));
// }

// function isCorrectCombination(proposal, combination) {
//   /**
//    * Checks if the proposal matches the target combination.
//    */
//   return proposal.every((color, index) => color === combination[index]);
// }

// function playGame() {
//   /**
//    * Manages the game flow.
//    */
//   // Computer generates the target combination
//   const combination = generateRandomCombination();

//   let attemptsLeft = 12;

//   while (attemptsLeft > 0) {
//     console.log(`You have ${attemptsLeft} attempts left.`);

//     // Prompt user for their guess
//     let input = prompt("Enter your guess (four colors separated by spaces):");
//     let proposal = input.trim().split(/\s+/);

//     if (!isValidProposal(proposal)) {
//       console.log("Invalid proposal. Make sure to use exactly four colors from the following: " + allColors.join(", "));
//       continue;
//     }

//     if (isCorrectCombination(proposal, combination)) {
//       console.log("Congratulations! You found the correct combination.");
//       return;
//     }

//     attemptsLeft--;
//     console.log("Incorrect combination. Try again.");
//   }

//   console.log(`Game over. The correct combination was: ${combination.join(", ")}`);
// }

// // Start the game
// playGame();

// Etape 5

const allColors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "brown"];
let combination = [];
let currentGuess = [];
let attemptsLeft = 12;

// Function to generate a random combination
function generateRandomCombination() {
  return Array.from({ length: 4 }, () => allColors[Math.floor(Math.random() * allColors.length)]);
}

// Function to update the guess display
function updateGuessDisplay() {
  const guessContainer = document.getElementById("current-guess");
  guessContainer.innerHTML = "";
  currentGuess.forEach((color) => {
    const colorDiv = document.createElement("div");
    colorDiv.style.backgroundColor = color;
    guessContainer.appendChild(colorDiv);
  });
}

// Function to handle color button clicks
function handleColorButtonClick(event) {
  const color = event.target.dataset.color;
  if (currentGuess.length < 4) {
    currentGuess.push(color);
    updateGuessDisplay();
  }
}

// Function to handle submit guess
function handleSubmitGuess() {
  if (currentGuess.length !== 4) {
    alert("Please select exactly 4 colors.");
    return;
  }

  if (isCorrectCombination(currentGuess, combination)) {
    document.getElementById("feedback").textContent = "Congratulations! You found the correct combination.";
    document.getElementById("submit-guess").disabled = true;
    return;
  }

  attemptsLeft--;
  document.getElementById("attempts-left").textContent = `Attempts left: ${attemptsLeft}`;

  if (attemptsLeft === 0) {
    document.getElementById("feedback").textContent = `Game over. The correct combination was: ${combination.join(", ")}`;
    document.getElementById("submit-guess").disabled = true;
  } else {
    document.getElementById("feedback").textContent = "Incorrect combination. Try again.";
  }

  currentGuess = [];
  updateGuessDisplay();
}

// Function to check if the proposal is correct
function isCorrectCombination(proposal, combination) {
  return proposal.every((color, index) => color === combination[index]);
}

// Initialize game
function startGame() {
  combination = generateRandomCombination();
  document.getElementById("attempts-left").textContent = `Attempts left: ${attemptsLeft}`;
  document.getElementById("submit-guess").addEventListener("click", handleSubmitGuess);

  document.querySelectorAll(".color-btn").forEach((button) => {
    button.addEventListener("click", handleColorButtonClick);
  });
}

startGame();
