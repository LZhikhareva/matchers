export const players = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
]

export const key = 'health';
export const sortedPlayers = players.sort((player1, player2) => player1[key] > player2[key] ? -1 : 1);
console.log(sortedPlayers)