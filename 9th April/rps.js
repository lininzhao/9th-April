function rpsGame(yourChoice){
    console.log(yourChoice);
    var humanChoice,botChoice;
    humanChoice=yourChoice.id;
     botChoice= numberToChoice(randomRpsNum());
    var results=descideWinner(humanChoice,botChoice);
    console.log(botChoice);
    console.log(results);
    var message=finalMessage(results);
    console.log(message);
    rpsFrontEnd(yourChoice.id,botChoice,message);
}

function randomRpsNum(){
    return Math.floor(Math.random()*3);
}
function numberToChoice(number){
    return ['rock','scissors','paper'][number];
}
function descideWinner(yourChoice,computerChoice){
    var rpsDatabase={
        'rock':{'scissors':1,'rock':0.5,'paper':0},
        'scissors':{'paper':1,'scissors':0.5,'rock':0},
        'paper':{'rock':1,'paper':0.5,'scissors':0}
    }

    var yourScore=rpsDatabase[yourChoice][computerChoice];
    var computerScore=rpsDatabase[computerChoice][yourChoice];

    return [yourScore,computerScore];
};
function finalMessage([yourScore,computerScore]){
    if(yourScore==0){
        return {'message':'You lost','color':'red'};
    }else if(yourScore==0.5){
        return {'message':'You tied','color':'yellow'};
    }else if(yourScore==1){
        return {'message':'You win','color':'green'};
    }
}
function rpsFrontEnd(humanImgChoice,BotImgChoice,finalMessage){
    var imgDatabase={
        'rock':document.getElementById('rock').scr,
        'scissors':document.getElementById('scissors').src,
        'paper':document.getElementById('paper').src
    }
    //declear the img when final results showed
    document.getElementById('rock').remove();
    document.getElementById('scissors').remove();
    document.getElementById('paper').remove();

    //creative the div box for final result
    var humanDiv=document.createElement('div');
    var botDiv=document.createElement('div');
    var messageDiv=document.createElement('div');

    //add the img
    humanDiv.innerHTML="<img src='"+imgDatabase[humanImgChoice]+"'>";
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);



    botDiv.innerHTML="<img src='"+imgDatabase[BotImgChoice]+"'>";
    document.getElementById('flex-box-rps-div').appendChild(botDiv);

}