const allDiceFaces = [
  "A",
  "A#/Bb",
  "B",
  "C",
  "C#/Db",
  "D",
  "D#/Eb",
  "E",
  "F",
  "F#/Gb",
  "G",
  "G#/Ab"
];
const faceValues = {
  A: 1,
  "A#/Bb": 1.5,
  B: 2,
  C: 2.5,
  "C#/Db": 3,
  D: 3.5,
  "D#/Eb": 4,
  E: 4.5,
  F: 5,
  "F#/Gb": 5.5,
  G: 6,
  "G#/Ab": 6.5
};

const chordIntervals = {
  "major triad": [
    [0, 4, 7],
    [0, 3, 8],
    [0, 5, 9]
  ],
  "minor triad": [
    [0, 3, 7],
    [0, 4, 9],
    [0, 5, 8]
  ],
  "diminished triad": [
    [0, 3, 6],
    [0, 3, 9],
    [0, 6, 9]
  ],
  "augmented triad": [[0, 4, 8]],
  "sus4 triad": [
    [0, 5, 7],
    [0, 2, 7],
    [0, 5, 10]
  ],
  "minor major 7th chord": [
    [0, 3, 7, 11],
    [0, 4, 8, 9],
    [0, 4, 5, 8],
    [0, 1, 4, 8]
  ],
  "major 7th chord": [
    [0, 4, 7, 11],
    [0, 3, 7, 8],
    [0, 4, 5, 9],
    [0, 1, 5, 8]
  ],
  "half diminished 7th chord": [
    [0, 3, 6, 10],
    [0, 3, 7, 9],
    [0, 4, 6, 9],
    [0, 2, 5, 8]
  ],
  "minor 7th chord": [
    [0, 3, 7, 10],
    [0, 4, 7, 9],
    [0, 3, 5, 8],
    [0, 2, 5, 9]
  ],
  "dominant 7th chord": [
    [0, 4, 7, 10],
    [0, 3, 6, 8],
    [0, 3, 5, 9],
    [0, 2, 6, 9]
  ],
  "fully diminished 7th chord": [[0, 3, 6, 9]],
  "Major 9": [
    [0, 2, 4, 7, 11],
    [0, 2, 5, 9, 10],
    [0, 3, 7, 8, 10],
    [0, 4, 5, 7, 9],
    [0, 1, 3, 5, 8]
  ],
  "Minor 9": [
    [0, 2, 3, 7, 10],
    [0, 1, 5, 8, 10],
    [0, 4, 7, 9, 11],
    [0, 3, 5, 7, 8],
    [0, 2, 4, 5, 9]
  ],
  "Dominant b9": [
    [0, 1, 4, 7, 10],
    [0, 3, 6, 9, 11],
    [0, 3, 6, 8, 9],
    [0, 3, 5, 6, 9],
    [0, 2, 3, 6, 9]
  ],
  "Dominant 9": [
    [0, 2, 4, 7, 10],
    [0, 2, 5, 8, 10],
    [0, 3, 6, 8, 10],
    [0, 3, 5, 7, 9],
    [0, 2, 4, 6, 9]
  ],
  "Dominant #9": [
    [0, 3, 4, 7, 10],
    [0, 1, 4, 7, 9],
    [0, 3, 6, 8, 11],
    [0, 3, 5, 8, 9],
    [0, 2, 5, 6, 9]
  ],
  "Pentatonic Scale": [
    [0, 3, 5, 7, 10],
    [0, 2, 4, 7, 9],
    [0, 2, 5, 7, 10],
    [0, 3, 5, 8, 10],
    [0, 2, 5, 7, 9]
  ],
  "Whole Step Series": [
    [0, 2, 4, 6, 8],
    [0, 2, 4, 6, 10],
    [0, 2, 4, 8, 10],
    [0, 2, 6, 8, 10],
    [0, 4, 6, 8, 10]
  ],
  "Chromatic Scale": [
    [0, 1, 2, 3, 4],
    [0, 1, 2, 3, 11],
    [0, 1, 2, 10, 11],
    [0, 1, 9, 10, 11],
    [0, 8, 9, 10, 11]
  ]
};

