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

const NOTE_FREQUENCIES = {
  C: 261.63,
  "C#/Db": 277.18,
  D: 293.66,
  "D#/Eb": 311.13,
  E: 329.63,
  F: 349.23,
  "F#/Gb": 369.99,
  G: 392.0,
  "G#/Ab": 415.3,
  A: 440.0,
  "A#/Bb": 466.16,
  B: 493.88
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
    minDice: 3,
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
    minDice: 4,
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
    minDice: 5,
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
    minDice: 5,
    label: "Color Collector",
    points: 65,
    description: "Collect any 3 distinct 9th or scale patterns.",
    qualifies(uniqueChords) {
      return EXTENDED_TYPES.filter((type) => uniqueChords.has(type)).length >= 3;
    }
  }
];

const REPEAT_MILESTONE_DEFINITIONS = [
  {
    id: "sameTriadFiveTimes",
    idPrefix: "repeatTriad",
    settingKey: "bonusSameTriadFiveTimes",
    minDice: 3,
    label: "Triad Specialist",
    points: 100,
    noteCount: 3,
    description: "Score the same 3-note chord type 5 times."
  },
  {
    id: "sameSeventhFiveTimes",
    idPrefix: "repeatSeventh",
    settingKey: "bonusSameSeventhFiveTimes",
    minDice: 4,
    label: "Seventh Specialist",
    points: 135,
    noteCount: 4,
    description: "Score the same 4-note chord type 5 times."
  },
  {
    id: "sameExtendedFiveTimes",
    idPrefix: "repeatExtended",
    settingKey: "bonusSameExtendedFiveTimes",
    minDice: 5,
    label: "Extended Specialist",
    points: 170,
    noteCount: 5,
    description: "Score the same 5-note chord type 5 times."
  }
];

const CHORD_NOTE_COUNTS = Object.fromEntries(
  Object.keys(CHORD_INTERVALS).map((chord) => [chord, CHORD_INTERVALS[chord][0].length])
);

const ROOT_POSITION_INTERVALS = {
  "major triad": [0, 4, 7],
  "minor triad": [0, 3, 7],
  "diminished triad": [0, 3, 6],
  "augmented triad": [0, 4, 8],
  "sus4 triad": [0, 5, 7],
  "minor major 7th chord": [0, 3, 7, 11],
  "major 7th chord": [0, 4, 7, 11],
  "half diminished 7th chord": [0, 3, 6, 10],
  "minor 7th chord": [0, 3, 7, 10],
  "dominant 7th chord": [0, 4, 7, 10],
  "fully diminished 7th chord": [0, 3, 6, 9],
  "Major 9": [0, 2, 4, 7, 11],
  "Minor 9": [0, 2, 3, 7, 10],
  "Dominant b9": [0, 1, 4, 7, 10],
  "Dominant 9": [0, 2, 4, 7, 10],
  "Dominant #9": [0, 3, 4, 7, 10],
  "Pentatonic Scale": [0, 2, 4, 7, 9],
  "Whole Step Series": [0, 2, 4, 6, 8],
  "Chromatic Scale": [0, 1, 2, 3, 4]
};

const PLAYBACK_VOICING_INTERVALS = {
  ...ROOT_POSITION_INTERVALS,
  "Major 9": [0, 4, 7, 11, 14],
  "Minor 9": [0, 3, 7, 10, 14],
  "Dominant b9": [0, 4, 7, 10, 13],
  "Dominant 9": [0, 4, 7, 10, 14],
  "Dominant #9": [0, 4, 7, 10, 15]
};

const CHORD_MIDI_RANGE = {
  min: 48,
  max: 74
};

const DEFAULT_SETTINGS = {
  includeAccidentals: true,
  numberOfDice: 4,
  numberOfPlayers: 2,
  playerNames: ["Player 1", "Player 2"],
  allowRepeatedChordTypes: true,
  winCondition: "rounds",
  roundLimit: 6,
  targetScore: 250,
  enableTimedTurns: false,
  timedTurnSeconds: 45,
  enableWildCardDie: false,
  enableBonuses: true,
  bonusAllTriads: true,
  bonusFourSevenths: true,
  bonusAllFamilies: true,
  bonusExtendedPalette: true,
  bonusSameTriadFiveTimes: true,
  bonusSameSeventhFiveTimes: true,
  bonusSameExtendedFiveTimes: true,
  enableSoundEffects: true,
  enableEarTraining: true
};

const LIVE_UPDATE_KEYS = new Set(["enableSoundEffects", "enableEarTraining", "playerNames"]);
const WILD_CARD_CHANCE = 0.125;

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
let turnTimerIntervalId = null;
let turnTimerDeadline = null;
let turnTimerStarted = false;
let turnTimeRemainingMs = DEFAULT_SETTINGS.timedTurnSeconds * 1000;
let timeoutPendingScore = false;

const elements = {};

document.addEventListener("DOMContentLoaded", () => {
  cacheElements();
  bindEvents();
  populateSettingsForm(activeSettings);
  createFreshGameFromSettings(activeSettings, false);
  render();
});

