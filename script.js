let humanScore = 0;
let computerChoice = 0;

function getComputerChoice(){
    let num = Math.floor(Math.random() * 3)+1;
    let choice = ""
    if(num === 1 ){
         choice = "scissors";
    }
    else if(num === 2){
         choice = "rock";
    }
    else if (num === 3) {
         choice = "paper";
    }
    return choice
        
        
}
// console.log(getComputerChoice())
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
// console.log (getHumanChoice())

function playRound (humanChoice,computerChoice){
    let result = ""
    if (humanChoice === "paper"){
        
        if (computerChoice === "paper"){
            result = "It´s a draw!";
            console.log(result);
            return result;
            

        } else if (computerChoice === "rock"){
            result = "You win!";
            console.log(result);
            return result;
            

        }else if (computerChoice === "scissors"){
            result = "You lose!";
            console.log(result);
            return result;
        }

    }else if (humanChoice === "rock"){
        
        if (computerChoice === "paper"){
            result ="You lose!";
            console.log(result);
            return result; 
                       
        }else if (computerChoice === "rock"){
            result = "It´s a draw!";
            console.log(result);
            return result;

        }else if (computerChoice === "scissors"){
            result = "You win!";
            console.log(result);
            return result;
        }

    }else if(humanChoice === "scissors"){
        
        if (computerChoice === "paper"){
            result = "You win!";
            console.log(result);
            return result;
                                    
        }else if (computerChoice === "rock"){
            result = "You lose!"
            console.log(result);
            return result;
                           
        }else if (computerChoice === "scissors"){
            result = "It´s a draw!";
            console.log(result);
            return result
                          
        } 
    }
         
}

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection,computerSelection);

function playGame (){
    
    let i = 0;
    for (i=0; i<5; i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection)

    }
}
playGame()