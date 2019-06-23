const numbers = [...Array(100).keys()];
const primes = numbers.filter(num => primeNumber(num));

function primeNumber(n) {
    if (n <= 0) return false;
    if (n <= 1) return false;
    if (n === 2) return 2;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return n;
}

console.log(primes.map(value => value.toString(16)));
