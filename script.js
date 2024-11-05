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
            msg.textContent=(result);
            scr.textContent=(humanScore + " - "+ computerScore);
            return result;
            

        } else if (computerChoice === "rock"){
            result = "You win!";
            msg.textContent=(result);
            humanScore++;
            scr.textContent=(humanScore + " - "+ computerScore);
            return result;
            

        }else if (computerChoice === "scissors"){
            result = "You lose!";
            msg.textContent=(result);
            computerScore++;
            scr.textContent=(humanScore + " - "+ computerScore);
            return result;
        }

    }else if (humanChoice === "rock"){
        
        if (computerChoice === "paper"){
            result ="You lose!";
            msg.textContent=(result);
            computerScore++;
            scr.textContent=(humanScore + " - "+ computerScore);
            return result; 
                       
        }else if (computerChoice === "rock"){
            result = "It´s a draw!";
            msg.textContent=(result);
            scr.textContent=(humanScore + " - "+ computerScore);
            return result;

        }else if (computerChoice === "scissors"){
            result = "You win!";
            msg.textContent=(result);
            humanScore++;
            scr.textContent=(humanScore + " - "+ computerScore);
            return result;
        }

    }else if(humanChoice === "scissors"){
        
        if (computerChoice === "paper"){
            result = "You win!";
            msg.textContent=(result);
            humanScore++;
            scr.textContent=(humanScore + " - "+ computerScore);
            return result;
                                    
        }else if (computerChoice === "rock"){
            result = "You lose!"
            msg.textContent=(result);
            computerScore++;
            scr.textContent=(humanScore + " - "+ computerScore);
            return result;
                           
        }else if (computerChoice === "scissors"){
            result = "It´s a draw!";
            msg.textContent=(result);
            scr.textContent=(humanScore,computerScore);
            return result
                          
        } 
    }
         
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
 
  button.addEventListener("click", () => {
    if (humanScore < 5 && computerScore < 5){
        playRound(button.id,getComputerChoice());

    }else if(humanScore === 5) {
        msg.textContent=("You win the whole game!");
    }else if (computerScore === 5){
        msg.textContent= ("You lose the whole game!");
    }

    
    
    });
});
const body = document.querySelector("body");
const msg = document.createElement("div");
const scr = document.createElement("div");
body.appendChild(msg);
body.appendChild(scr);