const noteValues = {
  A: 0,
  "A#/Bb": 1,
  B: 2,
  C: 3,
  "C#/Db": 4,
  D: 5,
  "D#/Eb": 6,
  E: 7,
  F: 8,
  "F#/Gb": 9,
  G: 10,
  "G#/Ab": 11
};

const chordPoints = {
  "major triad": 20,
  "minor triad": 20,
  "diminished triad": 25,
  "augmented triad": 35,
  "sus4 triad": 25,
  "minor major 7th chord": 50,
  "major 7th chord": 50,
  "half diminished 7th chord": 50,
  "minor 7th chord": 50,
  "dominant 7th chord": 50,
  "fully diminished 7th chord": 75,
  "Major 9": 100,
  "Minor 9": 100,
  "Dominant b9": 100,
  "Dominant 9": 100,
  "Dominant #9": 100,
  "Pentatonic Scale": 100,
  "Whole Step Series": 200, // Updated order
  "Chromatic Scale": 300 // Updated order
};

let diceFaces = [...allDiceFaces];
let rollsLeft = 3;
let numberOfDice = 4;
let currentPlayer = 0;
let numberOfPlayers = 2;
let playerScores = new Array(numberOfPlayers).fill(0);
let playerNames = Array.from(
  { length: numberOfPlayers },
  (_, i) => `Player ${i + 1}`
);
let turnCounter = 1;
let gameStarted = false;
let confirmAction = null;

