const { sum, sub } = require('./index')

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});
test('adds 5 - 3 to equal 2', () => {
    expect(sub(5, 3)).toBe(5);
});