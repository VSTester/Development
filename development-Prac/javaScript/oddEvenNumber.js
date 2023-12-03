var number = prompt("Enter your Number")
console.log("thanks");

if (number%2==0) {
  alert("Your Number is "+number+ " even")
  console.log("Your Number is "+number+ " even");
}
else {
  alert("Your Number is "+number+ " odd");
  console.log("Your Number is "+number+ " odd");
}


var welHeader = document.querySelector('#Welcome-header')
welHeader.addEventListener('mouseover',function(){
  welHeader.style.color="red"
})

var welHeader = document.querySelector('#Welcome-header')
welHeader.addEventListener('mouseout',function(){
  welHeader.style.color="black"
})
