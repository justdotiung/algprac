const { log } = console;

// 오픈채팅방
function solution(record) {
  let enterIds = {};
  let result = [];
  for (let i = 0; i < record.length; i++) {
    let arrR = record[i].split(" ");
    let condition = arrR[0];
    let id = arrR[1];
    let nickname = arrR[2];

    switch (condition) {
      case "Enter":
        result.push(`${id}님이 들어왔습니다.`);
        enterIds[id] = nickname;
        break;
      case "Leave":
        result.push(`${id}님이 나갔습니다.`);
        break;
      case "Change":
        enterIds[id] = nickname;
        break;
    }
  }

  return result.map((a) => {
    return a.replace(/^\w+/, enterIds[a.match(/^\w+/)[0]]);
  });
}
log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uId1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Leave uId1234",
    "Change uid4567 Ryan",
  ])
);
