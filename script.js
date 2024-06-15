const allDiceFaces = ["A", "A#/Bb", "B", "C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab"];
const faceValues = {
    "A": 1, "A#/Bb": 1.5, "B": 2, "C": 2.5, "C#/Db": 3, "D": 3.5, "D#/Eb": 4, "E": 4.5,
    "F": 5, "F#/Gb": 5.5, "G": 6, "G#/Ab": 6.5
};

const chordIntervals = {
    "major triad": [[0, 4, 7], [0, 3, 8], [0, 5, 9]],
    "minor triad": [[0, 3, 7], [0, 4, 9], [0, 5, 8]],
    "diminished triad": [[0, 3, 6], [0, 3, 9], [0, 6, 9]],
    "augmented triad": [[0, 4, 8]],
    "sus4 triad": [[0, 5, 7], [0, 2, 7], [0, 5, 10]],
    "minor major 7th chord": [[0, 3, 7, 11], [0, 4, 8, 9], [0, 4, 5, 8], [0, 1, 4, 8]],
    "major 7th chord": [[0, 4, 7, 11], [0, 3, 7, 8], [0, 4, 5, 9], [0, 1, 5, 8]],
    "half diminished 7th chord": [[0, 3, 6, 10], [0, 3, 7, 9], [0, 4, 6, 9], [0, 2, 5, 8]],
    "minor 7th chord": [[0, 3, 7, 10], [0, 4, 7, 9], [0, 3, 5, 8], [0, 2, 5, 9]],
    "dominant 7th chord": [[0, 4, 7, 10], [0, 3, 6, 8], [0, 3, 5, 9], [0, 2, 6, 9]],
    "fully diminished 7th chord": [[0, 3, 6, 9]],
    "Major 9": [[0, 2, 4, 7, 11], [0, 2, 5, 9, 10], [0, 3, 7, 8, 10], [0, 4, 5, 7, 9], [0, 1, 3, 5, 8]],
    "Minor 9": [[0, 2, 3, 7, 10], [0, 1, 5, 8, 10], [0, 4, 7, 9, 11], [0, 3, 5, 7, 8], [0, 2, 4, 5, 9]],
    "Dominant b9": [[0, 1, 4, 7, 10], [0, 3, 6, 9, 11], [0, 3, 6, 8, 9], [0, 3, 5, 6, 9], [0, 2, 3, 6, 9]],
    "Dominant 9": [[0, 2, 4, 7, 10], [0, 2, 5, 8, 10], [0, 3, 6, 8, 10], [0, 3, 5, 7, 9], [0, 2, 4, 6, 9]],
    "Dominant #9": [[0, 3, 4, 7, 10], [0, 1, 4, 7, 9], [0, 3, 6, 8, 11], [0, 3, 5, 8, 9], [0, 2, 5, 6, 9]],
    "Pentatonic Scale": [[0, 3, 5, 7, 10], [0, 2, 4, 7, 9], [0, 2, 5, 7, 10], [0, 3, 5, 8, 10], [0, 2, 5, 7, 9]],
    "Chromatic Scale": [[0, 1, 2, 3, 4], [0, 1, 2, 3, 11], [0, 1, 2, 10, 11], [0, 1, 9, 10, 11], [0, 8, 9, 10, 11]],
    "Whole Step Series": [[0, 2, 4, 6, 8], [0, 2, 4, 6, 10], [0, 2, 4, 8, 10], [0, 2, 6, 8, 10], [0, 4, 6, 8, 10]]
};

const noteValues = {
    "A": 0, "A#/Bb": 1, "B": 2, "C": 3, "C#/Db": 4, "D": 5, "D#/Eb": 6, "E": 7,
    "F": 8, "F#/Gb": 9, "G": 10, "G#/Ab": 11
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
    "Chromatic Scale": 100,
    "Whole Step Series": 100
};

let diceFaces = [...allDiceFaces];
let rollsLeft = 3;
let numberOfDice = 4;
let currentPlayer = 0;
let numberOfPlayers = 2;
let playerScores = new Array(numberOfPlayers).fill(0);
let playerNames = Array.from({ length: numberOfPlayers }, (_, i) => `Player ${i + 1}`);

