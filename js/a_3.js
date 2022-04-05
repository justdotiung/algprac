const { log } = console;

// 신규 아이디 추천
function solution(new_id) {
  new_id = new_id
    .toLowerCase()
    .replace(/[^a-z-_.0-9]/g, "")
    .replace(/\.{2,}/g, ".")
    .replace(/^\.+/g, "")
    .replace(/\.$/g, "")
    .slice(0, 15)
    .replace(/\.$/g, "");
  if (new_id === "") return "aaa";

  if (new_id.length <= 2) {
    const loop = 3 - new_id.length;
    for (let i = 0; i < loop; i++) {
      new_id += new_id[new_id.length - 1];
    }
  }

  return new_id;
}

function solution2(new_id) {
  new_id = new_id
    .toLowerCase()
    .replace(/[^a-z-_.0-9]/g, "")
    .replace(/\.{2,}/g, ".")
    .replace(/^\.|\.$/g, "")
    .replace(/^$/, "a")
    .slice(0, 15)
    .replace(/\.$/g, "");

  if (new_id.length <= 2) {
    const loop = 3 - new_id.length;
    for (let i = 0; i < loop; i++) {
      new_id += new_id[new_id.length - 1];
    }
  }

  return new_id;
}

log(solution2("...!@BaT#*..y.abcdefghijklm"));
log(solution2("z-+.^."));
log(solution2("=.="));
log(solution2("123_.def"));
log(solution2("abcdefghijklmn.p"));
