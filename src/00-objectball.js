function gameObject() {
return {
    home: {
    teamName: "Brooklyn Nets",
    colors: ["Black", "White"],
    players: {
            "Alan Anderson": {
                number: "0",
                shoe: "16",
                points: "22",
                rebounds: "12",
                assists: "12",
                steals: "3",
                blocks: "1",
                slamDunks: "1"},

            "Reggie Evans": {
                number: "30",
                shoe: "14",
                points: "12",
                rebounds: "12",
                assists: "12",
                steals: "12",
                blocks: "12",
                slamDunks: "7"},

            "Brook Lopez": {
                number: "11",
                shoe: "17",
                points: "17",
                rebounds: "19",
                assists: "10",
                steals: "3",
                blocks: "1",
                slamDunks: "15"},

            "Mason Plumlee": {
                number: "1",
                shoe: "19",
                points: "26",
                rebounds: "12",
                assists: "6",
                steals: "3",
                blocks: "8",
                slamDunks: "5"},

            "Jason Terry": {
                number: "31",
                shoe: "15",
                points: "19",
                rebounds: "19",
                assists: "2",
                steals: "4",
                blocks: "11",
                slamDunks: "1"},
}
},
away: {
    teamName: "Charlotte Hornets",
    colors: ["Turquois", "Purple"],
    players: {
            "Jeff Adrien": {
                number: "4",
                shoe: "18",
                points: "10",
                rebounds: "1",
                assists: "1",
                steals: "2",
                blocks: "7",
                slamDunks: "2"},

            "Bismak Biyombo": {
                number: "0",
                shoe: "16",
                points: "12",
                rebounds: "4",
                assists: "7",
                steals: "7",
                blocks: "15",
                slamDunks: "10"},
        
            "DeSagna Diop": {
                number: "2",
                shoe: "14",
                points: "24",
                rebounds: "12",
                assists: "12",
                steals: "4",
                blocks: "5",
                slamDunks: "5"},

           "Ben Gordon": {
                number: "8",
                shoe: "15",
                points: "33",
                rebounds: "3",
                assists: "2",
                steals: "1",
                blocks: "1",
                slamDunks: "0"},

            "Brendan Haywood": {
                number: "33",
                shoe: "15",
                points: "6",
                rebounds: "12",
                assists: "12",
                steals: "22",
                blocks: "5",
                slamDunks: "12"}
        }
    }
}
}
function numPointsScored(playersName){
    const playerPoints = gameObject().away.players[playersName].points
    console.log(playerPoints)
    return playerPoints 
}
function shoeSize(playersName){
    if(gameObject().home.players[playersName]){
        return gameObject().home.players[playersName].shoe
    }
    else return gameObject().away.players[playersName].shoe
}
function teamColors(basketballTeam){
    if(gameObject().home.teamName === basketballTeam){
        return gameObject().home.colors
    }
    else return gameObject().away.colors
}
function teamNames(){
    let idea = [gameObject().home.teamName, gameObject().away.teamName]
    return idea
}
function playerNumbers(teamName) {
    let jerseyNumbers = []
    if (teamName === gameObject().home.teamName){
        for(let key in gameObject().home.players){
            jerseyNumbers.push(gameObject().home.players[key].number)
         }
    }
    else {
        for(let key in gameObject().away.players){
            jerseyNumbers.push(gameObject().away.players[key].number)
        }
    }
    return jerseyNumbers
}

function playerStats(playersName) {
    let stats = {};
    if (gameObject().home.players.hasOwnProperty(playersName)) {
        stats = gameObject().home.players[playersName];
    } else if (gameObject().away.players.hasOwnProperty(playersName)) {
        stats = gameObject().away.players[playersName];
    }
    return stats;
}
function bigShoeRebounds(){
    const tays = gameObject().home.players["Mason Plumlee"].rebounds
    return tays
}
function mostPointsScored(){
    const lell = gameObject().away.players["Ben Gordon"].points
    return lell
}
function winningTeam(){
    const bes = gameObject().home.teamName
    return bes
}
function playerWithLongestName() {
  const players = gameObject().away.players;
  let longestName = "";

  for (let playerName in players) {
    if (players.hasOwnProperty(playerName)) {
      if (playerName.length > longestName.length) {
        longestName = playerName;
      }
    }
  }
  return longestName;
}
function doesLongNameStealATon(){

}
function playerWithLongestNameHasMostSteals() {
    const game = gameObject(); // assuming the gameObject function returns the game object
  
    let longestNamePlayer = null;
    let mostStealsPlayer = null;
  
    // Iterate over home team players
    for (const playerName in game.home.players) {
      const player = game.home.players[playerName];
  
      if (!longestNamePlayer || playerName.length > longestNamePlayer.length) {
        longestNamePlayer = playerName;
      }
  
      if (!mostStealsPlayer || player.steals > game.home.players[mostStealsPlayer].steals) {
        mostStealsPlayer = playerName;
      }
    }
  
    // Iterate over away team players
    for (const playerName in game.away.players) {
      const player = game.away.players[playerName];
  
      if (!longestNamePlayer || playerName.length > longestNamePlayer.length) {
        longestNamePlayer = playerName;
      }
  
      if (!mostStealsPlayer || player.steals > game.away.players[mostStealsPlayer].steals) {
        mostStealsPlayer = playerName;
      }
    }
  
    return longestNamePlayer === mostStealsPlayer;
  }