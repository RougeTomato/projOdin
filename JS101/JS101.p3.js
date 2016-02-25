function getPrimeFactors(num) {
    var factors = [], i;

    for (i = 2; i <= num; i++) {
        while (num % i === 0) {
            factors.push(i);
            num /= i;
        }
    }
    return factors;
}

var answer = getPrimeFactors(600851475143);

console.log(answer[answer.length-1])
