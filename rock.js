let [computer_score,user_score]=[0,0];
let resultR=  document.getElementById("result");
let choicesR = {
  'rock':{
    'rock' :'draw',
    'scissor' :'win',
    'paper' :'lose'
  },
   'scissor':{
    'rock':'lose',
    'scissor':'draw',
    'paper':'win'
   },
   'paper':{
    'rock':'win',
    'scissor':'lose',
    'paper':'draw'
    }
}
function checker(input)
{ 
  var choices=["rock", "paper", "scissor"];
var num=Math.floor(Math.random()*3);
  document.getElementById("computerC").innerHTML=`computer choose <span>${choices[num]}</span>`;
  
document.getElementById("userC").innerHTML=`user choose <span>${input}</span>`;

let compC = choices[num];
switch(choicesR[input][compC])
{
case 'win': resultR.style.cssText="background-color:#cefdce; color:#689f38";
    resultR.innerHTML="YOU WIN";
    user_score++;
    break;
 case 'lose':
    resultR.style.cssText="background-color:aqua; color:#d32f2f";
    resultR.innerHTML="YOU LOSE";
    computer_score++;
    break;
default:
    resultR.style.cssText="background-color:#e5e5e5; color:#808080";
    resultR.innerHTML="DRAW";
    break;   
}
  document.getElementById("computerScore").innerHTML=computer_score;
  document.getElementById("userScore").innerHTML=user_score;
}