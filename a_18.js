// 상호평가

function solution(scores) {
  let totalScores = [];
  for (let i = 0; i < scores.length; i++) {
    for (let j = 0; j < scores[i].length; j++) {
      if (!totalScores[j]) totalScores[j] = [];
      totalScores[j].push({ score: scores[i][j], no: i });
    }
  }
  let avgs = totalScores.reduce((a, c, i) => {
    let cScore = c.map((ts) => ts.score);
    const selfScore = c[i].score;
    const max = Math.max(...cScore);
    const min = Math.min(...cScore);
    if (!(selfScore === max) && !(selfScore === min)) {
      a.push(cScore.reduce((an, cn) => an + cn, 0) / cScore.length);
      return a;
    }
    if (
      (cScore.filter((cs) => cs === max).length === 1 && selfScore === max) ||
      (cScore.filter((cs) => cs === min).length === 1 && selfScore === min)
    ) {
      a.push(
        (cScore.reduce((an, cn) => an + cn, 0) - selfScore) /
          (cScore.length - 1)
      );
      return a;
    }
    a.push(cScore.reduce((an, cn) => an + cn, 0) / cScore.length);
    return a;
  }, []);

  return avgs.reduce((a, c) => {
    if (c >= 90) return (a += "A");
    if (c >= 80) return (a += "B");
    if (c >= 70) return (a += "C");
    if (c >= 50) return (a += "D");
    return (a += "F");
  }, "");
}

console.log(
  solution([
    [100, 90, 98, 88, 65],
    [50, 45, 99, 85, 77],
    [47, 88, 95, 80, 67],
    [61, 57, 100, 80, 65],
    [24, 90, 94, 75, 65],
  ])
);
