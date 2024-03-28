const mailElem = document.querySelector("#inputmail").value;

const btnElem = document.querySelector(".btn-input");

const acceptedMail = ["pippo@gmail.com", "pluto@gmail.com", "bobby@gmail.com"];

let flag = false;
let outputmessage = "";


btnElem.addEventListener("click", function() {
    console.log("btnElem");

    for (let i = 0; i < acceptedMail.length; i++) {

        if (acceptedMail === mailElem) {
            flag = true;
            outputmessage = `Accesso Effettuato`;
            console.log(outputmessage);
        }else {
            outputmessage ="Accesso Negato";
        }
    }
});