function solution() {
  function bfs() {
    const queue = [1];
    while (queue.length > 0) {
      const n = queue.shift();
      console.log(n);
      if (n >= 7) {
        return;
      }
      queue.push(2 * n);
      queue.push(2 * n + 1);
    }
  }
  bfs();
}
console.log(solution());
