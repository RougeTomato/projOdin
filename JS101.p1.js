var multiples = [];
var counter = 0;

for (var i = 1; i <= 1000; i++) {
    if (i % 3 === 0) {
        multiples[counter] = i;
        counter ++;
    } else if (i % 5 === 0) {
        multiples[counter] = i;
        counter ++;
    }
}

var sum = multiples.reduce(function(a, b) {
    return a + b;
})

console.log(sum);
