
var player1 = prompt("Player One: Enter your name, you will be Blue");
var Player1Color = "rgb(86, 151, 255)";

var player2 = prompt("Player Second: Enter your name, you will be Red");
var Player2Color = "rgb(237, 45, 73)";

var gameOn = true;

var table = $("table tr")




function changeColor(rowIndex, colIndex, color){
  return table.eq(rowIndex).find("td").eq(colIndex).find("button").css("background-color":color);
  }

  function returnColor(rowIndex, colIndex, color){
    return table.eq(rowIndex).find("td").eq(colIndex).find("button").css("background-color");
    }

    
