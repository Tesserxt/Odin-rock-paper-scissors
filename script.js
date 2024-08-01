
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


function getHumanChoice()
{
   let choice = prompt("Choose between rock, paper, or scissors.");
   return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice)
{
    console.log( "you chose " + humanChoice);
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
    console.log(result);
}

function playGame()
{
    while(humanScore < 3 && computerScore < 3){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    console.log("Game Over!")
    console.log("SCORES! {You} {Computer} : ", humanScore, computerScore);
}

let humanScore = 0;
let computerScore = 0;

playGame();