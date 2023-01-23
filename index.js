var random_dice1 = Math.floor(Math.random()*6)+1; //1-6
var random_image1 = "images/dice"+random_dice1+".png"; //images/dice1.png - images/dice6.png
dice1 = document.querySelector(".img1").setAttribute("src",random_image1);

var random_dice2 = Math.floor(Math.random()*6)+1; //1-6
var random_image2 = "images/dice"+random_dice2+".png"; //images/dice1.png - images/dice6.png
dice2 = document.querySelector(".img2").setAttribute("src",random_image2);

if(random_dice1>random_dice2){
    document.querySelector("h1").innerHTML = "🚩Player 1 wins";
}
else if(random_dice2>random_dice1){
    document.querySelector("h1").innerHTML = "Player 2 wins🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}
