export function isEmpty(obj) {
  if (
    obj.name === "" ||
    obj.surname === "" ||
    obj.age === "" ||
    obj.genre === "" ||
    obj.category === ""
  ) {
    return true;
  } else {
    return false;
  }
}
export function ageControl(player) {
  if (player.age < 10 || player.age > 100) {
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
      player.age == players[index].age
    ) {
      exist = true;
    }
  }
  return exist;
}
export function playerAlreadyInTeam(player, players) {
  return playerAlreadyExist(player, players);
}
export function sexControle(team, player) {
  if (team.genre == player.genre) {
    return true;
  } else {
    return false;
  }
}
