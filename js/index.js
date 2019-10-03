//declare variables first
//ie each die (set of dice)
//what number will we win at? the target number to aim for is 7
//lets track the number of times we roll the Dice
//lets track how many times we win and lose
//use jquery


var dieA = 1;
var dieB = 1;

var target = 7;
var numberofRolls = 0;
var wins = 0;
var losses = 0;

$('#roll-dice').on('click', rollTheDice)


function rollTheDice() {
  //is going to use getRandomNumberfor both die
  dieA = getRandomNumber();
  dieB = getRandomNumber();

  //use the number to set the class of the die which you can see in the style.css file

  $('#dieA').attr('class', 'dice-' + dieA);
  $('#dieB').attr('class', 'dice-' + dieB);


  //increment the total number of rolls by 1
  numberofRolls++ //the same thing as numberofRolls+1
  //console.log(numberofRolls)

  //invoke the checkIfRollIsWinner function to see if you win

  var isWinner = checkIfRollIsWinner(dieA, dieB);
    if(isWinner){
      wins++
    } else {
      losses++
    }
    console.log(wins, losses);
}


function getRandomNumber() {
  //we need to get a random number between 1-6.
  //we need whole numbers - math.floor()--> round down


//math.floor rounds it down, Math.random gives us a random number between 0 and 1
//multiply that random number by 6 b/c there are 6 sides
//then add 1 so the range is between 1 - 6 instead of 0-5, if we don't do that
//we will floor/roound down to 0, and never round up to 6
return Math.floor((Math.random() * 6) + 1)
}


function checkIfRollIsWinner(dieA, dieB){
  //see if total of dieA and dieB eqauls the target
  if(dieA + dieB === target){
    return true
  }else{
    return false
  }
}



function sumOfRolls (){
  //add together what is rolled on each turn
  return sum(dieA + dieB)
  console.log(sumOfRolls)
}

//Bet box
$("input[data-type='currency']").on({
    keyup: function() {
      formatCurrency($(this));
    },
    blur: function() {
      formatCurrency($(this), "blur");
    }
});
