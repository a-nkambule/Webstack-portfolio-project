let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let home = document.querySelector("#home-btn");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};
document.getElementById("home-btn").addEventListener("click", myFunction);

function myFunction() {
  let name = prompt("What is your name?");
  document.getElementById("home-btn").innerHTML = "Welcome to STARBUCKS!";
}