document.addEventListener("DOMContentLoaded", () => {
  const diceContainer = document.querySelector(".dice-container");
  const rollButton = document.getElementById("roll");
  const rollSound = document.getElementById('rollSound');
  const resetTurnButton = document.getElementById("resetTurn");
  const nextTurnButton = document.getElementById("nextTurn");
  const resetGameButton = document.getElementById("resetGame");
  const rollsLeftIndicator = document.getElementById("rollsLeft");
  const includeAccidentalsCheckbox = document.getElementById(
    "includeAccidentals"
  );
  const numberOfDiceRadios = document.querySelectorAll(
    'input[name="numberOfDice"]'
  );
  const numberOfPlayersInput = document.getElementById("numberOfPlayers");
  const totalPointsVisible = document.getElementById("totalPointsVisible");
  const totalPointsLocked = document.getElementById("totalPointsLocked");
  const chordDisplay = document.createElement("p");
  chordDisplay.id = "chordDisplay";
  chordDisplay.style.display = "none"; // Initially hidden
  document.querySelector(".indicator").appendChild(chordDisplay);

  const totalTurnPointsDisplay = document.createElement("p");
  totalTurnPointsDisplay.id = "totalTurnPointsDisplay";
  totalTurnPointsDisplay.style.display = "none"; // Initially hidden
  totalTurnPointsDisplay.style.color = "green";
  totalTurnPointsDisplay.style.fontWeight = "bold";
  document.querySelector(".indicator").appendChild(totalTurnPointsDisplay);

  const currentPlayerDisplay = document.getElementById("currentPlayer");
  const playerScoresDisplay = document.getElementById("playerScores");
  const playerNamesContainer = document.getElementById("playerNamesContainer");
  const turnCounterDisplay = document.getElementById("turnCounter");

  const mainMenuButton = document.getElementById("mainMenuButton");
  const mainMenuDropdown = document.getElementById("mainMenuDropdown");

  const modal = document.getElementById("confirmationModal");
  const closeModalButton = document.getElementById("closeModal");
  const confirmButton = document.getElementById("confirmButton");
  const cancelButton = document.getElementById("cancelButton");
  const modalMessage = document.getElementById("modalMessage");
  const settingsModal = document.getElementById('settingsModal');
  includeAccidentalsCheckbox.addEventListener("change", () => {
    if (includeAccidentalsCheckbox.checked) {
      diceFaces = [...allDiceFaces];
    } else {
      diceFaces = allDiceFaces.filter(
        (face) => !face.includes("#") && !face.includes("/")
      );
    }
    createDiceElements();
    updatePointsAndChords();
  });

  numberOfDiceRadios.forEach((radio) => {
    radio.addEventListener("change", () => {
      numberOfDice = parseInt(radio.value);
      createDiceElements();
      updatePointsAndChords();
    });
  });

  numberOfPlayersInput.addEventListener("change", () => {
    numberOfPlayers = parseInt(numberOfPlayersInput.value);
    playerScores = new Array(numberOfPlayers).fill(0);
    playerNames = Array.from(
      { length: numberOfPlayers },
      (_, i) => `Player ${i + 1}`
    );
    currentPlayer = 0;
    updatePlayerNamesInputs();
    updatePlayerDisplays();
    createDiceElements();
    rollsLeft = 3;
    updateRollsLeftIndicator();
    updatePointsAndChords();
    rollButton.style.display = "inline-block"; // Show the roll button
    nextTurnButton.style.display = "none"; // Hide the next turn button
    createChordPointsTable();
  });
const closeSettingsModalButton = document.getElementById('closeSettingsModal');

settingsButton.addEventListener('click', () => {
    settingsModal.style.display = 'block';
});

closeSettingsModalButton.addEventListener('click', () => {
    settingsModal.style.display = 'none';
});


  mainMenuButton.addEventListener("click", () => {
    mainMenuDropdown.style.display =
      mainMenuDropdown.style.display === "block" ? "none" : "block";
  });

  // Close the dropdown menu if clicked outside
  document.addEventListener("click", (event) => {
    const isClickInsideMenu =
      mainMenuButton.contains(event.target) ||
      mainMenuDropdown.contains(event.target);
    if (!isClickInsideMenu) {
      mainMenuDropdown.style.display = "none";
    }
  });

  closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
    confirmAction = null;
  });

  cancelButton.addEventListener("click", () => {
    modal.style.display = "none";
    confirmAction = null;
  });

  confirmButton.addEventListener("click", () => {
    if (confirmAction) confirmAction();
    modal.style.display = "none";
    confirmAction = null;
  });

  function showModal(message, action) {
    modalMessage.textContent = message;
    modal.style.display = "block";
    confirmAction = action;
  }

  function createDiceElements() {
    diceContainer.innerHTML = "";
    for (let i = 1; i <= numberOfDice; i++) {
      const dice = document.createElement("div");
      dice.className = "dice";
      dice.id = `dice${i}`;
      dice.dataset.locked = "false";
      dice.innerHTML = `
                <div class="face1"></div>
                <div class="face2"></div>
                <div class="face3"></div>
                <div class="face4"></div>
                <div class="face5"></div>
                <div class="face6"></div>
            `;
      diceContainer.appendChild(dice);
      dice.addEventListener("click", () => {
        if (rollsLeft < 3 || rollsLeft === 0) {
          dice.dataset.locked =
            dice.dataset.locked === "true" ? "false" : "true";
          dice.classList.toggle("locked");
          updatePointsAndChords();
        }
      });
    }
  }

  function updateDiceFace(dice) {
    const faceIndex = Math.floor(Math.random() * diceFaces.length);
    const faces = dice.getElementsByTagName("div");
    faces[0].textContent = diceFaces[faceIndex]; // Only display on face1 for simplicity
  }

  function updateRollsLeftIndicator() {
    rollsLeftIndicator.textContent = `${rollsLeft} rolls left`;
  }

  function calculateIntervals(diceValues) {
    const sortedValues = diceValues
      .map((note) => noteValues[note])
      .sort((a, b) => a - b);
    const baseValue = sortedValues[0];
    return sortedValues.map((value) => (value - baseValue + 12) % 12);
  }

  function identifyChord(diceValues) {
    const intervals = calculateIntervals(diceValues);
    for (let chord in chordIntervals) {
      for (let inversion of chordIntervals[chord]) {
        if (inversion.toString() === intervals.toString()) {
          return chord;
        }
      }
    }
    return "None";
  }

  function updatePointsAndChords() {
    let totalVisible = 0;
    let totalLocked = 0;
    let lockedDice = [];
    const diceElements = Array.from(document.getElementsByClassName("dice"));
    diceElements.forEach((dice) => {
      const faceValue =
        faceValues[dice.querySelector(".face1").textContent] || 0;
      totalVisible += faceValue;
      if (dice.dataset.locked === "true") {
        totalLocked += faceValue;
        lockedDice.push(dice.querySelector(".face1").textContent);
      }
    });
    totalPointsVisible.textContent = totalVisible;
    totalPointsLocked.textContent = totalLocked;

    const chord = identifyChord(lockedDice);
    const chordPointsValue = chordPoints[chord] || 0;

    if (chord !== "None") {
      chordDisplay.textContent = `Chord: ${chord} (${chordPointsValue} points)`;
      chordDisplay.style.display = "block";

      if (rollsLeft === 0) {
        const totalTurnPoints = totalLocked + chordPointsValue;
        totalTurnPointsDisplay.textContent = `Total Turn Points: ${totalTurnPoints}`;
        totalTurnPointsDisplay.style.display = "block";
      } else {
        totalTurnPointsDisplay.style.display = "none";
      }
    } else {
      chordDisplay.style.display = "none";
      totalTurnPointsDisplay.style.display = "none";
    }
  }

  function updatePlayerNamesInputs() {
    playerNamesContainer.innerHTML = "";
    playerNames.forEach((name, index) => {
      const input = document.createElement("input");
      input.type = "text";
      input.value = name;
      input.placeholder = `Player ${index + 1} Name`;
      input.dataset.index = index;
      input.addEventListener("input", (event) => {
        const idx = event.target.dataset.index;
        playerNames[idx] = event.target.value;
        updatePlayerDisplays();
        updateChordPointsTableHeaders();
      });
      playerNamesContainer.appendChild(input);
    });
  }

