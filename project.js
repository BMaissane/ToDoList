/*
document.querySelector("h4").style.background = "yellow"; 

const baliseHTML = document.querySelector("h4");
console.log("This is a test") 
*/

// clickEvent
/*
const questionContainer = document.querySelector(".click-event-box");
console.log(questionContainer);

questionContainer.addEventListener('click', () => {
    console.log("Click !");
});

document.querySelector("h1").style.background = "yellow";
*/
/*
let now = new Date();
console.log("La date d'aujourd'hui est le " + now.toLocaleDateString()); // affiche la date/heure actuelle


const datetime = new Date();
console.log(datetime.toLocaleDateString('fr-FR'));
document.getElementById(newFunction()).textContent = datetime;

function newFunction() {
    return "date";  
};


const container = document.querySelector('click');

container.addEventListener("click", buttons); */

const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

grandparent.addEventListener('click', el => {
    console.log('e.target')
})