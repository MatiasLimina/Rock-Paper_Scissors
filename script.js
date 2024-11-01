let humanScore = 0;
let computerScore = 0;

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

// playRound(humanSelection,computerSelection);

// function playGame (){
    
//     let i = 0;
//     for (i=0; i<5; i++){
//         let humanSelection = getHumanChoice();
//         let computerSelection = getComputerChoice();
//         let score = playRound(humanSelection,computerSelection);

//         if (score === "You win!" ){
//             humanScore ++;
//             console.log(humanScore,"-",computerScore);
//         }else if (score === "You lose!"){
//             computerScore++;
//             console.log(humanScore,"-",computerScore);
//         }else if (score === "It´s a draw!"){
//             console.log(humanScore,"-",computerScore)
//         }
//     }
//     if (humanScore > computerScore){
//         console.log ("You win the whole game!");
//     }else{
//         console.log ("You lose the gmae to the computer :c");
//     }
// }
// playGame()



const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
 
  button.addEventListener("click", () => {
    playRound(button.id,getComputerChoice());
  });
});
