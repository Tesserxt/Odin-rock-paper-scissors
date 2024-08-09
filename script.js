
function getComputerChoice()
{
    let choice;
    let rnd_value = Math.random();
    
    if(rnd_value < 0.33){
        choice = "rock";
    }
    else if(rnd_value > 0.66){
        choice = "paper";
    }
    else{
        choice = "scissors";
    }
    return choice;
}


function getHumanChoice(e)
{
  console.log(e.target);
}

function playRound(e)
{
    if(!gameOver){
        let computerChoice = getComputerChoice();
        let humanChoice = e.target.id;
        
        //console.log( "you chose " + humanChoice);
        let result;
        if(humanChoice === computerChoice){
            result = "Tie!";
        }
        else if(humanChoice === "rock" && computerChoice === "scissors"){
            humanScore++; 
            result = `You win! ${humanChoice} beats ${computerChoice}`;
        }
        else if(humanChoice === "scissors" && computerChoice === "paper"){
            humanScore++;
            result = `You win! ${humanChoice} beats ${computerChoice}`;
        }
        else if(humanChoice === "paper" && computerChoice === "rock"){
            humanScore++;
            result = `You win! ${humanChoice} beats ${computerChoice}`;
        }
        else{
            computerScore++;
            result = `You Lose! ${computerChoice} beats ${humanChoice}`;
        }
        //console.log(result);
        const score = document.querySelector(".score");
        score.textContent = `${humanScore}-${computerScore}`;

        const announcement = document.querySelector("#announcement");
        announcement.textContent = result;

        if(humanScore === 5 || computerScore === 5){
            announcement.textContent = "Game Over!";
            gameOver = true;
            announcement.style.color = "red";
        }
    }
}

function playGame()
{


    {
        const buttons = document.querySelectorAll("button");

        buttons.forEach((button) =>  {
            button.addEventListener("click", playRound);
        })
    }
}

let humanScore = 0;
let computerScore = 0;
let gameOver = false;

playGame();



