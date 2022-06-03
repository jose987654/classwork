  const changetext= () => {

  const p =document.querySelector("p");
  p.textContent="changed to Weekend mode";

  }
  // listen for onclivk event
   let button = document.querySelector("button");
   button.addEventListener('click',changetext);