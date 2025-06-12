const choices = ["rock", "paper", "scissor"];
const player = document.getElementById("player");
const computer = document.getElementById("computer");
const result = document.getElementById("result");
const pScore =document.getElementById("pScore");
const cScore =document.getElementById("cScore");


let playerscore = 0;
let computerscore = 0;

function playGame(playerChoice){
const computerChoice = choices[Math.floor( Math.random()*3)];

let gameResult = "";

if(playerChoice === computerChoice){
    gameResult = "IT'S A TIE!";
}
else{
    switch(playerChoice){
        case "rock":
            gameResult = (computerChoice === "scissor")? "YOU WIN!" : "YOU LOSE!";
            break;
         case "paper":
            gameResult = (computerChoice === "rock")? "YOU WIN!" : "YOU LOSE!";
               break;    

               case "scissor":
                gameResult = (computerChoice === "paper")? "YOU WIN!" : "YOU LOSE!";
                break;
    }
}
player.textContent = `PLAYER: ${playerChoice}`;
computer.textContent = `COMPUTER: ${computerChoice}`;
result.textContent = gameResult;

result.classList.remove("green","red");

switch(gameResult){
    case "YOU WIN!":
        result.classList.add("green");
        playerscore++;
        pScore.textContent = playerscore; 
        break;
        
        case "YOU LOSE!":
            result.classList.add("red");
            computerscore++;
            cScore.textContent = computerscore; 
            break;
            
}
}

