function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}

function generateRandomPrimeInRange(min, max) {
  while (true) {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    if (isPrime(randomNum)) {
      return randomNum;
    }
  }
}

module.exports = generateRandomPrimeInRange;
