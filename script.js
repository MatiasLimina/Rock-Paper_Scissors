function getComputerChoice(){
    let num = Math.floor(Math.random() * 3)+1;
    let choice = ""
    if(num === 1 ){
         choice = "Scissors";
    }
    else if(num === 2){
         choice = "Rock";
    }
    else if (num === 3) {
         choice = "Paper";
    }
    return choice
        
        
}
console.log(getComputerChoice())
// funct humanchoice
// while choice != rock or paper or scissor
// choice = prompt invalid answer, please use one of the options
// return choice

function getHumanChoice(){
    let ask = prompt("Chose rock, paper or scissors");
    let choice = ask.toLowerCase();  
    if (choice === "rock"||choice ==="scissors"|| choice==="paper"){
        
        return choice;
      
    }else{
        while(choice !== "rock"||"scissors"||"paper"){
            choice = prompt("Select a valid option").toLowerCase();
                if (choice === "rock" || choice === "scissors" || choice === "paper"){
                    break;
                }else{
                    continue;
                }
            }
    }
    return choice
       
}
console.log (getHumanChoice())