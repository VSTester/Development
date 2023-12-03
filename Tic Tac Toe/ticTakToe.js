

///Restart button

var restart = document.querySelector("#button-Restart")

//store all square element in a variable

var square = document.querySelectorAll(".row")



/// clear all boxes

function clearBoard(){
  for (var i = 0; i < square.length; i++) {
    square[i].textContent = '';
  }
}

restart.addEventListener("click",clearBoard);


/// logic
var  boxVariable = "";
function ChangeVariable(){
  if (boxVariable ==="") {
    if (this.textContent ==="") {
      this.style.color="red"
      this.textContent = "X";
      boxVariable="X";
  }
  }
  else if (this.textContent==="O"||this.textContent==="X")  {
    alert("box already filled")
  }else if (boxVariable ==="X") {
    this.textContent = "O";
    boxVariable="O";
  }else if (boxVariable ==="O") {
    this.style.color="red"
    this.textContent = "X";
    boxVariable="X";
}
}

for (var i = 0; i < square.length; i++) {
  square[i].addEventListener("click",ChangeVariable);
}
