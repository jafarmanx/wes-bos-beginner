console.log("it Works")

// this is going to be true and will not evaluate the second part
if (10>2){
    console.log("true")
} else if (11>10){
    console.log("true")
} else {
    console.log("false")
}

const age = 100;
if (age > 100){
    console.log("you are over 100")
} else if (age > 80){    
    console.log("you are over 80")
} else if (age > 70){    
    console.log("you are over 70")
} else if (age > 60){    
    console.log("you are over 60")
} else {
    console.log("you are under 60")
}

function slugify(sentence, lowercase){
    if (lowercase){
        return sentence.replace(/\s+/g, '-').toLowerCase();
    } else {
        return sentence.replace(/\s+/g, '-');
    }    
}

console.log(slugify("Hello World", true));
console.log(slugify("Hello World", false));

console.log(typeof(age))

console.log('Is 1 the same as \'1\'?', 1 === '1');

const name = 'wes';
const lastName = 'bos';
if ((name === 'wes' && lastName === 'bos') || name === 'wesley'){
    console.log('You are a cool dude');
}

function nameIsAwesome(name){
    return 'awesome'.includes(name);
}

if (nameIsAwesome('wes')){
    console.log('You are awesome');
}

const dog = 'snickers';
if (dog){
    console.log('you are a dog');
} else {
    console.log('you are not a dog');
}

const score = -100;
if (score) {
    console.log('you have a score');
} else {
    console.log('you have no score');
}


// Truty values
/*

*1
*0
*Full strings

*/
 
