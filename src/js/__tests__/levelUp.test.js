import { newPerson, Character } from '../levelUp';

test('should calculate total for purchases', () => {

  const expected = 30;
  newPerson.levelUp();
  const received = newPerson.defence;

  expect(received).toBe(expected);
});

// it('should throw Error: Нельзя повысить level умершего!', () => {
//   expect(() => { newPerson.levelUp(); }).toThrow(new Error('Нельзя повысить level умершего'));
// });