function cacheElements() {
  elements.landingScreen = document.getElementById("landingScreen");
  elements.launchGameButton = document.getElementById("launchGameButton");

  elements.rollButton = document.getElementById("roll");
  elements.playMelodicButton = document.getElementById("playMelodic");
  elements.playHarmonicButton = document.getElementById("playHarmonic");
  elements.nextTurnButton = document.getElementById("nextTurn");
  elements.resetTurnButton = document.getElementById("resetTurn");
  elements.resetGameButton = document.getElementById("resetGame");
  elements.settingsButton = document.getElementById("settingsButton");
  elements.quickSettingsButton = document.getElementById("quickSettingsButton");
  elements.mainMenuButton = document.getElementById("mainMenuButton");
  elements.mainMenuDropdown = document.getElementById("mainMenuDropdown");
  elements.diceContainer = document.getElementById("diceContainer");
  elements.rollsLeft = document.getElementById("rollsLeft");
  elements.totalPointsLocked = document.getElementById("totalPointsLocked");
  elements.projectedTurnPoints = document.getElementById("projectedTurnPoints");
  elements.chordDisplay = document.getElementById("chordDisplay");
  elements.turnBreakdown = document.getElementById("turnBreakdown");
  elements.specialEventDisplay = document.getElementById("specialEventDisplay");
  elements.bonusAnnouncement = document.getElementById("bonusAnnouncement");
  elements.currentPlayer = document.getElementById("currentPlayer");
  elements.turnCounter = document.getElementById("turnCounter");
  elements.playerScores = document.getElementById("playerScores");
  elements.winConditionDisplay = document.getElementById("winConditionDisplay");
  elements.statusCard = document.getElementById("statusCard");
  elements.setupStatusBlock = document.getElementById("setupStatusBlock");
  elements.settingsStatus = document.getElementById("settingsStatus");
  elements.settingsSummary = document.getElementById("settingsSummary");
  elements.settingsRequirement = document.getElementById("settingsRequirement");
  elements.bonusTableStatus = document.getElementById("bonusTableStatus");
  elements.tableGrid = document.getElementById("tableGrid");
  elements.chordTableCard = document.getElementById("chordTableCard");
  elements.bonusTableCard = document.getElementById("bonusTableCard");
  elements.chordPointsTable = document.getElementById("chordPointsTable");
  elements.bonusTable = document.getElementById("bonusTable");
  elements.turnTimer = document.getElementById("turnTimer");
  elements.timerHelper = document.getElementById("timerHelper");
  elements.timerMetric = document.getElementById("timerMetric");

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
  elements.enableTimedTurns = document.getElementById("enableTimedTurns");
  elements.timedTurnSeconds = document.getElementById("timedTurnSeconds");
  elements.timedTurnField = document.getElementById("timedTurnField");
  elements.enableWildCardDie = document.getElementById("enableWildCardDie");
  elements.enableBonuses = document.getElementById("enableBonuses");
  elements.bonusOptions = document.getElementById("bonusOptions");
  elements.bonusAllTriads = document.getElementById("bonusAllTriads");
  elements.bonusFourSevenths = document.getElementById("bonusFourSevenths");
  elements.bonusAllFamilies = document.getElementById("bonusAllFamilies");
  elements.bonusExtendedPalette = document.getElementById("bonusExtendedPalette");
  elements.bonusSameTriadFiveTimes = document.getElementById("bonusSameTriadFiveTimes");
  elements.bonusSameSeventhFiveTimes = document.getElementById("bonusSameSeventhFiveTimes");
  elements.bonusSameExtendedFiveTimes = document.getElementById("bonusSameExtendedFiveTimes");
  elements.enableSoundEffects = document.getElementById("enableSoundEffects");
  elements.enableEarTraining = document.getElementById("enableEarTraining");
}

function bindEvents() {
  elements.launchGameButton.addEventListener("click", () => {
    hideLandingScreen();
    openSettingsModal();
  });

  elements.rollButton.addEventListener("click", handleRoll);
  elements.playMelodicButton.addEventListener("click", handlePlayLockedNotesMelodically);
  elements.playHarmonicButton.addEventListener("click", handlePlayLockedNotesHarmonically);
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

  elements.closeModalButton.addEventListener("click", () =>
    closeConfirmationModal({ resumeTimer: true })
  );

  elements.cancelButton.addEventListener("click", () => {
    const action = pendingCancelAction;
    closeConfirmationModal({ resumeTimer: true });
    if (typeof action === "function") {
      action();
    }
  });

  elements.confirmButton.addEventListener("click", () => {
    const action = pendingConfirmAction;
    closeConfirmationModal({ resumeTimer: false });
    if (typeof action === "function") {
      action();
    }
    if (!hasActiveOverlay()) {
      resumeTurnTimerIfNeeded();
    }
  });

  elements.closeSettingsModalButton.addEventListener("click", () =>
    closeSettingsModal({ resumeTimer: true })
  );

  elements.settingsModal.addEventListener("click", (event) => {
    if (event.target === elements.settingsModal) {
      closeSettingsModal({ resumeTimer: true });
    }
  });

  elements.confirmationModal.addEventListener("click", (event) => {
    if (event.target === elements.confirmationModal) {
      closeConfirmationModal({ resumeTimer: true });
    }
  });

  elements.numberOfPlayers.addEventListener("input", () => {
    syncPlayerNameInputs(readClampedPlayerCount());
  });

  elements.winCondition.addEventListener("change", updateSettingsFormVisibility);
  elements.enableTimedTurns.addEventListener("change", updateSettingsFormVisibility);
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
    closeSettingsModal({ resumeTimer: false });
    return;
  }

  const changedKeys = getChangedSettingKeys(activeSettings, nextSettings);

  if (changedKeys.length === 0) {
    elements.settingsWarning.textContent = "No changes to apply.";
    return;
  }

  const restartRequired = changedKeys.some((key) => !LIVE_UPDATE_KEYS.has(key));

  if (isMidGame() && !restartRequired) {
    applyLiveSettings(nextSettings);
    closeSettingsModal({ resumeTimer: true });
    return;
  }

  if (isMidGame() && restartRequired) {
    showConfirmationModal({
      eyebrow: "Start a new game?",
      title: "Apply new settings",
      message:
        "Changing gameplay rules now will reset scores, rounds, timers, and collected bonuses. Continue?",
      confirmText: "Start New Game",
      cancelText: "Keep Current Game",
      onConfirm: () => {
        applySettings(nextSettings);
        closeSettingsModal({ resumeTimer: false });
      }
    });
    return;
  }

  if (!restartRequired) {
    applyLiveSettings(nextSettings);
    closeSettingsModal({ resumeTimer: true });
    return;
  }

  applySettings(nextSettings);
  closeSettingsModal({ resumeTimer: false });
}

