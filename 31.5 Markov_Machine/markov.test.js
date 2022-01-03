const { MarkovMachine } = require('./markov');

describe('Markov Tests', () => {
  let text;
  let words;
//   set text for all tests
  beforeAll(() => {
    text = new MarkovMachine('The cat in the hat');
    words = new MarkovMachine('The cat in the hat');
  });
  test('Test Markov value matches', () => {
    expect(words).toEqual(text);
  });
  test('Test Markov value !match', () => {
    const words1 = new MarkovMachine('I like layered cake');
    expect(words1).not.toEqual(text);
  });
  test('Test objects',() => {
    expect(text).not.toBe(words);
  });
  test('Test does not match', () => {
    expect(text).not.toEqual(expect.arrayContaining(["cake"]));
  });
});