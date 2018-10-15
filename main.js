console.log('Ready..');
// var myHeading = document.querySelector('h1');
// myHeading.textContent='Hello world!';

function multiply(num1, num2) {
    return num1 * num2;
}
var result = multiply(3,5);
console.log(result)

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'https://vignette.wikia.nocookie.net/jurassicpark/images/9/9e/Bamboo.jpg/revision/latest?cb=20150420220106') {
        myImage.setAttribute('src','./images/sky1.jpeg')
    } else {
        myImage.setAttribute('src','https://vignette.wikia.nocookie.net/jurassicpark/images/9/9e/Bamboo.jpg/revision/latest?cb=20150420220106')
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
var flag = true;
var myName = '';

window.onload = function(){
    myName = prompt('enter your name');
}

myButton.onclick = function() {
    
    if (flag) {
        
        myHeading.textContent = 'Hola ' + myName;
        flag = false;
    } else {
        myHeading.textContent = 'Chao ' + myName;
        flag = true;
    }
}
