//Functions that allow players to choose their colors

$(document).ready(readyPageFunctions);


//Click handlers for each color
function readyPageFunctions() {
    $(".red").on("click", playerColor);
    $(".blue").on("click", playerColor);
    $(".gold").on("click", playerColor);
    $(".green").on("click", playerColor);
}


var playerSwitch = 0;
var playerOneColor = null;
var playerTwoColor = null;




//Function to assign color class to players
function playerColor() {
    if (playerOneColor !== null) {
        return;
    }
    if (playerTwoColor !== null) {
        return;
    }
    if (playerSwitch === 0) {
        playerOneColor = $(this).attr("class");
    } else if (playerSwitch === 1) {
        playerTwoColor = $(this).attr("class");
    }
    $(this).addClass("gray");
    $(this).off("click");
}