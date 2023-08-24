const input = document.querySelector("input");
const error = document.querySelector(".error");
const mainCard = document.querySelector(".main-box");
const responseCard = document.querySelector(".response-card");
const btnsubscribe = document.getElementById("subscribe-btn");
const btnDismiss = document.getElementById("dismiss");
const span = document.querySelector("span");

function main(e) {
  const regexPattern = /^[0-9]*[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+$/;
  if (!regexPattern.test(e.target.value)) {
    e.target.style.color = "red";
    error.classList.add("appear");
  } else {
    e.target.style.color = "";
    error.classList.remove("appear");
    span.textContent = e.target.value;
    subsBtn();
    dismissBtn();
  }
}
function subsBtn() {
  btnsubscribe.addEventListener("click", () => {
    mainCard.style.display = "none";
    responseCard.style.display = "block";
  });
}

function dismissBtn() {
  btnDismiss.addEventListener("click", () => {
    responseCard.style.display = "none";
    mainCard.style.display = "flex";
  });
}

input.addEventListener("change", main);
