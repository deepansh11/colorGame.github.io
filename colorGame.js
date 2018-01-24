var numOfSquares = 6 ;
var colors =[];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    for (var i = 0; i < modeButtons.length; i++) {
      modeButtons[i].addEventListener("click", function() {
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        modeButtons[2].classList.remove("selected");
        modeButtons[3].classList.remove("selected");
        this.classList.add("selected");
          if (this.textContent === "Very Easy") {
          numOfSquares = 2;
        } else if (this.textContent === "Easy") {
          numOfSquares = 3;
        } else if(this.textContent === "Hard"){
          numOfSquares = 6;
        } else {
          numOfSquares = 9;
        }
        reset();
    });
  }
  for(var i = 0; i < squares.length; i++){
  	// add initial colors to squares
  	squares[i].style.background = colors[i];

  	//add click listeners to squares
  	squares[i].addEventListener("click", function() {
  		//grab color of clicked squares
  		var clickedColor = this.style.background;
  		//compare color to pickedColor
  		if(clickedColor === pickedColor) {
  			messageDisplay.textContent = "Correct!";
  			resetButton.textContent = "Play Again?";
  			changeColors(clickedColor);
  			h1.style.background = clickedColor;
  		} else {
  			this.style.background = "#232323";
  			messageDisplay.textContent = "Try Again";
        }
      });
    }

    reset();
}
  function reset(){
    colors = generateRandomColors(numOfSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    //change colors of squraes
    messageDisplay.textContent = "";
    resetButton.textContent = "New colors";
    for (var i = 0; i < squares.length; i++) {
      if (colors[i]) {
        squares[i].style.display = "block";
        squares[i].style.backgroundColor = colors[i];
      }
      else {
        squares[i].style.display = "none";
      }
    }
    h1.style.backgroundColor = "steelblue";
  }





resetButton.addEventListener("click",function(){
  reset();
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		var clickedColor = this.style.background;
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(color){
  //loop through all squares
  for (var i = 0; i < squares.length; i++) {
    //change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}

  function pickColor(){
    var  random = Math.floor(Math.random() * colors.length)
    return colors[random];
  }

  function generateRandomColors(num) {
    //make an array
    var arr = []
    //add num random colors to array
    for (var i = 0; i < num; i++) {
      //get random color and push into array
      arr.push(randomColor())
    }
    //return that array
    return arr;
  }
  function randomColor() {
    //pick a red from 0-255
    var r = Math.floor(Math.random()*256)
    //pick a green from 0-255
    var g = Math.floor(Math.random()*256)
    //pick a blue from 0-255
    var b = Math.floor(Math.random()*256)
    return "rgb("+ r +", " + g +", " + b +")";
    }
