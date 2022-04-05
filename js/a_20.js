// 직업군 추천하기

function solution(table, languages, preference) {
  let m = table.reduce((a, c) => {
    const arr = c.split(" ");
    let totalPoint = 0;
    for (let i = 0; i < languages.length; i++) {
      const point = 6 - arr.indexOf(languages[i]);
      if (point < 6) {
        totalPoint += preference[i] * point;
      }
    }
    a.push({ job: arr[0], totalPoint });
    return a;
  }, []);

  return m.sort((a, b) => {
    return b.totalPoint - a.totalPoint === 0
      ? a.job.charCodeAt() - b.job.charCodeAt()
      : b.totalPoint - a.totalPoint;
  })[0].job;
}

solution(
  [
    "SI JAVA JAVASCRIPT SQL PYTHON C#",
    "CONTENTS JAVASCRIPT JAVA PYTHON SQL C++",
    "HARDWARE C C++ PYTHON JAVA JAVASCRIPT",
    "PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP",
    "GAME C++ C# JAVASCRIPT C JAVA",
  ],
  ["PYTHON", "C++", "SQL"],
  [7, 5, 5]
);

solution(
  [
    "SI JAVA JAVASCRIPT SQL PYTHON C#",
    "CONTENTS JAVASCRIPT JAVA PYTHON SQL C++",
    "HARDWARE C C++ PYTHON JAVA JAVASCRIPT",
    "PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP",
    "GAME C++ C# JAVASCRIPT C JAVA",
  ],
  ["JAVA", "JAVASCRIPT"],
  [7, 5]
);
