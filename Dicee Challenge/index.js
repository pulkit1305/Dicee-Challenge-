
var randomnumber=Math.floor(Math.random()*6+1);
var randomdiceimage="dice"+randomnumber+".png";
var randomImageSource="images/"+randomdiceimage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);


var randomnumber2=Math.floor(Math.random()*6+1);
var randomdiceimag2e="dice"+randomnumber2+".png";
var randomImageSource="images/"+randomdiceimag2e;
var image11=document.querySelectorAll("img")[1];
image11.setAttribute("src", randomImageSource);

if(randomnumber>randomnumber2){
  document.querySelector("h1").innerHTML="🥇Player 1 wins!"
}
else if(randomnumber<randomnumber2){
  document.querySelector("h1").innerHTML="🥇Player 2 wins!"
}
else{
  document.querySelector("h1").innerHTML="📍Draw!"
}
