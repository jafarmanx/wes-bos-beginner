console.log("it works!")

const unorderlist = document.createElement('ul');


const items = [];
for (i=1;i<6;i++)
{
    items[i-1] = document.createElement('li');
    items[i-1].textContent =`item ${i}`;    
    
}

// const item2 = document.createElement('li');
// item2.textContent =`item 2`;    

// const item3 = document.createElement('li');
// item3.textContent =`item 3`;    

// const item4 = document.createElement('li');
// item4.textContent =`item 4`;    

// const item5 = document.createElement('li');
// item5.textContent =`item 5`;    

// unorderlist.appendChild(item1);
// unorderlist.appendChild(item2);
// unorderlist.appendChild(item3);
// unorderlist.appendChild(item4);
// unorderlist.appendChild(item5);


// items[0] = item1;
// items[1] = item2;
// items[2] = item3;
// items[3] = item4;
// items[4] = item5;

for( i in items){unorderlist.appendChild(items[i])}
document.body.insertAdjacentElement('afterbegin',unorderlist)


console.log("The childNode is:")
console.log(document.body.childNodes)
console.log("The firstChild is: ")
console.log(document.body.firstChild)
console.log("The lastChild is: " )
console.log(document.body.lastChild)
console.log("The nextSibling is: " )
console.log(document.body.nextSibling)
console.log("The parentNode is: " )
console.log(document.body.parentNode)