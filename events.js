function changetext(){
    const Para = document.querySelector("p");
    Para.textContent=" changed me to a new one due to an event handler";
}

let arrowfnction = () =>{
    const Para = document.querySelector("#p");
    Para.textContent=" changed me to a new ones";
    Para.style.border = "10px solid #125";
  }

