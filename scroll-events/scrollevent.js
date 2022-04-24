const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('.watch');
const button = document.querySelector('button');

function obCallback(payload){
     if (payload[0].intersectionRatio === 1) {
        button.classList.add('on');
        button.disabled = false;
        // un observe it after running to stop it from constently triggering.
        ob.unobserve(terms.lastElementChild);
    }
  
}
const ob = new IntersectionObserver(obCallback, {root:terms, threshold:1});
ob.observe(terms.lastElementChild);


// terms.addEventListener('scroll', function(e) {
//     console.log(e.currentTarget.scrollTop);
//     console.log(e.currentTarget.scrollHeight);
// });