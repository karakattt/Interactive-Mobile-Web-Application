const rollButton = document.getElementById('rollButton');
const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');
const resultDiv = document.getElementById('result');
const counterDiv = document.getElementById('counter');

let rollCount = 0; 

function getRandomDiceNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

rollButton.addEventListener('click', () => {
    const dice1Value = getRandomDiceNumber();
    const dice2Value = getRandomDiceNumber();

    dice1.src = `dice${dice1Value}.png`; 
    dice2.src = `dice${dice2Value}.png`; 

    rollCount++;
    counterDiv.textContent = `Number of throws: ${rollCount}`;

    const sum = dice1Value + dice2Value;
    resultDiv.textContent = `The amount: ${sum}`;

    if (dice1Value === dice2Value) {
        alert('Congratulations! You won by rolling two identical dice!');
        // throwCounterDisplay.textContent = `Number of throws: ${totalRolls}`; // Update display
        // resultDisplay.textContent = `The amount: 0`; // Reset result display
        // firstDice.src = 'dice1.png'; 
        // secondDice.src = 'dice1.png';     
    }
});