function handleRoll() {
  if (!settingsConfigured || gameOver || rollInProgress || rollsLeft <= 0) {
    return;
  }

  const unlockedIndices = [];
  diceState.forEach((die, index) => {
    if (!die.locked) {
      unlockedIndices.push(index);
    }
  });

  if (unlockedIndices.length === 0) {
    elements.turnBreakdown.textContent =
      "All dice are locked. Score the turn or unlock a die to keep shaping the chord.";
    render();
    return;
  }

  gameStarted = true;
  rollInProgress = true;
  beginTurnTimerIfNeeded();
  playSoundEffect("roll");

  renderDice(unlockedIndices);
  renderButtons();

  window.setTimeout(() => {
    const availableFaces = getAvailableDiceFaces();

    unlockedIndices.forEach((index) => {
      diceState[index].note = availableFaces[Math.floor(Math.random() * availableFaces.length)];
    });

    rollsLeft -= 1;
    rollInProgress = false;

    if (timeoutPendingScore) {
      handleTimedOutTurn();
      return;
    }

    render();
  }, 720);
}

function handleScoreTurn() {
  if (!settingsConfigured || gameOver || rollInProgress || !canScoreTurnNow()) {
    return;
  }

  if (rollsLeft > 0) {
    showConfirmationModal({
      eyebrow: "Score early?",
      title: "Bank this turn now?",
      message:
        "All dice are locked, but you still have rolls left. Are you sure you want to score the turn now?",
      confirmText: "Score Turn",
      cancelText: "Keep Rolling",
      onConfirm: () => finalizeCurrentTurn({ timedOut: false })
    });
    return;
  }

  finalizeCurrentTurn({ timedOut: false });
}

function handleTimedOutTurn() {
  if (!settingsConfigured || gameOver) {
    return;
  }

  finalizeCurrentTurn({ timedOut: true });
}

function finalizeCurrentTurn({ timedOut }) {
  clearTurnTimerInterval();
  timeoutPendingScore = false;

  const preview = evaluateCurrentTurn();
  const scoringPlayer = currentPlayer;
  const playerName = activeSettings.playerNames[scoringPlayer];

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
  if (timedOut) {
    summaryParts.push(`Time ran out for ${playerName}.`);
  }

  if (preview.chord === "None") {
    summaryParts.push(`${playerName} finishes the turn without a scoring chord.`);
  } else if (preview.repeatedChordBlocked) {
    summaryParts.push(`${playerName} repeated ${preview.chord}, so the turn scores 0.`);
  } else {
    summaryParts.push(
      `${playerName} banks ${formatPoints(preview.lockedPoints)} locked-note points plus ${formatPoints(preview.chordPoints)} chord points from ${preview.chord}.`
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
      ? `${playerName} earned ${formatPoints(preview.bonusPoints)} bonus points this turn.`
      : timedOut
        ? "The timer auto-scored the turn with the currently locked notes."
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
    hideLandingScreen();
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
      elements.turnBreakdown.textContent = "Turn reset. Roll when you are ready.";
      elements.bonusAnnouncement.textContent = "";
      render();
    }
  });
}

function handleResetGame() {
  showConfirmationModal({
    eyebrow: "Reset match",
    title: "Reset the full game?",
    message: "Scores, round progress, timers, and collected bonuses will all be cleared.",
    confirmText: "Reset Game",
    cancelText: "Cancel",
    onConfirm: () => {
      createFreshGameFromSettings(activeSettings, settingsConfigured);
      render();
    }
  });
}

function handlePlayLockedNotesMelodically() {
  if (!canPlayLockedNotes()) {
    return;
  }

  playLockedNotes("melodic");
}

function handlePlayLockedNotesHarmonically() {
  if (!canPlayLockedNotes()) {
    return;
  }

  playLockedNotes("harmonic");
}

function toggleDieLock(index) {
  if (!settingsConfigured || gameOver || rollInProgress || rollsLeft === 3) {
    return;
  }

  const die = diceState[index];
  if (!die || !die.note) {
    return;
  }

  die.locked = !die.locked;

  if (die.locked) {
    if (activeSettings.enableEarTraining) {
      playPianoNote(die.note);
    } else {
      playSoundEffect("lock");
    }
  }

  render();
}

function changeWildDieNote(index, nextNote) {
  const die = diceState[index];

  if (!die || !die.isWild) {
    return;
  }

  if (!getAvailableDiceFaces().includes(nextNote)) {
    return;
  }

  if (die.note === nextNote) {
    return;
  }

  die.note = nextNote;
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
  diceState = createDiceState(activeSettings.numberOfDice);
  playerScores = Array.from({ length: activeSettings.numberOfPlayers }, () => 0);
  playerChordCounts = Array.from({ length: activeSettings.numberOfPlayers }, () =>
    createChordCountMap()
  );
  playerUniqueChords = Array.from({ length: activeSettings.numberOfPlayers }, () => new Set());
  playerAwardedBonuses = Array.from({ length: activeSettings.numberOfPlayers }, () => new Set());
  resetTurnTimer();
  elements.turnBreakdown.textContent = configured
    ? "Roll when you are ready."
    : "Start setup from the opening screen to choose the rules for your first match.";
  elements.specialEventDisplay.textContent = "";
  elements.bonusAnnouncement.textContent = "";
  elements.settingsWarning.textContent = "";
}

function applySettings(nextSettings) {
  createFreshGameFromSettings(nextSettings, true);
  populateSettingsForm(activeSettings);
  hideLandingScreen();
  render();
}

function applyLiveSettings(nextSettings) {
  activeSettings.enableSoundEffects = nextSettings.enableSoundEffects;
  activeSettings.enableEarTraining = nextSettings.enableEarTraining;
  activeSettings.playerNames = [...nextSettings.playerNames];
  draftPlayerNames = [...nextSettings.playerNames];
  populateSettingsForm(activeSettings);
  elements.bonusAnnouncement.textContent = "Audio settings and player names updated. The current match continues.";
  render();
}

function startNewTurn() {
  rollsLeft = 3;
  rollInProgress = false;
  diceState = createDiceState(activeSettings.numberOfDice);
  resetTurnTimer();
}

