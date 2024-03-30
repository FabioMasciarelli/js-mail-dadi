const btnInput = document.querySelector("button");

btnInput.addEventListener("click", function () {
    let userNumber = 0;
    let computerNumber = 0;
    outputMessage = "";

    userNumber = Math.floor(Math.random () * 6);
    computerNumber = Math.floor(Math.random () * 6);

    if (userNumber > computerNumber) {
        outputMessage = `You Win!`;
    } else if (userNumber === computerNumber) {
        outputMessage = `Tie!`;
    } else {
        outputMessage = `You Lose!`;
    }
    
    const result = document.querySelector(".result");
    result.innerHTML = outputMessage;


});