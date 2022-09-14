import Character from '../Bowman';

test('create Character ok', () => {
  const character = new Character('Rick', 'Bowman');
  const result = {
    name: 'Rick',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(character).toMatchObject(result);
});
