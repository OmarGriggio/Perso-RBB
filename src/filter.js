export function isEmpty(obj) {
  if (
    obj.name === "" ||
    obj.surname === "" ||
    obj.birthday === "" ||
    obj.address.street === "" ||
    obj.address.zip === ""
  ) {
    return true;
  } else {
    return false;
  }
}
export function ageControl(player) {
  if (player.age < 10 || player.age > 60) {
    return true;
  } else {
    return false;
  }
}
export function playerAlreadyExist(player, players) {
  let exist = false;
  for (let index = 0; index < players.length; index++) {
    if (
      player.name == players[index].name &&
      player.surname == players[index].surname &&
      player.birthday == players[index].birthday
    ) {
      exist = true;
    }
  }
  return exist;
}