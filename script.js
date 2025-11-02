let choices = document.querySelectorAll(".choices");
let rockbtn = document.querySelector("#rock");
let paperbtn = document.querySelector("#paper");
let scissorsbtn = document.querySelector("#scissors");
let userScore = document.querySelector(".score1");
let compScore = document.querySelector(".score2");
let msg = document.querySelector("#para");
let resetBtn = document.querySelector(".resetbtn");



let score1 = 0;
let score2 = 0;

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playGame(userchoice);
  });
});


const genCompChoics = () => {
  let opt = ["rock", "paper", "scissors"];
  let radIdx = Math.round(Math.random() * 2);
  return opt[radIdx];
};

const playGame = (userChoice) => {
  let compChoics = genCompChoics();
  if (userChoice == compChoics) {
    msg.innerText = `Draw =>${userChoice} : ${compChoics}`;
    msg.style.color = "rgba(34, 27, 7, 1)"
  } 

  else {
    if (userChoice == "rock" && compChoics == "paper") {
      msg.innerText = `Your "${userChoice}" beated by AI "${compChoics}".`;
      score2++;
      compScore.innerText = score2;
      msg.style.color = "red";
    }
    else if (userChoice == "paper" && compChoics == "scissors") {
      msg.innerText = `Your "${userChoice}" beated by AI "${compChoics}".`;
      score2++;
      compScore.innerText = score2;
      msg.style.color = "red";
    }
    else if (userChoice == "scissors" && compChoics == "rock") {
      msg.innerText = `Your "${userChoice}" beated by AI "${compChoics}".`;
      score2++;
      compScore.innerText = score2;
      msg.style.color = "red";
    }
    else if (userChoice == "paper" && compChoics == "rock") {
      msg.innerText = `Your "${userChoice}" beats AI "${compChoics}".`;
      score1++;
      userScore.innerText = score1;
      msg.style.color = "green";
    }
    else if (userChoice == "scissors" && compChoics == "paper") {
      msg.innerText = `Your "${userChoice}" beats AI "${compChoics}".`;
      score1++;
      userScore.innerText = score1;
      msg.style.color = "green";
    }
    else if (userChoice == "rock" && compChoics == "scissors") {
      msg.innerText = `Your "${userChoice}" beats AI "${compChoics}".`;
      score1++;
      userScore.innerText = score1;
      msg.style.color = "#00ff00ff";
    }
  }
};

resetBtn.addEventListener("click", () => {
  userScore.innerText = "00";
  compScore.innerText = "00";
  score1 = 0;
  score2 = 0;
  msg.innerText = "Pick up your choice";
  msg.style.color = "blue"
});
