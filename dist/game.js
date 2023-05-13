// Variable Declaration
const buttons = document.querySelectorAll(".btn");
const resetbtn = document.querySelector(".reset");
const vs = document.querySelector("#vs");
const comimage=document.querySelector('Botimg');
let count = 0;
let playercount = 0;
let comptcount = 0;

// console.log(random);
// function to select user selection
function showNumber(button) {
  if (button.id == "paper") {
    document.querySelector(".choice").textContent = `you select:${button.id}`;
  } else if (button.id == "rock") {
    document.querySelector(".choice").textContent = `you select:${button.id}`;
  } else {
    document.querySelector(".choice").textContent = `you select:${button.id}`;
  }
  return button.id;
}
// function to select computer value
function computer(random) {
  const comptvalue = [rock, paper, scissor];
  let randomval = comptvalue[random].value;
  console.log(randomval);
  if (randomval == "rock") {
    document.querySelector("#Botimg").src = "./asserts/rock.png";
    document.querySelector(
      ".botchoice"
    ).textContent = `Compter Select:${randomval}`;
  } else if (randomval == "paper") {
    document.querySelector("#Botimg").src = "./asserts/paper.png";
    document.querySelector(
      ".botchoice"
    ).textContent = `Compter Select:${randomval}`;
  } else {
    document.querySelector("#Botimg").src = "./asserts/scissors.png";
    document.querySelector(
      ".botchoice"
    ).textContent = `Compter Select:${randomval}`;
  }
  return randomval;
}
function compare(comptval, userval) {
  if (comptval == userval) {
    document.querySelector("#vs").textContent = "it's tie!";
  } else if (comptval == "rock" && userval == "paper") {
    playercount += 1;
    document.querySelector("#vs").textContent = "Player Win";
    document.querySelector(
      "#usercount"
    ).textContent = `Player - ${playercount}`;
  } else if (comptval == "scissor" && userval == "paper") {
    comptcount += 1;
    document.querySelector("#vs").textContent = "Computer Win";
    document.querySelector(
      "#comptcount"
    ).textContent = `Computer - ${comptcount}`;
  } else if (comptval == "scissor" && userval == "rock") {
    playercount += 1;
    document.querySelector("#vs").textContent = "Player Win";
    document.querySelector(
      "#usercount"
    ).textContent = `Player - ${playercount}`;
  } else if (comptval == "paper" && userval == "rock") {
    comptcount += 1;
    document.querySelector("#vs").textContent = "Computer Win";
    document.querySelector(
      "#comptcount"
    ).textContent = `Computer - ${comptcount}`;
  } else if (comptval == "rock" && userval == "scissor") {
    comptcount += 1;
    document.querySelector("#vs").textContent = "Computer Win";
    document.querySelector(
      "#comptcount"
    ).textContent = `Computer - ${comptcount}`;
  } else if (comptval == "paper" && userval == "scissor") {
    playercount += 1;
    document.querySelector("#vs").textContent = "Player Win";
    document.querySelector(
      "#usercount"
    ).textContent = `Player - ${playercount}`;
  }
}
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let random = Math.round(Math.random() * 2);
    showNumber(button);
    computer(random);
    let comptval = computer(random);
    let userval = showNumber(button);
    console.log(comptval, userval);
    compare(comptval, userval);
    count += 1;
    document.querySelector("#round").textContent = `Round :${count}`;
    console.log(playercount, comptcount);
    if (playercount == 10) {
      document.querySelector("#vs").textContent = "Player Win the Game";
      document.querySelector("#paper").hidden = true;
      document.querySelector("#rock").hidden = true;
      document.querySelector("#scissor").hidden = true;
      let image = document.createElement("img");
      image.src = "./asserts/trophy.png";
      document.querySelector(".images").appendChild(image);
    } else if (comptcount == 10) {
      document.querySelector("#vs").textContent = "Computer Win the Game";
      document.querySelector("#Botimg").src = "./asserts/trophy.png";
      document.querySelector("#paper").hidden = true;
      document.querySelector("#rock").hidden = true;
      document.querySelector("#scissor").hidden = true;
    }
  });
});

resetbtn.addEventListener("click", () => {
  count = 0;
  playercount = 0;
  comptcount = 0;
  console.log(vs.textContent);
  let image = document.querySelector("img");
      image.src = "../asserts/trophy.png";
  document.querySelector("#paper").hidden = false;
  document.querySelector("#rock").hidden = false;
  document.querySelector("#scissor").hidden = false;
  document.querySelector("#vs").textContent = "VS";
  document.querySelector("#usercount").textContent = `Player - 0`;
  document.querySelector("#comptcount").textContent = `Computer - 0`;
  document.querySelector(".choice").textContent = "Pick One!";
  document.querySelector(".botchoice").textContent =
    " Waiting for the selection";
  document.querySelector("#round").textContent = `Round : 0`;
  document.querySelector('.botimage').src="./asserts/scissors.png";
  document.querySelector(".images").removeChild(image);
  
});
