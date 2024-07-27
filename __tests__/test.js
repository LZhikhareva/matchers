import { players } from "../src/js/app.js";

describe('sortPlayers', () => {
    const sortPlayers =  (players, key) => {
        return players.sort((player1, player2) =>
          player1[key] > player2[key] ? -1 : 1
        );
      };
    it('should sort players by health in descending order', () => {
        expect(players).toEqual(sortPlayers(players));
    });
});