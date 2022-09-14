import Character from '../Undead';

test('create Character ok', () => {
  const character = new Character('Rick', 'Undead');
  const result = {
    name: 'Rick',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(character).toMatchObject(result);
});
