document.query

var thirdLi = document.querySelector('li:nth-child(3)');
var anchorSelector = document.querySelector('.list a');
var buttonSelector = document.querySelector('button');
var bodySelector = document.querySelector('body');

bodySelector.classList.add("toggle"); // adds a class named toggle to the body.
//substitues: document.querySelector("body").classList.add("toggle");
bodySelector.classList.toggle("toggle"); // toggles the "toggle" class on and off.
//substitues: document.querySelector("body").classList.toggle("toggle");

anchorSelector.getAttribute("href"); //gets the href attribute from the anchor.
// substitues: document.querySelector('.list a').getAttribute("href");
anchorSelector.setAttribute("href", "www.bing.com"); // sets the href attribute from the anchor
// substitues: document.querySelector('.list a').setAttribute("href", "www.bing.com");

