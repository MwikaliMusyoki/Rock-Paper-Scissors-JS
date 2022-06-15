const options = ["rock", "paper", "scissors"];

const choice = Math.floor(Math.random()*3);




function play(compPlay, playerPlay){
    if (compPlay == "rock"){
        if(playerPlay== "rock"){
            console.log("It's a draw")
        }
        else if(playerPlay=="paper"){
            console.log("you won")
        }
        else if(playerPlay=="scissors"){
            console.log("you lost")
        }
    }else if(compPlay == "paper"){
        if(playerPlay== "rock"){
            console.log("you lost")
        }
        else if(playerPlay=="paper"){
            console.log("It's a draw")
        }
        else if(playerPlay=="scissors"){
            console.log("you won")
        }
    }else if(compPlay == "scissors"){
        if(playerPlay== "rock"){
            console.log("you won")
        }
        else if(playerPlay=="paper"){
            console.log("you lost")
        }
        else if(playerPlay=="scissors"){
            console.log("It's a draw")
        }
    }
}

for(i=0; i<5; i++){
    const compPlay = options[choice];
    const playerPlay = prompt("What's your play? \n rock, paper or scissors?");
    console.log(play(compPlay, playerPlay));
}


