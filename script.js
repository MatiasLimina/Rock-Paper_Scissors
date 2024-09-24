function getComputerChoice(){
    let num = Math.floor(Math.random() * 3)+1;
    let choice = ""
    if(num = 1 ){
         choice= "Scissors";
    }
    else if(num = 2){
         choice = "Rock";
    }
    else {
         choice = "Paper";
    }
    return choice
        
        
}
console.log(getComputerChoice())