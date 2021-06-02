const { log } = console;

// 뉴스 클러스터링
function solution(str1, str2) {
  let f = str1.toLocaleLowerCase().split("");
  let s = str2.toLocaleLowerCase().split("");

  const a = (arr) => (a, c, i) => arr[i + 1] ? (a.push(c + arr[i + 1]), a) : a;
  let farr = f.reduce(a(f), []).filter((v) => !/[\W\d_]/g.test(v));
  let sarr = s.reduce(a(s), []).filter((v) => !/[\W\d_]/g.test(v));
  log(farr);
  log(sarr);

  if (farr.length === 0 && sarr.length === 0) {
    return 65536;
  }

  const map = new Map();
  const map2 = new Map();
  const set = new Set([...farr, ...sarr]);

  farr.forEach((v) =>
    map.has(v) ? map.set(v, map.get(v) + 1) : map.set(v, 1)
  );
  sarr.forEach((v) =>
    map2.has(v) ? map2.set(v, map2.get(v) + 1) : map2.set(v, 1)
  );

  let c = 0;
  let t = 0;
  for (let k of set.keys()) {
    if (map.has(k) && map2.has(k)) {
      c += Math.min(map.get(k), map2.get(k));
      t += Math.max(map.get(k), map2.get(k));
    } else {
      t += map.get(k) || map2.get(k);
    }
  }
  log(map);
  log(map2);
  log(c, t);

  return Math.floor((c / t) * 65536);
}

log(solution("FRANCE", "french"));
log(solution("handshake", "shake hands"));
log(solution("aa1+aa2", "AAAA12"));
log(solution("AAbbaa_AA", " BBB"));
