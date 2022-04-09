function solution(arr) {
  const answer = [];
  let b,
    isPrime = false;
  for (let i = 0; i < arr.length; i++) {
    b = arr[i].toString().split("").reverse().join("");
    b = parseInt(b);
    if (b === 1) continue;
    for (let j = 2; j * j < b; j++) {
      if (b % j === 0) {
        isPrime = true;
        break;
      }
    }
    if (!isPrime) answer.push(b);
    isPrime = false;
  }

  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
