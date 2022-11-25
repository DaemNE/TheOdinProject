const reverseString = require("../functions/reverseString")

test("reverses string Hello to elloH", () => {
    expect(reverseString("Hello")).toBe("olleH")
})

test("reverses string 5ello to ello5", () => {
    expect(reverseString("Hello")).toBe("olleH")
})