
function getComputerChoice()
{
    choice = undefined;
    rnd_value = Math.random();
    
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

console.log(getComputerChoice());