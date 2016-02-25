var fib = [];
fib[0] = 0;
fib[1] = 1;
i = 1;

var fibE = [];
var counter = 0;

/*
for (var i = 1; i <= 10; i++) {
    fib[i+1] = fib[i] + fib[i-1];
}
*/

//this block is ***sort of*** correct if I change the while value to <4M it will return a value >4M on the array thats why I put it to <3M to go get the <4M originally
do {
    fib[i + 1] = fib[i] + fib[i-1];
    i++;
} while (fib[i] < 3000000);


//to get even numbers
for (var e = 0; e <= fib.length; e++) {
    if (fib[e] % 2 === 0) {
        fibE[counter] = fib[e];
        counter++;
    }
}

//to add even numbers inside the fibE array
var sum = fibE.reduce(function(a, b) {
   return a + b;
})

console.log(sum);
