
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
   let choice = prompt("Choose between rock, Ppper, or scissors.");
   return choice.toLowerCase();
}
console.log(getHumanChoice());