function updatePlayerDisplays() {
    currentPlayerDisplay.className = `player-name player-${currentPlayer}`;
    currentPlayerDisplay.textContent = `Current Player: ${playerNames[currentPlayer]}`;
    playerScoresDisplay.innerHTML = playerScores.map((score, index) => 
        `<span class="player-name player-${index}">${playerNames[index]}: ${score}</span>`
    ).join(', ');
}

// Call this function after player names input changes to update player colors and names
updatePlayerDisplays();


  function lockPlayerInputs() {
    numberOfPlayersInput.disabled = true;
    Array.from(playerNamesContainer.getElementsByTagName("input")).forEach(
      (input) => (input.disabled = true)
    );
  }

  function unlockPlayerInputs() {
    numberOfPlayersInput.disabled = false;
    Array.from(playerNamesContainer.getElementsByTagName("input")).forEach(
      (input) => (input.disabled = false)
    );
  }

  function createChordPointsTable() {
    const table = document.getElementById("chordPointsTable");
    const thead = table.querySelector("thead tr");
    thead.innerHTML = "<th>Chord Type</th><th>Points</th>";
    playerNames.forEach((name) => {
      const th = document.createElement("th");
      th.textContent = name;
      thead.appendChild(th);
    });

    const tbody = table.querySelector("tbody");
    tbody.innerHTML = "";
    for (let chord in chordPoints) {
      const tr = document.createElement("tr");
      const tdChord = document.createElement("td");
      tdChord.textContent = chord.replace(/_/g, " ");
      tr.appendChild(tdChord);
      const tdPoints = document.createElement("td");
      tdPoints.textContent = chordPoints[chord];
      tr.appendChild(tdPoints);
      playerNames.forEach(() => {
        const td = document.createElement("td");
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    }
  }

  function updateChordPointsTableHeaders() {
    const table = document.getElementById("chordPointsTable");
    const thead = table.querySelector("thead tr");
    for (let i = 2; i < thead.children.length; i++) {
      thead.children[i].textContent = playerNames[i - 2];
    }
  }

  function updateChordPointsTable(chord, playerIndex) {
    const table = document.getElementById("chordPointsTable");
    const rows = table.querySelector("tbody").rows;
    for (let row of rows) {
      if (row.cells[0].textContent === chord.replace(/_/g, " ")) {
        row.cells[playerIndex + 2].innerHTML = "&#10003;"; // Checkmark symbol
        break;
      }
    }
  }

    rollButton.addEventListener('click', () => {
        if (rollSound.readyState >= 2) { // Ensure the audio is ready to play
            rollSound.play(); // Play the roll sound
            console.log("Playing roll sound"); // Log for debugging
        } else {
            console.log("Roll sound not ready"); // Log if the audio is not ready
        }
        if (!gameStarted) {
            gameStarted = true;
            lockPlayerInputs();
    }
    if (rollsLeft > 0) {
      const diceElements = Array.from(document.getElementsByClassName("dice"));
      diceElements.forEach((dice) => {
        if (dice.dataset.locked === "false") {
          dice.classList.add("rolling");
          setTimeout(() => {
            updateDiceFace(dice);
            dice.classList.remove("rolling");
            updatePointsAndChords();
          }, 1000);
        }
      });
      rollsLeft--;
      updateRollsLeftIndicator();
      if (rollsLeft === 0) {
        // Ensure locked dice points are updated correctly after the final roll
        updatePointsAndChords();
        rollButton.style.display = "none"; // Hide the roll button
        nextTurnButton.style.display = "inline-block"; // Show the next turn button
      }
    }
  });

  resetTurnButton.addEventListener("click", () => {
    showModal("Are you sure you want to reset the turn?", () => {
      createDiceElements();
      rollsLeft = 3;
      updateRollsLeftIndicator();
      updatePointsAndChords();
      rollButton.style.display = "inline-block"; // Show the roll button
      nextTurnButton.style.display = "none"; // Hide the next turn button
    });
  });

  nextTurnButton.addEventListener("click", () => {
    const chord = identifyChord(
      Array.from(document.getElementsByClassName("locked")).map(
        (dice) => dice.querySelector(".face1").textContent
      )
    );
    const chordPointsValue = chordPoints[chord] || 0;
    const totalTurnPoints =
      chordPointsValue > 0
        ? parseFloat(totalPointsLocked.textContent) + chordPointsValue
        : 0;
    playerScores[currentPlayer] += totalTurnPoints;
    updateChordPointsTable(chord, currentPlayer);
    currentPlayer = (currentPlayer + 1) % playerScores.length;
    updatePlayerDisplays();
    if (currentPlayer === 0) {
      turnCounter++;
      turnCounterDisplay.textContent = `Turn: ${turnCounter}`;
    }
    createDiceElements();
    rollsLeft = 3;
    updateRollsLeftIndicator();
    updatePointsAndChords();
    rollButton.style.display = "inline-block"; // Show the roll button
    nextTurnButton.style.display = "none"; // Hide the next turn button
  });

  resetGameButton.addEventListener("click", () => {
    showModal("Are you sure you want to reset the game?", () => {
      playerScores.fill(0);
      currentPlayer = 0;
      turnCounter = 1;
      turnCounterDisplay.textContent = `Turn: ${turnCounter}`;
      updatePlayerDisplays();
      resetTurnButton.click();
      gameStarted = false;
      unlockPlayerInputs();
      createChordPointsTable();
    });
  });

  // Initial setup
  createDiceElements();
  updateRollsLeftIndicator();
  updatePointsAndChords();
  updatePlayerNamesInputs();
  updatePlayerDisplays();
  createChordPointsTable();
});