const h2Tag = document.getElementsByTagName("h2");
const backPack = document.getElementById("backpack");
const cards = document.getElementsByClassName("card");
const pandaBtns = document.getElementsByClassName("panda-btn-buy-now");
const cardTitles = document.getElementsByClassName("card-title");
const emailBtn = document.getElementById("exampleInputEmail1");
const subBtn = document.getElementById("submitbtn");
const colrChange = document.getElementById("colorChnage");
const cardImgs = document.getElementsByClassName("card-img-top");

for (h2T of h2Tag) {
  h2T.style.color = "lightblue";
}

backPack.style.backgroundColor = "tomato";

for (let card of cards) {
  card.style.borderRadius = "30px";
}

for (let pandaBtn of pandaBtns) {
  pandaBtn.addEventListener("click", (e) => {
    e.target.remove();
  });
}

subBtn.disabled = true;
emailBtn.addEventListener("keyup", (e) => {
  if (e.target.value.toLowerCase() == "email") {
    subBtn.disabled = false;
  } else {
    subBtn.disabled = true;
  }
});
let count = 0;
colrChange.addEventListener("click", (e) => {
  count++;
  if (count === 2) {
    colrChange.style.backgroundColor = "red";
  }
  if (count === 3) {
    colrChange.style.backgroundColor = "white";
  }
});

for (let cardImg of cardImgs) {
  cardImg.addEventListener("mouseenter", () => {
    cardImg.style.cursor = "pointer";
    cardImg.style.scale = "1.2";
  });
  cardImg.addEventListener("mouseleave", () => {
    cardImg.style.scale = "1.0";
  });
}
