// var colors = ["rgb(255, 0, 0)",
//               "rgb(255, 255, 0)",
//               "rgb(0, 255, 0)",
//               "rgb(0, 255, 255)",
//               "rgb(0, 0, 255)",
//               "rgb(255, 0, 255)",];
var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1" );
colorDisplay.textContent = pickedColor;
for(var i=0; i<squares.length; i++){
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    //add click listeners to squares
    squares[i].addEventListener("click",function(){
        // get color of clicked square
        var clickedColor = this.style.backgroundColor;
        // compare to pickedColor
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct !"
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again !"
        }
    });
}
function changeColors(color){
    for(var i=0; i<squares.length; i++){
        // make all of same color if correct
        squares[i].style.backgroundColor = color;
    }
}
function pickColor(){
    var random =  Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generateRandomColors(num){ 
    // make an array
    var arr = [];
    // add num random colors
    for(var i=0; i<num; i++){
        // get random color and ush in array
        arr.push(randomColor());
    }
    // RETURN array
    return arr;
}
function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}