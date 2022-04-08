function solution(str) {
  const a = "100000000";

  console.log(a.length);
  let aa = str.replace(/[^0-9]/g, "").replace(/^0+/g, "");

  if (aa.length > a.length) {
    aa = aa.split("");
    for (let i = 0; i < aa.length - a.length; i++) {
      aa.shift();
    }

    aa = aa.join("").replace(/^0+/g, "");
  }

  if (parseInt(aa) > parseInt(a)) {
    aa = aa.split("");
    aa.shift();
    aa = aa.join("").replace(/^0+/g, "");
  }

  return parseInt(aa);
}

let str = "310000g0en2T0s8eSoft";
console.log(solution(str));
