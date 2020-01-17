// var colors = ["rgb(255, 0, 0)",
//               "rgb(255, 255, 0)",
//               "rgb(0, 255, 0)",
//               "rgb(0, 255, 255)",
//               "rgb(0, 0, 255)",
//               "rgb(255, 0, 255)",];
var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1" );
var resetBtn = document.querySelector("#reset");
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");
var modeBtns = document.querySelectorAll(".mode");

colorDisplay.textContent = pickedColor;

for(var i=0; i<modeBtns.length; i++){
    modeBtns[i].addEventListener("click",function(){
        modeBtns[0].classList.remove("selected");
        modeBtns[1].classList.remove("selected");
        this.classList.add("selected");
        // if(this.textContent === "Easy"){
        //     numSquares = 3;
        // } else {
        //     numSquares = 6;
        // }
        this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
        reset();
        // how many squares to display
        // pick new colors
        // pick new pickedColor
        // update page
    });
}

function reset(){
    colors = generateRandomColors(numSquares);
    // pick new random color from array 
    pickedColor = pickColor();
    // change colorDisplay to match picked clor
    colorDisplay.textContent = pickedColor;
    resetBtn.textContent = "New Colors"
    for(var i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
       
    }
    messageDisplay.textContent = "";
    h1.style.backgroundColor = "steelblue";
}

// easyBtn.addEventListener("click",function(){
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i=0; i<squares.length; i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
// });
// hardBtn.addEventListener("click",function(){
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     colors = generateRandomColors(6);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i=0; i<squares.length; i++){
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";
//     }
// });
resetBtn.addEventListener("click",function(){
    reset();
    // colors = generateRandomColors(numSquares);
    // // pick new random color from array 
    // pickedColor = pickColor();
    // // change colorDisplay to match picked clor
    // colorDisplay.textContent = pickedColor;
    // this.textContent = "New Colors"
    // for(var i=0; i<squares.length; i++){
    //     squares[i].style.backgroundColor = colors[i];
    // }
    // messageDisplay.textContent = "";
    // h1.style.backgroundColor = "steelblue";
});
for(var i=0; i<squares.length; i++){
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    //add click listeners to squares
    squares[i].addEventListener("click",function(){
        // get color of clicked square
        var clickedColor = this.style.backgroundColor;
        // compare to pickedColor
        if(clickedColor === pickedColor){
            resetBtn.textContent = "Play Again ?";
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
        // get random color and push in array
        arr.push(randomColor());
    }
    // return array
    return arr;
}
function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}