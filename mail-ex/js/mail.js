
const btnElem = document.querySelector(".btn-input");

const acceptedMail = ["pippo@gmail.com", "pluto@gmail.com", "bobby@gmail.com"];

let flag = false;
let outputmessage = "";


btnElem.addEventListener("click", function () {
    const mailElem = document.querySelector("#inputmail").value;

    for (let i = 0; i = acceptedMail.length && flag == true; i++) {

        if (acceptedMail[i] === mailElem) {
            flag = true;
            outputmessage = `Accesso Effettuato`;
            console.log(outputmessage);
        }else {
            outputmessage = `Accesso Negato`;
        }
    }

    const outputCard = document.querySelector(".output-card");
    outputCard.innerHTML = outputmessage;
});