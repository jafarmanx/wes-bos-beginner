// Make a div
const myDiv = document.createElement('div');
// add a class of wrapper to it
myDiv.classList.add('wrapper');
// put it into the body
document.body.insertAdjacentElement('afterbegin',myDiv);
// make an unordered list
const mylist = document.createElement('ul');

// add three list items with the words "one, two, three" in them
const item1 = document.createElement('li');
const item2 = document.createElement('li');
const item3 = document.createElement('li');

// put that list into the above wrapper
mylist.appendChild(item1);
mylist.appendChild(item2);
mylist.appendChild(item3);

document.querySelector('.wrapper').insertAdjacentElement('afterbegin',mylist)
// create an image
const myImg = document.createElement('img');
// set the source to an image
myImg.src = 'https://picsum.photos/200'
// set the width to 250
myImg.width = 250;
// add a class of cute
myImg.classList.add('cute')
// add an alt of Cute Puppy
myImg.alt ='Cute Puppy'
// Append that image to the wrapper
document.querySelector('.wrapper').appendChild(myImg)
// with HTML string, make a div, with two paragraphs inside of it
const myhtml = `<div><p>p1</p><p>p2</p></div>`
// put this div before the unordered list from above
document.querySelector('ul').insertAdjacentHTML('beforebegin',myhtml)
// add a class to the second paragraph called warning
let paragraphes = document.querySelectorAll('p')
paragraphes[1].classList.add('warning')
// remove the first paragraph
paragraphes[0].remove()

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height){
    const ageInDogYears = age * 7;
    const plyCardhtml = `
        <div class="playerCard">
            <h2>${name} - ${age}</h2>
            <p>They are ${height} and ${age} years old.  In Dog years this person would be ${ageInDogYears}. That would be a tall dog!</p>
            <button>delete</button>
        </div>
    `
    return plyCardhtml
}
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const playerCardsDiv = document.createElement('div')
playerCardsDiv.classList.add('cards')
// make 4 player cards using generatePlayerCard
const card1 = generatePlayerCard('David',23,10);
const card2 = generatePlayerCard('Robert',24,10);
const card3 = generatePlayerCard('Samantha ',26,10);
const card4 = generatePlayerCard('Nathan',26,10);

// append those cards to the div
playerCardsDiv.insertAdjacentHTML('afterbegin', card1);
playerCardsDiv.insertAdjacentHTML('beforeend', card2);
playerCardsDiv.insertAdjacentHTML('beforeend', card3);
playerCardsDiv.insertAdjacentHTML('beforeend', card4);
// put the div into the DOM just before the wrapper element

document.querySelector('.wrapper').insertAdjacentElement('beforebegin',playerCardsDiv);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll('button')
// make out delete function
function deleteBtn(){
    this.parentElement.remove();
}
// loop over them and attach a listener
for(i=0;i < buttons.length; i++){
    buttons[i].addEventListener('click',deleteBtn)
}