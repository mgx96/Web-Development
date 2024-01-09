var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6) + 1;

var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 6) + 1;

var image1Selector = document.querySelector('.img1');
var image2Selector = document.querySelector('.img2');

if(randomNumber1 === 1){
    image1Selector.src = "./images/dice1.png";
}
else if (randomNumber1 === 2){
    image1Selector.src = "./images/dice2.png";
}
else if (randomNumber1 === 3){
    image1Selector.src = "./images/dice3.png";
}
else if (randomNumber1 === 4){
    image1Selector.src = "./images/dice4.png";
}
else if (randomNumber1 === 5){
    image1Selector.src = "./images/dice5.png";
}
else if (randomNumber1 === 6){
    image1Selector.src = "./images/dice6.png";
}

if(randomNumber2 === 1){
    image2Selector.src = "./images/dice1.png";
}
else if (randomNumber2 === 2){
    image2Selector.src = "./images/dice2.png";
}
else if (randomNumber2 === 3){
    image2Selector.src = "./images/dice3.png";
}
else if (randomNumber2 === 4){
    image2Selector.src = "./images/dice4.png";
}
else if (randomNumber2 === 5){
    image2Selector.src = "./images/dice5.png";
}
else if (randomNumber2 === 6){
    image2Selector.src = "./images/dice6.png";
}

if (randomNumber1 > randomNumber2){
    
}