document.addEventListener('DOMContentLoaded', () => {
    const diceContainer = document.querySelector('.dice-container');
    const rollButton = document.getElementById('roll');
    const resetTurnButton = document.getElementById('resetTurn');
    const nextTurnButton = document.getElementById('nextTurn');
    const resetGameButton = document.getElementById('resetGame');
    const rollsLeftIndicator = document.getElementById('rollsLeft');
    const includeAccidentalsCheckbox = document.getElementById('includeAccidentals');
    const numberOfDiceRadios = document.querySelectorAll('input[name="numberOfDice"]');
    const numberOfPlayersInput = document.getElementById('numberOfPlayers');
    const totalPointsVisible = document.getElementById('totalPointsVisible');
    const totalPointsLocked = document.getElementById('totalPointsLocked');
    const chordDisplay = document.createElement('p');
    chordDisplay.id = 'chordDisplay';
    chordDisplay.style.display = 'none'; // Initially hidden
    document.querySelector('.indicator').appendChild(chordDisplay);

    const totalTurnPointsDisplay = document.createElement('p');
    totalTurnPointsDisplay.id = 'totalTurnPointsDisplay';
    totalTurnPointsDisplay.style.display = 'none'; // Initially hidden
    totalTurnPointsDisplay.style.color = 'green';
    totalTurnPointsDisplay.style.fontWeight = 'bold';
    document.querySelector('.indicator').appendChild(totalTurnPointsDisplay);

    const currentPlayerDisplay = document.getElementById('currentPlayer');
    const playerScoresDisplay = document.getElementById('playerScores');
    const playerNamesContainer = document.getElementById('playerNamesContainer');

    function createDiceElements() {
        diceContainer.innerHTML = '';
        for (let i = 1; i <= numberOfDice; i++) {
            const dice = document.createElement('div');
            dice.className = 'dice';
            dice.id = `dice${i}`;
            dice.dataset.locked = 'false';
            dice.innerHTML = `
                <div class="face1"></div>
                <div class="face2"></div>
                <div class="face3"></div>
                <div class="face4"></div>
                <div class="face5"></div>
                <div class="face6"></div>
            `;
            diceContainer.appendChild(dice);
            dice.addEventListener('click', () => {
                if (rollsLeft < 3 || rollsLeft === 0) {
                    dice.dataset.locked = dice.dataset.locked === 'true' ? 'false' : 'true';
                    dice.classList.toggle('locked');
                    updatePointsAndChords();
                }
            });
        }
    }

    function updateDiceFace(dice) {
        const faceIndex = Math.floor(Math.random() * diceFaces.length);
        const faces = dice.getElementsByTagName('div');
        faces[0].textContent = diceFaces[faceIndex]; // Only display on face1 for simplicity
    }

    function updateRollsLeftIndicator() {
        rollsLeftIndicator.textContent = `${rollsLeft} rolls left`;
    }

    function calculateIntervals(diceValues) {
        const sortedValues = diceValues.map(note => noteValues[note]).sort((a, b) => a - b);
        const baseValue = sortedValues[0];
        return sortedValues.map(value => (value - baseValue + 12) % 12);
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
        return 'None';
    }

    function updatePointsAndChords() {
        let totalVisible = 0;
        let totalLocked = 0;
        let lockedDice = [];
        const diceElements = Array.from(document.getElementsByClassName('dice'));
        diceElements.forEach(dice => {
            const faceValue = faceValues[dice.querySelector('.face1').textContent] || 0;
            totalVisible += faceValue;
            if (dice.dataset.locked === 'true') {
                totalLocked += faceValue;
                lockedDice.push(dice.querySelector('.face1').textContent);
            }
        });
        totalPointsVisible.textContent = totalVisible;
        totalPointsLocked.textContent = totalLocked;

        const chord = identifyChord(lockedDice);
        const chordPointsValue = chordPoints[chord] || 0;

        if (chord !== 'None') {
            chordDisplay.textContent = `Chord: ${chord} (${chordPointsValue} points)`;
            chordDisplay.style.display = 'block';

            if (rollsLeft === 0) {
                const totalTurnPoints = totalLocked + chordPointsValue;
                totalTurnPointsDisplay.textContent = `Total Turn Points: ${totalTurnPoints}`;
                totalTurnPointsDisplay.style.display = 'block';
            } else {
                totalTurnPointsDisplay.style.display = 'none';
            }
        } else {
            chordDisplay.style.display = 'none';
            totalTurnPointsDisplay.style.display = 'none';
        }
    }

    function updatePlayerNamesInputs() {
        playerNamesContainer.innerHTML = '';
        playerNames.forEach((name, index) => {
            const input = document.createElement('input');
            input.type = 'text';
            input.value = name;
            input.placeholder = `Player ${index + 1} Name`;
            input.dataset.index = index;
            input.addEventListener('input', (event) => {
                const idx = event.target.dataset.index;
                playerNames[idx] = event.target.value;
                updatePlayerDisplays();
            });
            playerNamesContainer.appendChild(input);
        });
    }

    function updatePlayerDisplays() {
        currentPlayerDisplay.textContent = `Current Player: ${playerNames[currentPlayer]}`;
        playerScoresDisplay.textContent = `Player Scores: ${playerScores.map((score, index) => `${playerNames[index]}: ${score}`).join(', ')}`;
    }

    rollButton.addEventListener('click', () => {
        if (rollsLeft > 0) {
            const diceElements = Array.from(document.getElementsByClassName('dice'));
            diceElements.forEach(dice => {
                if (dice.dataset.locked === 'false') {
                    dice.classList.add('rolling');
                    setTimeout(() => {
                        updateDiceFace(dice);
                        dice.classList.remove('rolling');
                        updatePointsAndChords();
                    }, 1000);
                }
            });
            rollsLeft--;
            updateRollsLeftIndicator();
            if (rollsLeft === 0) {
                // Ensure locked dice points are updated correctly after the final roll
                updatePointsAndChords();
                rollButton.style.display = 'none'; // Hide the roll button
                nextTurnButton.style.display = 'inline-block'; // Show the next turn button
            }
        }
    });

    resetTurnButton.addEventListener('click', () => {
        createDiceElements();
        rollsLeft = 3;
        updateRollsLeftIndicator();
        updatePointsAndChords();
        rollButton.style.display = 'inline-block'; // Show the roll button
        nextTurnButton.style.display = 'none'; // Hide the next turn button
    });

    nextTurnButton.addEventListener('click', () => {
        const chord = identifyChord(Array.from(document.getElementsByClassName('locked')).map(dice => dice.querySelector('.face1').textContent));
        const chordPointsValue = chordPoints[chord] || 0;
        const totalTurnPoints = chordPointsValue > 0 ? parseFloat(totalPointsLocked.textContent) + chordPointsValue : 0;
        playerScores[currentPlayer] += totalTurnPoints;
        currentPlayer = (currentPlayer + 1) % playerScores.length;
        updatePlayerDisplays();
        resetTurnButton.click();
    });

    resetGameButton.addEventListener('click', () => {
        playerScores.fill(0);
        currentPlayer = 0;
        updatePlayerDisplays();
        resetTurnButton.click();
    });

    includeAccidentalsCheckbox.addEventListener('change', () => {
        if (includeAccidentalsCheckbox.checked) {
            diceFaces = [...allDiceFaces];
        } else {
            diceFaces = allDiceFaces.filter(face => !face.includes('#') && !face.includes('/'));
        }
        createDiceElements();
        updatePointsAndChords();
    });

    numberOfDiceRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            numberOfDice = parseInt(radio.value);
            createDiceElements();
            updatePointsAndChords();
        });
    });

    numberOfPlayersInput.addEventListener('change', () => {
        numberOfPlayers = parseInt(numberOfPlayersInput.value);
        playerScores = new Array(numberOfPlayers).fill(0);
        playerNames = Array.from({ length: numberOfPlayers }, (_, i) => `Player ${i + 1}`);
        currentPlayer = 0;
        updatePlayerNamesInputs();
        updatePlayerDisplays();
        resetTurnButton.click();
    });

    // Initial setup
    createDiceElements();
    updateRollsLeftIndicator();
    updatePointsAndChords();
    updatePlayerNamesInputs();
    updatePlayerDisplays();
});