function createDiceState(numberOfDice) {
  const nextDice = Array.from({ length: numberOfDice }, () => ({
    note: "",
    locked: false,
    isWild: false
  }));

  if (activeSettings.enableWildCardDie && Math.random() < WILD_CARD_CHANCE) {
    const wildIndex = Math.floor(Math.random() * nextDice.length);
    nextDice[wildIndex].isWild = true;
  }

  return nextDice;
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
  const lockedNotes = getLockedNotes();
  const lockedTotal = lockedNotes.reduce((sum, note) => sum + (FACE_VALUES[note] || 0), 0);
  const wildIndex = diceState.findIndex((die) => die.isWild);
  const visibleBonuses = getVisibleBonusDefinitions();

  elements.rollsLeft.textContent = String(rollsLeft);
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
      elements.turnBreakdown.textContent ||
      "No chord points will score unless the locked notes form a valid shape.";
  } else if (preview.repeatedChordBlocked) {
    elements.turnBreakdown.textContent = `Repeated chord scoring is disabled, so ${preview.chord} would be worth 0 this turn.`;
  } else {
    const bonusText =
      preview.bonusAwards.length > 0
        ? ` Potential bonus: ${preview.bonusAwards
            .map((bonus) => `${bonus.label} (+${formatPoints(bonus.points)})`)
            .join(", ")}.`
        : "";

    elements.turnBreakdown.textContent = `Projected score: ${formatPoints(preview.lockedPoints)} locked-note points + ${formatPoints(preview.chordPoints)} chord points.${bonusText}`;
  }

  if (!settingsConfigured) {
    elements.settingsStatus.textContent = "Settings required before the first roll.";
    elements.settingsRequirement.textContent =
      "Use Start Setup to save your rules and unlock the Roll button.";
  } else if (gameOver) {
    elements.settingsStatus.textContent = "Match complete.";
    elements.settingsRequirement.textContent = "Reset the game or change the rules to play again.";
  } else {
    elements.settingsStatus.textContent = "Ready to play.";
    elements.settingsRequirement.textContent = "";
  }

  elements.setupStatusBlock.hidden = settingsConfigured;
  elements.statusCard.classList.toggle("is-compact", settingsConfigured);
  elements.settingsSummary.textContent = buildSettingsSummary(activeSettings);
  elements.winConditionDisplay.textContent = buildWinConditionLabel(activeSettings);
  elements.turnCounter.textContent =
    activeSettings.winCondition === "rounds"
      ? `Round ${roundNumber} of ${activeSettings.roundLimit}`
      : `Round ${roundNumber}`;
  elements.currentPlayer.innerHTML = `Current Player: <span style="color:${PLAYER_COLORS[currentPlayer]}">${escapeHtml(
    activeSettings.playerNames[currentPlayer]
  )}</span>`;
  elements.bonusTableStatus.textContent =
    visibleBonuses.length > 0
      ? `${visibleBonuses.length} live bonus ${visibleBonuses.length === 1 ? "track" : "tracks"} shown for this setup.`
      : "No bonuses are active for this setup.";

  const specialMessages = [];
  if (wildIndex >= 0) {
    specialMessages.push(
      `Rare wildcard live on Die ${wildIndex + 1}. Tune it to any ${activeSettings.includeAccidentals ? "chromatic" : "natural-note"} pitch after rolling.`
    );
  }
  if (activeSettings.enableTimedTurns) {
    specialMessages.push(
      turnTimerStarted
        ? "The turn timer is running."
        : "The turn timer will start on the first roll."
    );
  }
  elements.specialEventDisplay.textContent = specialMessages.join(" ");
  elements.timerMetric.hidden = !activeSettings.enableTimedTurns;

  renderTimerDisplay();
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
  const canPlayNow = canPlayLockedNotes();

  elements.rollButton.disabled =
    !settingsConfigured || gameOver || rollInProgress || rollsLeft <= 0;
  elements.playMelodicButton.hidden = !activeSettings.enableEarTraining;
  elements.playHarmonicButton.hidden = !activeSettings.enableEarTraining;
  elements.playMelodicButton.disabled = !canPlayNow;
  elements.playHarmonicButton.disabled = !canPlayNow;
  elements.nextTurnButton.disabled =
    !settingsConfigured || gameOver || rollInProgress || !canScoreTurnNow();
  elements.resetTurnButton.disabled =
    !settingsConfigured || gameOver || (!gameStarted && !hasOpenTurn);
  elements.resetGameButton.disabled = !settingsConfigured && !gameStarted;
}

function renderDice(rollingIndices = []) {
  const availableFaces = getAvailableDiceFaces();
  elements.diceContainer.innerHTML = "";

  diceState.forEach((die, index) => {
    const dieStack = document.createElement("div");
    dieStack.className = "die-stack";

    const dieButton = document.createElement("button");
    dieButton.type = "button";
    dieButton.className = "dice";
    if (die.locked) {
      dieButton.classList.add("is-locked");
    }
    if (die.isWild) {
      dieButton.classList.add("is-wild");
    }
    if (rollingIndices.includes(index)) {
      dieButton.classList.add("is-rolling");
    }

    dieButton.setAttribute("aria-label", buildDieAriaLabel(die, index));
    dieButton.innerHTML = `
      <span class="dice-corner dice-corner-a"></span>
      <span class="dice-corner dice-corner-b"></span>
      <span class="dice-corner dice-corner-c"></span>
      <span class="dice-corner dice-corner-d"></span>
      ${die.isWild ? '<span class="dice-badge">Wild</span>' : ""}
      <span class="dice-note${die.note ? "" : " dice-note-placeholder"}">${escapeHtml(
        die.note || "--"
      )}</span>
      <span class="dice-subtext">${escapeHtml(getDieSubtext(die))}</span>
    `;
    dieButton.addEventListener("click", () => toggleDieLock(index));
    dieStack.appendChild(dieButton);

    if (die.isWild) {
      const wildControl = document.createElement("label");
      wildControl.className = `wild-note-control${die.note ? "" : " is-disabled"}`;

      const label = document.createElement("span");
      label.textContent = die.note ? "Tune the wildcard" : "Roll first, then tune";

      const select = document.createElement("select");
      availableFaces.forEach((face) => {
        const option = document.createElement("option");
        option.value = face;
        option.textContent = face;
        select.appendChild(option);
      });

      select.value = die.note && availableFaces.includes(die.note) ? die.note : availableFaces[0];
      select.disabled = !die.note || !settingsConfigured || gameOver || rollInProgress;
      select.addEventListener("click", (event) => event.stopPropagation());
      select.addEventListener("change", (event) => {
        event.stopPropagation();
        changeWildDieNote(index, event.target.value);
      });

      wildControl.appendChild(label);
      wildControl.appendChild(select);
      dieStack.appendChild(wildControl);
    }

    elements.diceContainer.appendChild(dieStack);
  });
}

