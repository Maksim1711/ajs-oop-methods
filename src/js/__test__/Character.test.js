import Character from '../Character';

test('create Character name < 2', () => {
  expect(() => new Character('m', 'Zombie')).toThrowError(new Error('миннимум 2 символа максимум 10 символов'));
});

test('create Character name > 10', () => {
  expect(() => new Character('mag12072001', 'Zombie')).toThrowError(new Error('миннимум 2 символа максимум 10 символов'));
});

test('create Character type Error', () => {
  expect(() => new Character('Rick', 'Human')).toThrowError(new Error('класс не существует'));
});

test('create Character name ok', () => {
  const character = new Character('Rick', 'Daemon');
  expect(character.name).toBe('Rick');
});

test('create Character type ok', () => {
  const character = new Character('Rick', 'Daemon');
  expect(character.type).toBe('Daemon');
});

test('create Character ok', () => {
  const character = new Character('Rick', 'Daemon');
  const result = {
    name: 'Rick',
    type: 'Daemon',
    health: 100,
    level: 1,
  };
  expect(character).toMatchObject(result);
});

test('create Character levelUp 0', () => {
  const character = new Character('Rick', 'Daemon');
  character.health = 0;
  expect(() => character.levelUp()).toThrowError(new Error('Нельзя повысить левел умершего'));
});

test('create Character levelUp ok', () => {
  const character = new Character('Rick', 'Daemon');
  character.attack = 10;
  character.defence = 10;
  character.levelUp();
  expect(character.health).toBe(100);
  expect(character.attack).toBe(12);
  expect(character.defence).toBe(12);
  expect(character.level).toBe(2);
});

test('create Character damage', () => {
  const character = new Character('Rick', 'Daemon');
  character.defence = 10;
  character.damage(50);
  expect(character.health).toBe(55);
});

test('create Character damage high', () => {
  const character = new Character('Rick', 'Daemon');
  character.defence = 10;
  character.damage(500);
  expect(character.health).toBe(0);
});
