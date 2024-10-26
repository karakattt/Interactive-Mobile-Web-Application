const buttons = document.getElementsByClassName('xylo-button')
for (var i = 0; i < buttons.length; i++) {
    const button = buttons[i]
    button.addEventListener('click', soundButtonDidTap)
}

function soundButtonDidTap(event) {
    let button = event.currentTarget 
    let soundName = button.getAttribute('data-sound') 
    const audio = new Audio(`Sounds/${soundName}.wav`)

    audio.play()
    onclick = "playsound('audio')"
}

// function playSound(note) {
//     const audio = new Audio(`${note}.wav`); // Assuming the files are named 'C.wav', 'D.wav', etc.
//     audio.play();
// }