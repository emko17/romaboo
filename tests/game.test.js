import { Game } from '../src/engine/Game.js';

test('Game starts at year 0', () => {
    const game = new Game();
    expect(game.year).toBe(0);
});

test('Provinces can be added', () => {
    const game = new Game();
    game.addProvince('test', 'Test Province', 1000);
    expect(game.provinces.size).toBe(1);
});

test('Turn processing advances year', () => {
    const game = new Game();
    game.addProvince('test', 'Test', 1000);
    game.processTurn();
    expect(game.year).toBe(1);
});
