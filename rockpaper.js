function randomInteger(min,max){
    max++
    return Math.floor(Math.random() * (max - min)) + min;
}

function getComputerChoice(){
    let ran = randomInteger(1,3);
    switch (ran){
        case 1: return "rock";
        case 2: return "paper";
        case 3: return "scissors"
    }
}

function playerSelection(){
let answered = false;
let selection = "";
while (!answered){
    selection = prompt("enter your move:").toLowerCase();
    if (selection == "rock"|| selection == "paper" || selection == "scissors"){
        answered = true;
    } else {
        alert("please enter a valid move.")
        }
    }
    return selection;
}
// for (let i = 0; i < 20; i++){  
//     console.log(getComputerChoice());
// }

function playRound(){
    let compChoice = getComputerChoice();
    let playerMove = playerSelection();
    alert(`You used ${playerMove} and the computer used ${compChoice}`)
    if (playerMove == "rock"){
        if (compChoice == "rock"){
            return "tie";
        } else if (compChoice == "scissors"){
            return "win";
        } else {
            return "lose";
        }
    }
    if (playerMove == "scissors"){
        if (compChoice == "rock"){
            return "lose";
        } else if (compChoice == "scissors"){
            return "tie";
        } else {
            return "win";
        }
    }
    if (playerMove == "paper"){
        if (compChoice == "rock"){
            return "win";
        } else if (compChoice == "scissors"){
            return "lose";
        } else {
            return "tie";
        }
    }
}

function game(rounds){
let score = 0;
let compScore = 0;
    for (i = 0; i < rounds; i++){
        let result = playRound();
        switch (result){
            case "win": alert(`you won round number ${i+1}!`);
            score++;
            break;
            case "lose": alert(`you lost round number ${i+1}`);
            compScore++;
            break;
            case "tie": alert(`you tied round number ${i+1}`);
            break;
        }
    }
    let message = "";
    if (score < compScore){
        message = "sorry -- you lost.";
    } else if (score > compScore){
        message = "congratulations, you won!"
    } else {
        message = "it's a tie game!";
    }
    return `your final score was ${score} - ${compScore}. ${message}`;
}
alert(game(1));