function renderChordTable() {
  const visibleChords = getVisibleChordTypes();
  const headers = [
    "<tr><th>Chord Type</th><th>Base Points</th>",
    ...activeSettings.playerNames.map((name) => `<th>${escapeHtml(name)}</th>`),
    "</tr>"
  ].join("");

  const body = visibleChords
    .map((chord) => {
      const playerCells = playerChordCounts
        .map((countMap) => {
          const count = countMap[chord];
          return count > 0
            ? `<td class="claimed-cell">${count === 1 ? "&#10003;" : `${count}x`}</td>`
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
  const tableDefinitions = getVisibleBonusDefinitions();
  const bonusTableVisible = tableDefinitions.length > 0;
  elements.bonusTableCard.hidden = !bonusTableVisible;
  elements.tableGrid.classList.toggle("is-single", !bonusTableVisible);

  if (!bonusTableVisible) {
    elements.bonusTable.querySelector("thead").innerHTML = "";
    elements.bonusTable.querySelector("tbody").innerHTML = "";
    return;
  }

  const headers = [
    "<tr><th>Bonus</th><th>Value</th>",
    ...activeSettings.playerNames.map((name) => `<th>${escapeHtml(name)}</th>`),
    "</tr>"
  ].join("");

  const body = tableDefinitions.map((bonus) => {
    const enabled = activeSettings.enableBonuses && activeSettings[bonus.settingKey];
    const playerCells = playerAwardedBonuses
      .map((awards, index) => {
        if (bonus.idPrefix) {
          const count = getRepeatBonusCount(index, bonus.idPrefix);
          return count > 0 ? `<td class="claimed-cell">${count}x</td>` : "<td></td>";
        }

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
  elements.enableTimedTurns.checked = settings.enableTimedTurns;
  elements.timedTurnSeconds.value = String(settings.timedTurnSeconds);
  elements.enableWildCardDie.checked = settings.enableWildCardDie;
  elements.enableBonuses.checked = settings.enableBonuses;
  elements.bonusAllTriads.checked = settings.bonusAllTriads;
  elements.bonusFourSevenths.checked = settings.bonusFourSevenths;
  elements.bonusAllFamilies.checked = settings.bonusAllFamilies;
  elements.bonusExtendedPalette.checked = settings.bonusExtendedPalette;
  elements.bonusSameTriadFiveTimes.checked = settings.bonusSameTriadFiveTimes;
  elements.bonusSameSeventhFiveTimes.checked = settings.bonusSameSeventhFiveTimes;
  elements.bonusSameExtendedFiveTimes.checked = settings.bonusSameExtendedFiveTimes;
  elements.enableSoundEffects.checked = settings.enableSoundEffects;
  elements.enableEarTraining.checked = settings.enableEarTraining;
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
  const timedTurnsEnabled = elements.enableTimedTurns.checked;
  const bonusesEnabled = elements.enableBonuses.checked;

  elements.roundLimitField.style.display = showRounds ? "block" : "none";
  elements.targetScoreField.style.display = showRounds ? "none" : "block";
  elements.timedTurnField.classList.toggle("is-disabled", !timedTurnsEnabled);
  elements.timedTurnSeconds.disabled = !timedTurnsEnabled;
  elements.bonusOptions.classList.toggle("is-disabled", !bonusesEnabled);

  Array.from(elements.bonusOptions.querySelectorAll("input")).forEach((input) => {
    input.disabled = !bonusesEnabled;
  });
}

function getSettingsFromForm() {
  const numberOfPlayers = readClampedPlayerCount();
  const selectedDice = Array.from(elements.numberOfDiceInputs).find((input) => input.checked);
  const roundLimit = clampNumber(elements.roundLimit.value, 1, 25, DEFAULT_SETTINGS.roundLimit);
  const targetScore = clampNumber(
    elements.targetScore.value,
    25,
    2000,
    DEFAULT_SETTINGS.targetScore
  );
  const timedTurnSeconds = clampNumber(
    elements.timedTurnSeconds.value,
    10,
    180,
    DEFAULT_SETTINGS.timedTurnSeconds
  );

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
    enableTimedTurns: elements.enableTimedTurns.checked,
    timedTurnSeconds,
    enableWildCardDie: elements.enableWildCardDie.checked,
    enableBonuses: elements.enableBonuses.checked,
    bonusAllTriads: elements.bonusAllTriads.checked,
    bonusFourSevenths: elements.bonusFourSevenths.checked,
    bonusAllFamilies: elements.bonusAllFamilies.checked,
    bonusExtendedPalette: elements.bonusExtendedPalette.checked,
    bonusSameTriadFiveTimes: elements.bonusSameTriadFiveTimes.checked,
    bonusSameSeventhFiveTimes: elements.bonusSameSeventhFiveTimes.checked,
    bonusSameExtendedFiveTimes: elements.bonusSameExtendedFiveTimes.checked,
    enableSoundEffects: elements.enableSoundEffects.checked,
    enableEarTraining: elements.enableEarTraining.checked
  };
}

function readClampedPlayerCount() {
  const raw = Number.parseInt(elements.numberOfPlayers.value, 10) || DEFAULT_SETTINGS.numberOfPlayers;
  return Math.min(10, Math.max(1, raw));
}

function clampNumber(value, min, max, fallback) {
  const parsed = Number.parseInt(value, 10);
  const safeValue = Number.isNaN(parsed) ? fallback : parsed;
  return Math.min(max, Math.max(min, safeValue));
}

function openSettingsModal() {
  populateSettingsForm(activeSettings);
  pauseTurnTimerForOverlay();
  elements.mainMenuDropdown.style.display = "none";
  elements.settingsModal.classList.add("is-open");
  elements.settingsModal.setAttribute("aria-hidden", "false");
}

function closeSettingsModal({ resumeTimer } = { resumeTimer: true }) {
  elements.settingsModal.classList.remove("is-open");
  elements.settingsModal.setAttribute("aria-hidden", "true");

  if (!settingsConfigured) {
    showLandingScreen();
  }

  if (resumeTimer && !hasActiveOverlay()) {
    resumeTurnTimerIfNeeded();
  }
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
  pauseTurnTimerForOverlay();
  elements.modalEyebrow.textContent = eyebrow;
  elements.modalTitle.textContent = title;
  elements.modalMessage.textContent = message;
  elements.confirmButton.textContent = confirmText;
  elements.cancelButton.textContent = cancelText;
  pendingConfirmAction = onConfirm || null;
  pendingCancelAction = onCancel || null;
  elements.confirmationModal.classList.add("is-open");
  elements.confirmationModal.setAttribute("aria-hidden", "false");
}

function closeConfirmationModal({ resumeTimer } = { resumeTimer: true }) {
  elements.confirmationModal.classList.remove("is-open");
  elements.confirmationModal.setAttribute("aria-hidden", "true");
  pendingConfirmAction = null;
  pendingCancelAction = null;

  if (resumeTimer && !hasActiveOverlay()) {
    resumeTurnTimerIfNeeded();
  }
}

function showLandingScreen() {
  elements.landingScreen.classList.add("is-open");
}

function hideLandingScreen() {
  elements.landingScreen.classList.remove("is-open");
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

  const awards = BONUS_DEFINITIONS.filter((bonus) => {
    return (
      activeSettings[bonus.settingKey] &&
      !playerAwardedBonuses[playerIndex].has(bonus.id) &&
      bonus.qualifies(uniqueChords)
    );
  });

  const prospectiveCount = playerChordCounts[playerIndex][prospectiveChord] + 1;
  const chordNoteCount = CHORD_NOTE_COUNTS[prospectiveChord];

  REPEAT_MILESTONE_DEFINITIONS.forEach((bonus) => {
    const dynamicId = `${bonus.idPrefix}:${prospectiveChord}`;
    if (
      activeSettings[bonus.settingKey] &&
      chordNoteCount === bonus.noteCount &&
      prospectiveCount === 5 &&
      !playerAwardedBonuses[playerIndex].has(dynamicId)
    ) {
      awards.push({
        ...bonus,
        id: dynamicId,
        label: `${bonus.label}: ${prospectiveChord}`
      });
    }
  });

  return awards;
}

function checkForWinner(scoringPlayer) {
  if (activeSettings.winCondition === "target") {
    if (playerScores[scoringPlayer] >= activeSettings.targetScore) {
      concludeGame(
        [scoringPlayer],
        `${activeSettings.playerNames[scoringPlayer]} hit the target score.`
      );
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
  clearTurnTimerInterval();
  turnTimerStarted = false;
  turnTimeRemainingMs = 0;
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
  const pitchPool = settings.includeAccidentals ? "chromatic pitch pool" : "natural-note pitch pool";
  const repeatRule = settings.allowRepeatedChordTypes
    ? "repeats score again"
    : "repeats score 0";
  const bonusRule = settings.enableBonuses ? "bonuses on" : "bonuses off";
  const timerRule = settings.enableTimedTurns
    ? `${settings.timedTurnSeconds}s timer`
    : "no turn timer";
  const wildRule = settings.enableWildCardDie ? "rare wildcard on" : "wildcard off";
  return `${settings.numberOfDice} dice, ${settings.numberOfPlayers} players, ${pitchPool}, ${repeatRule}, ${bonusRule}, ${timerRule}, ${wildRule}, ear training ${settings.enableEarTraining ? "on" : "off"}, sound effects ${settings.enableSoundEffects ? "on" : "off"}.`;
}

function getVisibleChordTypes() {
  return Object.keys(BASE_CHORD_POINTS).filter(
    (chord) => CHORD_NOTE_COUNTS[chord] <= activeSettings.numberOfDice
  );
}

function getVisibleBonusDefinitions() {
  if (!activeSettings.enableBonuses) {
    return [];
  }

  return [...BONUS_DEFINITIONS, ...REPEAT_MILESTONE_DEFINITIONS].filter((bonus) => {
    return activeSettings[bonus.settingKey] && activeSettings.numberOfDice >= bonus.minDice;
  });
}

function getRepeatBonusCount(playerIndex, idPrefix) {
  return Array.from(playerAwardedBonuses[playerIndex]).filter((id) =>
    id.startsWith(`${idPrefix}:`)
  ).length;
}

function areAllDiceLocked() {
  return diceState.length > 0 && diceState.every((die) => die.note && die.locked);
}

function canScoreTurnNow() {
  return rollsLeft === 0 || areAllDiceLocked();
}

function canPlayLockedNotes() {
  return (
    settingsConfigured &&
    activeSettings.enableEarTraining &&
    !gameOver &&
    !rollInProgress &&
    getLockedNotes().length > 0
  );
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

function formatCountdown(milliseconds) {
  const totalSeconds = Math.max(0, Math.ceil(milliseconds / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
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

function getChangedSettingKeys(currentSettings, nextSettings) {
  return Object.keys(nextSettings).filter((key) => {
    return !areSettingValuesEqual(currentSettings[key], nextSettings[key]);
  });
}

function areSettingValuesEqual(currentValue, nextValue) {
  return JSON.stringify(currentValue) === JSON.stringify(nextValue);
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

function hasActiveOverlay() {
  return (
    elements.settingsModal.classList.contains("is-open") ||
    elements.confirmationModal.classList.contains("is-open")
  );
}

function resetTurnTimer() {
  clearTurnTimerInterval();
  turnTimerStarted = false;
  timeoutPendingScore = false;
  turnTimeRemainingMs = activeSettings.timedTurnSeconds * 1000;
}

function beginTurnTimerIfNeeded() {
  if (!activeSettings.enableTimedTurns || turnTimerStarted || gameOver) {
    return;
  }

  turnTimerStarted = true;
  startTurnTimerCountdown(activeSettings.timedTurnSeconds * 1000);
}

function startTurnTimerCountdown(durationMs) {
  clearTurnTimerInterval();
  turnTimeRemainingMs = durationMs;
  turnTimerDeadline = Date.now() + durationMs;
  renderTimerDisplay();

  turnTimerIntervalId = window.setInterval(() => {
    turnTimeRemainingMs = Math.max(0, turnTimerDeadline - Date.now());
    renderTimerDisplay();

    if (turnTimeRemainingMs <= 0) {
      clearTurnTimerInterval();
      if (rollInProgress) {
        timeoutPendingScore = true;
      } else {
        handleTimedOutTurn();
      }
    }
  }, 200);
}

function clearTurnTimerInterval() {
  if (turnTimerIntervalId) {
    window.clearInterval(turnTimerIntervalId);
  }

  turnTimerIntervalId = null;
  turnTimerDeadline = null;
}

function pauseTurnTimerForOverlay() {
  if (!activeSettings.enableTimedTurns || !turnTimerStarted || !turnTimerIntervalId) {
    return;
  }

  turnTimeRemainingMs = Math.max(0, turnTimerDeadline - Date.now());
  clearTurnTimerInterval();
  renderTimerDisplay();
}

function resumeTurnTimerIfNeeded() {
  if (
    !activeSettings.enableTimedTurns ||
    !turnTimerStarted ||
    turnTimerIntervalId ||
    turnTimeRemainingMs <= 0 ||
    gameOver ||
    hasActiveOverlay()
  ) {
    return;
  }

  startTurnTimerCountdown(turnTimeRemainingMs);
}

function renderTimerDisplay() {
  if (!activeSettings.enableTimedTurns) {
    elements.turnTimer.textContent = "Off";
    elements.timerHelper.textContent = "Timed turns are disabled.";
    elements.timerMetric.classList.remove("is-alert");
    return;
  }

  const displayMilliseconds = turnTimerStarted
    ? turnTimeRemainingMs
    : activeSettings.timedTurnSeconds * 1000;

  elements.turnTimer.textContent = formatCountdown(displayMilliseconds);

  if (!turnTimerStarted) {
    elements.timerHelper.textContent = "Timer starts on the first roll.";
  } else if (turnTimeRemainingMs <= 10000) {
    elements.timerHelper.textContent = "Hurry. The turn auto-scores at zero.";
  } else {
    elements.timerHelper.textContent = "The countdown is active for this turn.";
  }

  elements.timerMetric.classList.toggle(
    "is-alert",
    turnTimerStarted && turnTimeRemainingMs <= 10000
  );
}

function ensureAudioContext() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }

  if (audioContext.state === "suspended") {
    void audioContext.resume();
  }

  return audioContext;
}

function midiToFrequency(midiNumber) {
  return 440 * Math.pow(2, (midiNumber - 69) / 12);
}

function getNoteIndexFromC(note) {
  return (NOTE_VALUES[note] + 9) % 12;
}

function getRootPitchClassForChord(notes, chord) {
  const rootIntervals = ROOT_POSITION_INTERVALS[chord];
  if (!rootIntervals) {
    return null;
  }

  const pitchClasses = [...new Set(notes.map((note) => getNoteIndexFromC(note)))].sort(
    (left, right) => left - right
  );

  for (const candidate of pitchClasses) {
    const candidateIntervals = pitchClasses
      .map((pitchClass) => (pitchClass - candidate + 12) % 12)
      .sort((left, right) => left - right);

    if (candidateIntervals.toString() === rootIntervals.toString()) {
      return candidate;
    }
  }

  return null;
}

function getSingleOctaveMidiNotes(notes) {
  return [...notes]
    .sort((left, right) => getNoteIndexFromC(left) - getNoteIndexFromC(right))
    .map((note) => 60 + getNoteIndexFromC(note));
}

function getPreferredRootOctave(rootPitchClass, chord) {
  const noteCount = ROOT_POSITION_INTERVALS[chord]?.length || 0;
  const pitchClassOfE = getNoteIndexFromC("E");
  const pitchClassOfF = getNoteIndexFromC("F");
  const pitchClassOfSharpF = getNoteIndexFromC("F#/Gb");

  if (noteCount >= 5) {
    return 3;
  }

  if (noteCount === 4) {
    return rootPitchClass <= pitchClassOfE ? 4 : 3;
  }

  if (chord === "diminished triad" && rootPitchClass === pitchClassOfSharpF) {
    return 4;
  }

  return rootPitchClass <= pitchClassOfF ? 4 : 3;
}

function getLogicalChordMidiNotes(notes, chord) {
  if (chord === "None") {
    return getSingleOctaveMidiNotes(notes);
  }

  const rootIntervals = ROOT_POSITION_INTERVALS[chord];
  const playbackIntervals = PLAYBACK_VOICING_INTERVALS[chord] || rootIntervals;
  const rootPitchClass = getRootPitchClassForChord(notes, chord);
  if (!rootIntervals || !playbackIntervals || rootPitchClass === null) {
    return getSingleOctaveMidiNotes(notes);
  }

  let rootMidi = 12 * (getPreferredRootOctave(rootPitchClass, chord) + 1) + rootPitchClass;
  let midiNotes = playbackIntervals.map((interval) => rootMidi + interval);

  while (midiNotes[0] < CHORD_MIDI_RANGE.min) {
    rootMidi += 12;
    midiNotes = playbackIntervals.map((interval) => rootMidi + interval);
  }

  while (midiNotes[midiNotes.length - 1] > CHORD_MIDI_RANGE.max) {
    rootMidi -= 12;
    midiNotes = playbackIntervals.map((interval) => rootMidi + interval);
  }

  if (
    midiNotes[0] < CHORD_MIDI_RANGE.min ||
    midiNotes[midiNotes.length - 1] > CHORD_MIDI_RANGE.max
  ) {
    return getSingleOctaveMidiNotes(notes);
  }

  return midiNotes;
}

function playPianoFrequency(frequency, startOffset = 0, duration = 1.2, gainScale = 1) {
  const context = ensureAudioContext();
  const startTime = context.currentTime + startOffset;

  const masterGain = context.createGain();
  const filter = context.createBiquadFilter();
  const compressor = context.createDynamicsCompressor();

  filter.type = "lowpass";
  filter.frequency.setValueAtTime(3600, startTime);
  filter.Q.value = 0.8;

  compressor.threshold.value = -24;
  compressor.knee.value = 18;
  compressor.ratio.value = 4;
  compressor.attack.value = 0.003;
  compressor.release.value = 0.22;

  masterGain.gain.setValueAtTime(0.0001, startTime);
  masterGain.gain.exponentialRampToValueAtTime(0.22 * gainScale, startTime + 0.008);
  masterGain.gain.exponentialRampToValueAtTime(0.08 * gainScale, startTime + 0.09);
  masterGain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

  masterGain.connect(filter);
  filter.connect(compressor);
  compressor.connect(context.destination);

  const partials = [
    {
      ratio: 1,
      gain: 0.9,
      type: "triangle",
      detune: -2,
      release: Math.max(0.18, duration - 0.02)
    },
    {
      ratio: 2,
      gain: 0.34,
      type: "sine",
      detune: 1,
      release: Math.max(0.16, duration - 0.28)
    },
    {
      ratio: 3,
      gain: 0.12,
      type: "sine",
      detune: -3,
      release: Math.max(0.14, duration - 0.48)
    }
  ];

  partials.forEach((partial) => {
    const oscillator = context.createOscillator();
    const partialGain = context.createGain();

    oscillator.type = partial.type;
    oscillator.frequency.setValueAtTime(frequency * partial.ratio, startTime);
    oscillator.detune.value = partial.detune;

    partialGain.gain.setValueAtTime(partial.gain * gainScale, startTime);
    partialGain.gain.exponentialRampToValueAtTime(0.0001, startTime + partial.release);

    oscillator.connect(partialGain);
    partialGain.connect(masterGain);
    oscillator.start(startTime);
    oscillator.stop(startTime + duration + 0.02);
  });

  const hammerOscillator = context.createOscillator();
  const hammerGain = context.createGain();
  hammerOscillator.type = "square";
  hammerOscillator.frequency.setValueAtTime(frequency * 4, startTime);
  hammerGain.gain.setValueAtTime(0.02 * gainScale, startTime);
  hammerGain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.03);
  hammerOscillator.connect(hammerGain);
  hammerGain.connect(masterGain);
  hammerOscillator.start(startTime);
  hammerOscillator.stop(startTime + 0.03);
}

function playSoundEffect(type) {
  if (!activeSettings.enableSoundEffects) {
    return;
  }

  const sequences = {
    roll: [260, 320, 415],
    lock: [640],
    bonus: [523, 659, 784],
    win: [392, 523, 659, 784]
  };

  const sequence = sequences[type];
  if (!sequence) {
    return;
  }

  try {
    const context = ensureAudioContext();
    const startTime = context.currentTime;

    sequence.forEach((frequency, index) => {
      const oscillator = context.createOscillator();
      const gainNode = context.createGain();
      oscillator.type = type === "roll" ? "triangle" : "sine";
      oscillator.frequency.value = frequency;
      gainNode.gain.setValueAtTime(0.0001, startTime + index * 0.08);
      gainNode.gain.exponentialRampToValueAtTime(0.04, startTime + index * 0.08 + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, startTime + index * 0.08 + 0.14);
      oscillator.connect(gainNode);
      gainNode.connect(context.destination);
      oscillator.start(startTime + index * 0.08);
      oscillator.stop(startTime + index * 0.08 + 0.15);
    });
  } catch (error) {
    console.warn("Sound playback unavailable.", error);
  }
}

function playPianoNote(note) {
  if (!activeSettings.enableEarTraining) {
    return;
  }

  const frequency = NOTE_FREQUENCIES[note];
  if (!frequency) {
    return;
  }

  try {
    playPianoFrequency(frequency, 0, 1.2, 1);
  } catch (error) {
    console.warn("Ear training playback unavailable.", error);
  }
}

function playLockedNotes(mode) {
  const lockedNotes = getLockedNotes();
  if (lockedNotes.length === 0) {
    return;
  }

  const chord = identifyChord(lockedNotes);
  const playableMidis = getLogicalChordMidiNotes(lockedNotes, chord);

  try {
    if (mode === "harmonic") {
      playableMidis.forEach((midi) => {
        playPianoFrequency(midiToFrequency(midi), 0, 1.55, 0.7);
      });
      elements.specialEventDisplay.textContent =
        chord !== "None"
          ? `${chord} played harmonically.`
          : "Locked notes played harmonically.";
      return;
    }

    playableMidis.forEach((midi, index) => {
      playPianoFrequency(midiToFrequency(midi), index * 0.3, 0.95, 0.9);
    });
    elements.specialEventDisplay.textContent =
      chord !== "None" ? `${chord} played melodically.` : "Locked notes played melodically.";
  } catch (error) {
    console.warn("Locked note playback unavailable.", error);
  }
}

function getDieSubtext(die) {
  if (!die.note) {
    return die.isWild ? "Rare wildcard waiting for a roll" : "Waiting for roll";
  }

  if (die.locked) {
    return die.isWild ? "Held and still tunable" : "Held for scoring";
  }

  return die.isWild ? "Tap to hold or tune below" : "Tap to hold";
}

function buildDieAriaLabel(die, index) {
  const parts = [`Die ${index + 1}`];

  if (die.isWild) {
    parts.push("wildcard");
  }

  if (die.note) {
    parts.push(`showing ${die.note}`);
  } else {
    parts.push("waiting for a roll");
  }

  parts.push(die.locked ? "locked" : "unlocked");
  return parts.join(", ");
}
