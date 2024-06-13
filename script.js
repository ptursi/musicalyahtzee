const diceFaces = ["A", "A#/Bb", "B", "C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab"];
let rollsLeft = 3;

document.addEventListener('DOMContentLoaded', () => {
    const diceElements = Array.from(document.getElementsByClassName('dice'));
    const rollButton = document.getElementById('roll');
    const resetButton = document.getElementById('reset');
    const rollsLeftIndicator = document.getElementById('rollsLeft');

    diceElements.forEach(dice => {
        dice.innerHTML = `
            <div class="face1"></div>
            <div class="face2"></div>
            <div class="face3"></div>
            <div class="face4"></div>
            <div class="face5"></div>
            <div class="face6"></div>
        `;

        dice.addEventListener('click', () => {
            if (rollsLeft < 3) {
                dice.dataset.locked = dice.dataset.locked === 'true' ? 'false' : 'true';
                dice.classList.toggle('locked');
            }
        });
    });

    rollButton.addEventListener('click', () => {
        if (rollsLeft > 0) {
            diceElements.forEach(dice => {
                if (dice.dataset.locked === 'false') {
                    dice.classList.add('rolling');
                    setTimeout(() => {
                        updateDiceFace(dice);
                        dice.classList.remove('rolling');
                    }, 1000);
                }
            });
            rollsLeft--;
            updateRollsLeftIndicator();
            if (rollsLeft === 0) {
                diceElements.forEach(dice => dice.dataset.locked = 'true');
            }
        }
    });

    resetButton.addEventListener('click', () => {
        diceElements.forEach(dice => {
            dice.dataset.locked = 'false';
            dice.classList.remove('locked');
            dice.innerHTML = `
                <div class="face1"></div>
                <div class="face2"></div>
                <div class="face3"></div>
                <div class="face4"></div>
                <div class="face5"></div>
                <div class="face6"></div>
            `;
        });
        rollsLeft = 3;
        updateRollsLeftIndicator();
    });

    function updateRollsLeftIndicator() {
        rollsLeftIndicator.textContent = `${rollsLeft} rolls left`;
    }

    function updateDiceFace(dice) {
        const faceIndex = Math.floor(Math.random() * diceFaces.length);
        const faces = dice.getElementsByTagName('div');
        faces[0].textContent = diceFaces[faceIndex]; // Only display on face1 for simplicity
    }

    // Initial setup
    diceElements.forEach(dice => {
        dice.innerHTML = `
            <div class="face1"></div>
            <div class="face2"></div>
            <div class="face3"></div>
            <div class="face4"></div>
            <div class="face5"></div>
            <div class="face6"></div>
        `;
    });
    updateRollsLeftIndicator();
});