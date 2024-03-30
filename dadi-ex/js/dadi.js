const btnInput = document.querySelector("button");

btnInput.addEventListener("click", function () {
    let userNumber = 0;
    let computerNumber = 0;
    outputMessage = "";

    userNumber = Math.floor(Math.random () * 6);
    computerNumber = Math.floor(Math.random () * 6);

    if (userNumber > computerNumber) {
        outputMessage = `<div class="win">You Win!</div>`;
    } else if (userNumber === computerNumber) {
        outputMessage = `<div class="tie">Tie, try Again!</div>`;
    } else {
        outputMessage = `<div class="lose">You Lose!</div>`;
    }
    
    const result = document.querySelector(".esito");
    result.innerHTML = outputMessage;

    const user = document.querySelector(".user-number");
    user.innerHTML = `Your number is: ${userNumber}`;

    const computer = document.querySelector(".computer-number");
    computer.innerHTML = `Computer's number is: ${computerNumber}`; 
});