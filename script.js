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
    
    if (humanChoice === "paper"){
        
        if (computerChoice === "paper"){
            console.log("It´s a draw!");

        } else if (computerChoice === "rock"){
            console.log ("You win!");

        }else if (computerChoice === "scissors"){
            console.log ("You lose!");
        }

    }else if (humanChoice === "rock"){
        
        if (computerChoice === "paper"){
            console.log("You lose!"); 
                       
        }else if (computerChoice === "rock"){
            console.log ("It´s a draw!");

        }else if (computerChoice === "scissors"){
            console.log ("You win!");
        }

    }else if(humanChoice === "scissors"){
        
        if (computerChoice === "paper"){
            console.log("You win!");
                                    
        }else if (computerChoice === "rock"){
            console.log ("You lose!");
                           
        }else if (computerChoice === "scissors"){
            console.log ("It´s a draw!");
                          
        } 
    }
         
}

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection,computerSelection);

function playGame (humanSelection, computerSelection){
    let i = 0;
    for (i=0; i<4; i++){
        console.log(playGame(humanSelection,computerSelection))
    }
}