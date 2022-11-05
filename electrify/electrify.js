console.log('It works!');

logo = document.querySelector('a');
greetings = document.querySelector('.greetings');

const fadeout = function(selector) {
     selector.style.animation = 'fadeout 1s ease-out';
     selector.addEventListener('animationend', function() {
        hide(selector);
    })
    console.log('fadeout');
}
const hide = function(selector) {
    selector.style.display = 'none';
}
const show = function(selector) {
    selector.style.display = 'block';
    selector.style.animation = 'fadein 2s ease-in';
    console.log('show');
}



greetings.addEventListener('click', function() {
    fadeout(greetings);
    show(logo);
});

// Javascript program to check whether there
 // exist at least k or not in range [2..n]
  
 let primes = [];

 // Generating all the prime numbers
 // from 2 to n.
 function SieveofEratosthenes(n)
 {
     let visited = new Array(n);
     visited.fill(false);
     for (let i = 2; i <= n + 1; i++)
         if (!visited[i]) {
             for (let j = i * i; j <= n + 1; j += i)
                 visited[j] = true;
             primes.push(i);
         }
 }

 function specialPrimeNumbers(n, k)
 {
     SieveofEratosthenes(n);
     let count = 0;
     for (let i = 0; i < primes.length; i++) {
         for (let j = 0; j < i - 1; j++) {

             // If a prime number is Special prime
             // number, then we increments the
             // value of k.
             if (primes[j] + primes[j + 1] + 1
                 == primes[i]) {
                 count++;
                 break;
             }
         }

         // If at least k Special prime numbers
         // are present, then we return 1.
         // else we return 0 from outside of
         // the outer loop.
         if (count == k)
             return true;
     }
     return false;
 }
  
 let n = 100, k = 2;
 if (specialPrimeNumbers(n, k))
     console.log("YES");
 else
     console.log("NO");
