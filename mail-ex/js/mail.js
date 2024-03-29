
const btnElem = document.querySelector(".btn-input");

const acceptedMail = ["pippo@gmail.com", "pluto@gmail.com", "bobby@gmail.com"];



btnElem.addEventListener("click", function () {
    
    let flag = false;
    let outputmessage = "";
    const mailElem = document.querySelector("#inputmail").value;
    const outputCard = document.querySelector(".output-card");

    for (let i = 0; i < acceptedMail.length; i++) {
        if (acceptedMail[i] === mailElem) {
            console.log("acceptedMail");
            flag = true;
            break;
        }
    }
    
    if (flag == true) {
        outputmessage = `Accesso Consentito`;
        outputCard.innerHTML = outputmessage;

    } else {
        outputmessage = `Accesso Negato`;
        outputCard.innerHTML = outputmessage;
    }

});