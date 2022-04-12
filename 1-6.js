function solution(str) {
  const map = {};
  let answer = ""
  for(const s of str) {
    map[s] = map[s]? ++map[s] : 1;
  }
  max = 0;
  for( const s in map) {
    if( max < map[s]) {
      max = map[s];
      answer = s
    }
  }
  return answer
}

let str="BACBACCACCBDEDE";
console.log(solution(str));