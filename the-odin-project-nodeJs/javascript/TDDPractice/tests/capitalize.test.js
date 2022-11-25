const capitalize = require('../functions/capitalize');

test('Capitalize hello to Hello', () => {
    expect(capitalize("hello")).toBe("Hello");
});

test('Capitalize 5ello to 5ello', () => {
    expect(capitalize("5ello")).toBe("5ello");
});