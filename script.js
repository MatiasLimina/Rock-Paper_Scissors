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

function getHumanChoice(){
    let choice = prompt("Chose: rock, paper or scissor");
    return choice
}
console.log (getHumanChoice())