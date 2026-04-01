const ALL_DICE_FACES = [
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

const FACE_VALUES = {
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

const NOTE_VALUES = {
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

const CHORD_INTERVALS = {
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

const BASE_CHORD_POINTS = {
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
  "Whole Step Series": 200,
  "Chromatic Scale": 300
};

const TRIAD_TYPES = [
  "major triad",
  "minor triad",
  "diminished triad",
  "augmented triad",
  "sus4 triad"
];

const FEATURED_SEVENTH_TYPES = [
  "minor major 7th chord",
  "major 7th chord",
  "half diminished 7th chord",
  "minor 7th chord",
  "dominant 7th chord"
];

const ALL_SEVENTH_TYPES = [...FEATURED_SEVENTH_TYPES, "fully diminished 7th chord"];

const EXTENDED_TYPES = [
  "Major 9",
  "Minor 9",
  "Dominant b9",
  "Dominant 9",
  "Dominant #9",
  "Pentatonic Scale",
  "Whole Step Series",
  "Chromatic Scale"
];

const PLAYER_COLORS = [
  "#d43d2d",
  "#2053b8",
  "#17735f",
  "#c76b12",
  "#7e36a1",
  "#8b4c2f",
  "#0f6d7a",
  "#c4447f",
  "#435aa3",
  "#5a6538"
];

const BONUS_DEFINITIONS = [
  {
    id: "allTriads",
    settingKey: "bonusAllTriads",
    label: "Triad Grand Slam",
    points: 75,
    description: "Collect all 5 triad types.",
    qualifies(uniqueChords) {
      return TRIAD_TYPES.every((type) => uniqueChords.has(type));
    }
  },
  {
    id: "fourSevenths",
    settingKey: "bonusFourSevenths",
    label: "Seventh Chord Specialist",
    points: 90,
    description: "Collect any 4 of the 5 featured 7th chords.",
    qualifies(uniqueChords) {
      return FEATURED_SEVENTH_TYPES.filter((type) => uniqueChords.has(type)).length >= 4;
    }
  },
  {
    id: "allFamilies",
    settingKey: "bonusAllFamilies",
    label: "Theory Traveler",
    points: 50,
    description: "Collect at least one triad, one 7th chord, and one extended pattern.",
    qualifies(uniqueChords) {
      const hasTriad = TRIAD_TYPES.some((type) => uniqueChords.has(type));
      const hasSeventh = ALL_SEVENTH_TYPES.some((type) => uniqueChords.has(type));
      const hasExtended = EXTENDED_TYPES.some((type) => uniqueChords.has(type));
      return hasTriad && hasSeventh && hasExtended;
    }
  },
  {
    id: "extendedPalette",
    settingKey: "bonusExtendedPalette",
    label: "Color Collector",
    points: 65,
    description: "Collect any 3 distinct 9th or scale patterns.",
    qualifies(uniqueChords) {
      return EXTENDED_TYPES.filter((type) => uniqueChords.has(type)).length >= 3;
    }
  }
];

const DEFAULT_SETTINGS = {
  includeAccidentals: true,
  numberOfDice: 4,
  numberOfPlayers: 2,
  playerNames: ["Player 1", "Player 2"],
  allowRepeatedChordTypes: true,
  winCondition: "rounds",
  roundLimit: 6,
  targetScore: 250,
  enableBonuses: true,
  bonusAllTriads: true,
  bonusFourSevenths: true,
  bonusAllFamilies: true,
  bonusExtendedPalette: true,
  enableSoundEffects: true
};

let settingsConfigured = false;
let activeSettings = cloneSettings(DEFAULT_SETTINGS);
let draftPlayerNames = [...DEFAULT_SETTINGS.playerNames];
let currentPlayer = 0;
let roundNumber = 1;
let rollsLeft = 3;
let diceState = [];
let playerScores = [];
let playerChordCounts = [];
let playerUniqueChords = [];
let playerAwardedBonuses = [];
let gameStarted = false;
let gameOver = false;
let rollInProgress = false;
let pendingConfirmAction = null;
let pendingCancelAction = null;
let audioContext = null;

const elements = {};

document.addEventListener("DOMContentLoaded", () => {
  cacheElements();
  bindEvents();
  populateSettingsForm(activeSettings);
  createFreshGameFromSettings(activeSettings, false);
  render();
  openSettingsModal();
});

function cacheElements() {
  elements.rollButton = document.getElementById("roll");
  elements.nextTurnButton = document.getElementById("nextTurn");
  elements.resetTurnButton = document.getElementById("resetTurn");
  elements.resetGameButton = document.getElementById("resetGame");
  elements.settingsButton = document.getElementById("settingsButton");
  elements.quickSettingsButton = document.getElementById("quickSettingsButton");
  elements.mainMenuButton = document.getElementById("mainMenuButton");
  elements.mainMenuDropdown = document.getElementById("mainMenuDropdown");
  elements.diceContainer = document.getElementById("diceContainer");
  elements.rollsLeft = document.getElementById("rollsLeft");
  elements.totalPointsVisible = document.getElementById("totalPointsVisible");
  elements.totalPointsLocked = document.getElementById("totalPointsLocked");
  elements.projectedTurnPoints = document.getElementById("projectedTurnPoints");
  elements.chordDisplay = document.getElementById("chordDisplay");
  elements.turnBreakdown = document.getElementById("turnBreakdown");
  elements.bonusAnnouncement = document.getElementById("bonusAnnouncement");
  elements.currentPlayer = document.getElementById("currentPlayer");
  elements.turnCounter = document.getElementById("turnCounter");
  elements.playerScores = document.getElementById("playerScores");
  elements.winConditionDisplay = document.getElementById("winConditionDisplay");
  elements.settingsStatus = document.getElementById("settingsStatus");
  elements.settingsSummary = document.getElementById("settingsSummary");
  elements.settingsRequirement = document.getElementById("settingsRequirement");
  elements.bonusTableStatus = document.getElementById("bonusTableStatus");
  elements.chordPointsTable = document.getElementById("chordPointsTable");
  elements.bonusTable = document.getElementById("bonusTable");

  elements.confirmationModal = document.getElementById("confirmationModal");
  elements.modalEyebrow = document.getElementById("modalEyebrow");
  elements.modalTitle = document.getElementById("modalTitle");
  elements.modalMessage = document.getElementById("modalMessage");
  elements.confirmButton = document.getElementById("confirmButton");
  elements.cancelButton = document.getElementById("cancelButton");
  elements.closeModalButton = document.getElementById("closeModal");

  elements.settingsModal = document.getElementById("settingsModal");
  elements.settingsForm = document.getElementById("settingsForm");
  elements.closeSettingsModalButton = document.getElementById("closeSettingsModal");
  elements.settingsWarning = document.getElementById("settingsWarning");
  elements.includeAccidentals = document.getElementById("includeAccidentals");
  elements.numberOfDiceInputs = document.querySelectorAll('input[name="numberOfDice"]');
  elements.numberOfPlayers = document.getElementById("numberOfPlayers");
  elements.playerNamesContainer = document.getElementById("playerNamesContainer");
  elements.allowRepeatedChordTypes = document.getElementById("allowRepeatedChordTypes");
  elements.winCondition = document.getElementById("winCondition");
  elements.roundLimit = document.getElementById("roundLimit");
  elements.targetScore = document.getElementById("targetScore");
  elements.roundLimitField = document.getElementById("roundLimitField");
  elements.targetScoreField = document.getElementById("targetScoreField");
  elements.enableBonuses = document.getElementById("enableBonuses");
  elements.bonusOptions = document.getElementById("bonusOptions");
  elements.bonusAllTriads = document.getElementById("bonusAllTriads");
  elements.bonusFourSevenths = document.getElementById("bonusFourSevenths");
  elements.bonusAllFamilies = document.getElementById("bonusAllFamilies");
  elements.bonusExtendedPalette = document.getElementById("bonusExtendedPalette");
  elements.enableSoundEffects = document.getElementById("enableSoundEffects");
}

function bindEvents() {
  elements.rollButton.addEventListener("click", handleRoll);
  elements.nextTurnButton.addEventListener("click", handleScoreTurn);
  elements.resetTurnButton.addEventListener("click", handleResetTurn);
  elements.resetGameButton.addEventListener("click", handleResetGame);
  elements.settingsButton.addEventListener("click", openSettingsModal);
  elements.quickSettingsButton.addEventListener("click", openSettingsModal);

  elements.mainMenuButton.addEventListener("click", () => {
    elements.mainMenuDropdown.style.display =
      elements.mainMenuDropdown.style.display === "block" ? "none" : "block";
  });

  document.addEventListener("click", (event) => {
    const clickedInsideMenu =
      elements.mainMenuButton.contains(event.target) ||
      elements.mainMenuDropdown.contains(event.target);

    if (!clickedInsideMenu) {
      elements.mainMenuDropdown.style.display = "none";
    }
  });

  elements.closeModalButton.addEventListener("click", closeConfirmationModal);
  elements.cancelButton.addEventListener("click", () => {
    if (typeof pendingCancelAction === "function") {
      pendingCancelAction();
    }
    closeConfirmationModal();
  });
  elements.confirmButton.addEventListener("click", () => {
    const action = pendingConfirmAction;
    closeConfirmationModal();
    if (typeof action === "function") {
      action();
    }
  });

  elements.closeSettingsModalButton.addEventListener("click", closeSettingsModal);
  elements.settingsModal.addEventListener("click", (event) => {
    if (event.target === elements.settingsModal) {
      closeSettingsModal();
    }
  });
  elements.confirmationModal.addEventListener("click", (event) => {
    if (event.target === elements.confirmationModal) {
      closeConfirmationModal();
    }
  });

  elements.numberOfPlayers.addEventListener("input", () => {
    syncPlayerNameInputs(readClampedPlayerCount());
  });

  elements.winCondition.addEventListener("change", updateSettingsFormVisibility);
  elements.enableBonuses.addEventListener("change", updateSettingsFormVisibility);
  elements.settingsForm.addEventListener("submit", handleSaveSettings);
}

function handleSaveSettings(event) {
  event.preventDefault();
  const nextSettings = getSettingsFromForm();

  if (!nextSettings) {
    return;
  }

  if (!settingsConfigured) {
    applySettings(nextSettings);
    closeSettingsModal();
    return;
  }

  const settingsChanged = JSON.stringify(nextSettings) !== JSON.stringify(activeSettings);

  if (!settingsChanged) {
    elements.settingsWarning.textContent = "No changes to apply.";
    return;
  }

  if (isMidGame()) {
    showConfirmationModal({
      eyebrow: "Start a new game?",
      title: "Apply new settings",
      message:
        "Changing settings now will reset scores, rounds, and collected chord bonuses. Continue?",
      confirmText: "Start New Game",
      cancelText: "Keep Current Game",
      onConfirm: () => {
        applySettings(nextSettings);
        closeSettingsModal();
      }
    });
    return;
  }

  applySettings(nextSettings);
  closeSettingsModal();
}

function handleRoll() {
  if (!settingsConfigured || gameOver || rollInProgress || rollsLeft <= 0) {
    return;
  }

  gameStarted = true;
  rollInProgress = true;
  playSoundEffect("roll");

  const unlockedIndices = [];
  diceState.forEach((die, index) => {
    if (!die.locked) {
      unlockedIndices.push(index);
    }
  });

  if (unlockedIndices.length === 0) {
    rollInProgress = false;
    elements.turnBreakdown.textContent = "All dice are locked. Score the turn or unlock a note.";
    render();
    return;
  }

  renderDice(unlockedIndices);

  window.setTimeout(() => {
    const availableFaces = getAvailableDiceFaces();

    unlockedIndices.forEach((index) => {
      diceState[index].note = availableFaces[Math.floor(Math.random() * availableFaces.length)];
    });

    rollsLeft -= 1;
    rollInProgress = false;
    render();
  }, 550);
}

function handleScoreTurn() {
  if (!settingsConfigured || gameOver || rollInProgress || rollsLeft > 0) {
    return;
  }

  const preview = evaluateCurrentTurn();
  const scoringPlayer = currentPlayer;

  if (preview.scoredChord) {
    playerChordCounts[scoringPlayer][preview.chord] += 1;
    playerUniqueChords[scoringPlayer].add(preview.chord);
  }

  playerScores[scoringPlayer] += preview.totalPoints;

  if (preview.bonusAwards.length > 0) {
    preview.bonusAwards.forEach((bonus) => {
      playerAwardedBonuses[scoringPlayer].add(bonus.id);
    });
    playSoundEffect("bonus");
  }

  const summaryParts = [];
  if (preview.chord === "None") {
    summaryParts.push(`${activeSettings.playerNames[scoringPlayer]} locked no scoring chord.`);
  } else if (preview.repeatedChordBlocked) {
    summaryParts.push(
      `${activeSettings.playerNames[scoringPlayer]} repeated ${preview.chord}, so the turn scores 0.`
    );
  } else {
    summaryParts.push(
      `${activeSettings.playerNames[scoringPlayer]} scored ${formatPoints(preview.lockedPoints)} locked-note points + ${formatPoints(preview.chordPoints)} chord points.`
    );
  }

  if (preview.bonusAwards.length > 0) {
    summaryParts.push(
      `Bonus unlocked: ${preview.bonusAwards
        .map((bonus) => `${bonus.label} (+${formatPoints(bonus.points)})`)
        .join(", ")}.`
    );
  }

  elements.turnBreakdown.textContent = summaryParts.join(" ");
  elements.bonusAnnouncement.textContent =
    preview.bonusAwards.length > 0
      ? `${activeSettings.playerNames[scoringPlayer]} earned ${formatPoints(preview.bonusPoints)} bonus points this turn.`
      : "";

  if (checkForWinner(scoringPlayer)) {
    render();
    return;
  }

  currentPlayer = (currentPlayer + 1) % activeSettings.numberOfPlayers;
  if (currentPlayer === 0) {
    roundNumber += 1;
  }

  startNewTurn();
  render();
}

function handleResetTurn() {
  if (!settingsConfigured) {
    openSettingsModal();
    return;
  }

  showConfirmationModal({
    eyebrow: "Reset turn",
    title: "Start this turn over?",
    message: "This clears the current dice and restores all 3 rolls for the active player.",
    confirmText: "Reset Turn",
    cancelText: "Keep Turn",
    onConfirm: () => {
      startNewTurn();
      render();
    }
  });
}

function handleResetGame() {
  showConfirmationModal({
    eyebrow: "Reset match",
    title: "Reset the full game?",
    message: "Scores, round progress, and collected bonuses will all be cleared.",
    confirmText: "Reset Game",
    cancelText: "Cancel",
    onConfirm: () => {
      createFreshGameFromSettings(activeSettings, settingsConfigured);
      render();
    }
  });
}

function toggleDieLock(index) {
  if (!settingsConfigured || gameOver || rollInProgress || rollsLeft === 3) {
    return;
  }

  if (!diceState[index].note) {
    return;
  }

  diceState[index].locked = !diceState[index].locked;
  playSoundEffect(diceState[index].locked ? "lock" : "unlock");
  render();
}

function createFreshGameFromSettings(settings, configured) {
  activeSettings = cloneSettings(settings);
  settingsConfigured = configured;
  currentPlayer = 0;
  roundNumber = 1;
  rollsLeft = 3;
  gameStarted = false;
  gameOver = false;
  rollInProgress = false;
  diceState = Array.from({ length: activeSettings.numberOfDice }, () => ({
    note: "",
    locked: false
  }));
  playerScores = Array.from({ length: activeSettings.numberOfPlayers }, () => 0);
  playerChordCounts = Array.from({ length: activeSettings.numberOfPlayers }, () =>
    createChordCountMap()
  );
  playerUniqueChords = Array.from({ length: activeSettings.numberOfPlayers }, () => new Set());
  playerAwardedBonuses = Array.from({ length: activeSettings.numberOfPlayers }, () => new Set());
  elements.turnBreakdown.textContent = "";
  elements.bonusAnnouncement.textContent = "";
}

function applySettings(nextSettings) {
  createFreshGameFromSettings(nextSettings, true);
  populateSettingsForm(activeSettings);
  render();
}

function startNewTurn() {
  rollsLeft = 3;
  rollInProgress = false;
  diceState = Array.from({ length: activeSettings.numberOfDice }, () => ({
    note: "",
    locked: false
  }));
}

function render() {
  renderDice();
  renderStatus();
  renderScoreboard();
  renderChordTable();
  renderBonusTable();
  renderButtons();
}

function renderStatus() {
  const preview = evaluateCurrentTurn();
  const visibleTotal = diceState.reduce((sum, die) => sum + (FACE_VALUES[die.note] || 0), 0);
  const lockedNotes = getLockedNotes();
  const lockedTotal = lockedNotes.reduce((sum, note) => sum + (FACE_VALUES[note] || 0), 0);

  elements.rollsLeft.textContent = String(rollsLeft);
  elements.totalPointsVisible.textContent = formatPoints(visibleTotal);
  elements.totalPointsLocked.textContent = formatPoints(lockedTotal);
  elements.projectedTurnPoints.textContent = formatPoints(preview.totalPoints);

  if (preview.chord === "None") {
    elements.chordDisplay.textContent =
      lockedNotes.length === 0
        ? "Lock notes after your first roll to start building a chord."
        : "Current lock-in does not match a scoring chord yet.";
  } else {
    elements.chordDisplay.textContent = `${preview.chord} detected. Base chord value: ${formatPoints(preview.chordPoints)}.`;
  }

  if (preview.chord === "None") {
    elements.turnBreakdown.textContent =
      elements.turnBreakdown.textContent || "No chord points will score unless the locked notes form a valid shape.";
  } else if (preview.repeatedChordBlocked) {
    elements.turnBreakdown.textContent = `Repeated chord scoring is disabled, so ${preview.chord} would be worth 0 this turn.`;
  } else {
    const bonusText =
      preview.bonusAwards.length > 0
        ? ` Potential bonus: ${preview.bonusAwards
            .map((bonus) => `${bonus.label} (+${formatPoints(bonus.points)})`)
            .join(", ")}.`
        : "";

    elements.turnBreakdown.textContent = `Projected score: ${formatPoints(preview.lockedPoints)} locked-note points + ${formatPoints(preview.chordPoints)} chord points${bonusText}`;
  }

  if (!settingsConfigured) {
    elements.settingsStatus.textContent = "Settings required before the game can begin.";
    elements.settingsRequirement.textContent = "Open Settings and press Save Settings to unlock the Roll button.";
  } else if (gameOver) {
    elements.settingsStatus.textContent = "Match complete.";
    elements.settingsRequirement.textContent = "Change settings or reset the game to play again.";
  } else {
    elements.settingsStatus.textContent = "Ready to play.";
    elements.settingsRequirement.textContent = "";
  }

  elements.settingsSummary.textContent = buildSettingsSummary(activeSettings);
  elements.winConditionDisplay.textContent = buildWinConditionLabel(activeSettings);
  elements.turnCounter.textContent =
    activeSettings.winCondition === "rounds"
      ? `Round ${roundNumber} of ${activeSettings.roundLimit}`
      : `Round ${roundNumber}`;
  elements.currentPlayer.innerHTML = `Current Player: <span style="color:${PLAYER_COLORS[currentPlayer]}">${escapeHtml(
    activeSettings.playerNames[currentPlayer]
  )}</span>`;
  elements.bonusTableStatus.textContent = activeSettings.enableBonuses
    ? "Bonus awards are enabled."
    : "Bonus awards are turned off for this match.";
}

function renderScoreboard() {
  elements.playerScores.innerHTML = playerScores
    .map((score, index) => {
      const isActive = index === currentPlayer && !gameOver;
      return `
        <div class="score-pill${isActive ? " is-active" : ""}">
          <span class="score-pill-name" style="color:${PLAYER_COLORS[index]}">${escapeHtml(
            activeSettings.playerNames[index]
          )}</span>
          <span class="score-pill-score">${formatPoints(score)}</span>
        </div>
      `;
    })
    .join("");
}

function renderButtons() {
  const hasOpenTurn = diceState.some((die) => die.note);

  elements.rollButton.disabled =
    !settingsConfigured || gameOver || rollInProgress || rollsLeft <= 0;
  elements.nextTurnButton.disabled =
    !settingsConfigured || gameOver || rollInProgress || rollsLeft > 0;
  elements.resetTurnButton.disabled = !settingsConfigured || gameOver || (!gameStarted && !hasOpenTurn);
  elements.resetGameButton.disabled = !settingsConfigured && !gameStarted;
}

function renderDice(rollingIndices = []) {
  elements.diceContainer.innerHTML = "";
  diceState.forEach((die, index) => {
    const dieButton = document.createElement("button");
    dieButton.type = "button";
    dieButton.className = "dice";
    if (die.locked) {
      dieButton.classList.add("is-locked");
    }
    if (rollingIndices.includes(index)) {
      dieButton.classList.add("is-rolling");
    }

    dieButton.innerHTML = `
      <span class="dice-note">${die.note || "♪"}</span>
      <span class="dice-subtext">${
        die.note ? (die.locked ? "Held for scoring" : "Tap to hold") : "Waiting for roll"
      }</span>
    `;

    dieButton.addEventListener("click", () => toggleDieLock(index));
    elements.diceContainer.appendChild(dieButton);
  });
}

function renderChordTable() {
  const headers = [
    "<tr><th>Chord Type</th><th>Base Points</th>",
    ...activeSettings.playerNames.map((name) => `<th>${escapeHtml(name)}</th>`),
    "</tr>"
  ].join("");

  const body = Object.keys(BASE_CHORD_POINTS)
    .map((chord) => {
      const playerCells = playerChordCounts
        .map((countMap) => {
          const count = countMap[chord];
          return count > 0
            ? `<td class="claimed-cell">${count === 1 ? "✓" : `${count}x`}</td>`
            : "<td></td>";
        })
        .join("");

      return `
        <tr>
          <td>${escapeHtml(chord)}</td>
          <td>${formatPoints(BASE_CHORD_POINTS[chord])}</td>
          ${playerCells}
        </tr>
      `;
    })
    .join("");

  elements.chordPointsTable.querySelector("thead").innerHTML = headers;
  elements.chordPointsTable.querySelector("tbody").innerHTML = body;
}

function renderBonusTable() {
  const headers = [
    "<tr><th>Bonus</th><th>Value</th>",
    ...activeSettings.playerNames.map((name) => `<th>${escapeHtml(name)}</th>`),
    "</tr>"
  ].join("");

  const body = BONUS_DEFINITIONS.map((bonus) => {
    const enabled = activeSettings.enableBonuses && activeSettings[bonus.settingKey];
    const playerCells = playerAwardedBonuses
      .map((awards) => {
        return awards.has(bonus.id)
          ? `<td class="claimed-cell">+${formatPoints(bonus.points)}</td>`
          : "<td></td>";
      })
      .join("");

    return `
      <tr class="${enabled ? "" : "bonus-disabled"}">
        <td>
          ${escapeHtml(bonus.label)}
          <span class="table-note">${escapeHtml(bonus.description)}</span>
        </td>
        <td>${enabled ? `+${formatPoints(bonus.points)}` : "Off"}</td>
        ${playerCells}
      </tr>
    `;
  }).join("");

  elements.bonusTable.querySelector("thead").innerHTML = headers;
  elements.bonusTable.querySelector("tbody").innerHTML = body;
}

function populateSettingsForm(settings) {
  draftPlayerNames = [...settings.playerNames];
  elements.includeAccidentals.checked = settings.includeAccidentals;
  elements.numberOfDiceInputs.forEach((input) => {
    input.checked = Number(input.value) === settings.numberOfDice;
  });
  elements.numberOfPlayers.value = String(settings.numberOfPlayers);
  elements.allowRepeatedChordTypes.checked = settings.allowRepeatedChordTypes;
  elements.winCondition.value = settings.winCondition;
  elements.roundLimit.value = String(settings.roundLimit);
  elements.targetScore.value = String(settings.targetScore);
  elements.enableBonuses.checked = settings.enableBonuses;
  elements.bonusAllTriads.checked = settings.bonusAllTriads;
  elements.bonusFourSevenths.checked = settings.bonusFourSevenths;
  elements.bonusAllFamilies.checked = settings.bonusAllFamilies;
  elements.bonusExtendedPalette.checked = settings.bonusExtendedPalette;
  elements.enableSoundEffects.checked = settings.enableSoundEffects;
  syncPlayerNameInputs(settings.numberOfPlayers);
  updateSettingsFormVisibility();
  elements.settingsWarning.textContent = "";
}

function syncPlayerNameInputs(count) {
  while (draftPlayerNames.length < count) {
    draftPlayerNames.push(`Player ${draftPlayerNames.length + 1}`);
  }
  draftPlayerNames = draftPlayerNames.slice(0, count);

  elements.playerNamesContainer.innerHTML = "";
  draftPlayerNames.forEach((name, index) => {
    const input = document.createElement("input");
    input.type = "text";
    input.value = name;
    input.placeholder = `Player ${index + 1} Name`;
    input.addEventListener("input", (event) => {
      draftPlayerNames[index] = event.target.value;
    });
    elements.playerNamesContainer.appendChild(input);
  });
}

function updateSettingsFormVisibility() {
  const showRounds = elements.winCondition.value === "rounds";
  elements.roundLimitField.style.display = showRounds ? "block" : "none";
  elements.targetScoreField.style.display = showRounds ? "none" : "block";

  const bonusesEnabled = elements.enableBonuses.checked;
  elements.bonusOptions.classList.toggle("is-disabled", !bonusesEnabled);
  Array.from(elements.bonusOptions.querySelectorAll("input")).forEach((input) => {
    input.disabled = !bonusesEnabled;
  });
}

function getSettingsFromForm() {
  const numberOfPlayers = readClampedPlayerCount();
  const selectedDice = Array.from(elements.numberOfDiceInputs).find((input) => input.checked);
  const roundLimit = Math.max(1, Number.parseInt(elements.roundLimit.value, 10) || 1);
  const targetScore = Math.max(25, Number.parseInt(elements.targetScore.value, 10) || 25);

  if (!selectedDice) {
    elements.settingsWarning.textContent = "Choose how many dice you want to play with.";
    return null;
  }

  const playerNames = draftPlayerNames
    .slice(0, numberOfPlayers)
    .map((name, index) => name.trim() || `Player ${index + 1}`);

  elements.settingsWarning.textContent = "";

  return {
    includeAccidentals: elements.includeAccidentals.checked,
    numberOfDice: Number.parseInt(selectedDice.value, 10),
    numberOfPlayers,
    playerNames,
    allowRepeatedChordTypes: elements.allowRepeatedChordTypes.checked,
    winCondition: elements.winCondition.value,
    roundLimit,
    targetScore,
    enableBonuses: elements.enableBonuses.checked,
    bonusAllTriads: elements.bonusAllTriads.checked,
    bonusFourSevenths: elements.bonusFourSevenths.checked,
    bonusAllFamilies: elements.bonusAllFamilies.checked,
    bonusExtendedPalette: elements.bonusExtendedPalette.checked,
    enableSoundEffects: elements.enableSoundEffects.checked
  };
}

function readClampedPlayerCount() {
  const raw = Number.parseInt(elements.numberOfPlayers.value, 10) || DEFAULT_SETTINGS.numberOfPlayers;
  return Math.min(10, Math.max(1, raw));
}

function openSettingsModal() {
  elements.mainMenuDropdown.style.display = "none";
  elements.settingsModal.classList.add("is-open");
  elements.settingsModal.setAttribute("aria-hidden", "false");
}

function closeSettingsModal() {
  elements.settingsModal.classList.remove("is-open");
  elements.settingsModal.setAttribute("aria-hidden", "true");
}

function showConfirmationModal({
  eyebrow = "Please confirm",
  title,
  message,
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  onCancel
}) {
  elements.modalEyebrow.textContent = eyebrow;
  elements.modalTitle.textContent = title;
  elements.modalMessage.textContent = message;
  elements.confirmButton.textContent = confirmText;
  elements.cancelButton.textContent = cancelText;
  pendingConfirmAction = onConfirm;
  pendingCancelAction = onCancel || null;
  elements.confirmationModal.classList.add("is-open");
  elements.confirmationModal.setAttribute("aria-hidden", "false");
}

function closeConfirmationModal() {
  elements.confirmationModal.classList.remove("is-open");
  elements.confirmationModal.setAttribute("aria-hidden", "true");
  pendingConfirmAction = null;
  pendingCancelAction = null;
}

function getAvailableDiceFaces() {
  if (activeSettings.includeAccidentals) {
    return [...ALL_DICE_FACES];
  }

  return ALL_DICE_FACES.filter((face) => !face.includes("#") && !face.includes("/"));
}

function getLockedNotes() {
  return diceState.filter((die) => die.locked && die.note).map((die) => die.note);
}

function calculateIntervals(diceValues) {
  const sortedValues = diceValues
    .map((note) => NOTE_VALUES[note])
    .sort((a, b) => a - b);

  if (sortedValues.length === 0) {
    return [];
  }

  const baseValue = sortedValues[0];
  return sortedValues.map((value) => (value - baseValue + 12) % 12);
}

function identifyChord(diceValues) {
  const intervals = calculateIntervals(diceValues);

  for (const chord of Object.keys(CHORD_INTERVALS)) {
    for (const inversion of CHORD_INTERVALS[chord]) {
      if (inversion.toString() === intervals.toString()) {
        return chord;
      }
    }
  }

  return "None";
}

function evaluateCurrentTurn() {
  const lockedNotes = getLockedNotes();
  const chord = identifyChord(lockedNotes);
  const lockedPoints = lockedNotes.reduce((sum, note) => sum + (FACE_VALUES[note] || 0), 0);
  const chordPoints = chord === "None" ? 0 : BASE_CHORD_POINTS[chord] || 0;
  const repeatedChordBlocked =
    chord !== "None" &&
    !activeSettings.allowRepeatedChordTypes &&
    playerChordCounts[currentPlayer][chord] > 0;

  if (chord === "None" || repeatedChordBlocked) {
    return {
      chord,
      lockedPoints,
      chordPoints,
      repeatedChordBlocked,
      scoredChord: false,
      bonusAwards: [],
      bonusPoints: 0,
      totalPoints: 0
    };
  }

  const bonusAwards = findNewBonuses(currentPlayer, chord);
  const bonusPoints = bonusAwards.reduce((sum, bonus) => sum + bonus.points, 0);

  return {
    chord,
    lockedPoints,
    chordPoints,
    repeatedChordBlocked: false,
    scoredChord: chord !== "None",
    bonusAwards,
    bonusPoints,
    totalPoints: lockedPoints + chordPoints + bonusPoints
  };
}

function findNewBonuses(playerIndex, prospectiveChord) {
  if (!activeSettings.enableBonuses || prospectiveChord === "None") {
    return [];
  }

  const uniqueChords = new Set(playerUniqueChords[playerIndex]);
  uniqueChords.add(prospectiveChord);

  return BONUS_DEFINITIONS.filter((bonus) => {
    return (
      activeSettings[bonus.settingKey] &&
      !playerAwardedBonuses[playerIndex].has(bonus.id) &&
      bonus.qualifies(uniqueChords)
    );
  });
}

function checkForWinner(scoringPlayer) {
  if (activeSettings.winCondition === "target") {
    if (playerScores[scoringPlayer] >= activeSettings.targetScore) {
      concludeGame([scoringPlayer], `${activeSettings.playerNames[scoringPlayer]} hit the target score.`);
      return true;
    }
    return false;
  }

  const finishedRound = scoringPlayer === activeSettings.numberOfPlayers - 1;
  if (!finishedRound || roundNumber < activeSettings.roundLimit) {
    return false;
  }

  const highestScore = Math.max(...playerScores);
  const winners = playerScores
    .map((score, index) => ({ score, index }))
    .filter((entry) => entry.score === highestScore)
    .map((entry) => entry.index);

  concludeGame(
    winners,
    winners.length === 1
      ? `${activeSettings.playerNames[winners[0]]} finished on top after ${activeSettings.roundLimit} rounds.`
      : `The game ends in a tie after ${activeSettings.roundLimit} rounds.`
  );
  return true;
}

function concludeGame(winnerIndices, message) {
  gameOver = true;
  playSoundEffect("win");
  const winnerNames = winnerIndices.map((index) => activeSettings.playerNames[index]).join(", ");

  showConfirmationModal({
    eyebrow: "Game over",
    title: winnerIndices.length === 1 ? `${winnerNames} wins!` : "It is a tie!",
    message: `${message} Final scores: ${activeSettings.playerNames
      .map((name, index) => `${name} ${formatPoints(playerScores[index])}`)
      .join(" | ")}`,
    confirmText: "Start Fresh Game",
    cancelText: "Close",
    onConfirm: () => {
      createFreshGameFromSettings(activeSettings, true);
      render();
    }
  });
}

function createChordCountMap() {
  return Object.keys(BASE_CHORD_POINTS).reduce((map, chord) => {
    map[chord] = 0;
    return map;
  }, {});
}

function buildSettingsSummary(settings) {
  const pitchPool = settings.includeAccidentals ? "Accidentals on" : "Naturals only";
  const repeatRule = settings.allowRepeatedChordTypes
    ? "Repeated chords can score again"
    : "Repeated chords score 0";
  const bonusRule = settings.enableBonuses ? "Bonuses on" : "Bonuses off";
  return `${settings.numberOfDice} dice, ${settings.numberOfPlayers} players, ${pitchPool}, ${repeatRule}, ${bonusRule}, sound ${
    settings.enableSoundEffects ? "on" : "off"
  }.`;
}

function buildWinConditionLabel(settings) {
  return settings.winCondition === "rounds"
    ? `Highest score after ${settings.roundLimit} rounds`
    : `First player to ${formatPoints(settings.targetScore)} points`;
}

function formatPoints(value) {
  if (Number.isInteger(value)) {
    return String(value);
  }

  return value.toFixed(1).replace(/\.0$/, "");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function cloneSettings(settings) {
  return JSON.parse(JSON.stringify(settings));
}

function isMidGame() {
  return (
    gameStarted &&
    !gameOver &&
    (roundNumber > 1 ||
      rollsLeft < 3 ||
      playerScores.some((score) => score > 0) ||
      playerChordCounts.some((countMap) => Object.values(countMap).some((count) => count > 0)))
  );
}

function playSoundEffect(type) {
  if (!activeSettings.enableSoundEffects) {
    return;
  }

  const sequences = {
    roll: [260, 320, 415],
    lock: [660],
    unlock: [520],
    bonus: [523, 659, 784],
    win: [392, 523, 659, 784]
  };

  const sequence = sequences[type];
  if (!sequence) {
    return;
  }

  try {
    if (!audioContext) {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }

    if (audioContext.state === "suspended") {
      void audioContext.resume();
    }

    const startTime = audioContext.currentTime;
    sequence.forEach((frequency, index) => {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      oscillator.type = type === "roll" ? "triangle" : "sine";
      oscillator.frequency.value = frequency;
      gainNode.gain.setValueAtTime(0.0001, startTime + index * 0.08);
      gainNode.gain.exponentialRampToValueAtTime(0.035, startTime + index * 0.08 + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, startTime + index * 0.08 + 0.14);
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      oscillator.start(startTime + index * 0.08);
      oscillator.stop(startTime + index * 0.08 + 0.15);
    });
  } catch (error) {
    console.warn("Sound playback unavailable.", error);
  }
}
