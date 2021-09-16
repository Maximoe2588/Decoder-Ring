const expect = require("chai").expect;
const polybius = require("../src/polybius");

describe("polybius square cipher", () => {
    
    it ("should return 42 for both i and j when encoding", () => {
        const testOne = polybius("i");
        const testTwo = polybius("j");
        expect(testOne).to.equal(testTwo)
    })

    it ("should translate 42 to (i/j)", () => {
        const actual = polybius("42");
        const expected = "(i/j)";
        expect(actual).to.equal(expected);
    })
    
    it ("should ignore capital letters", () => {
        const actual = polybius("A");
        const expected = polybius("a");
        expect(actual).to.equal(expected);
    })

    it ("maintains spaces when encoding", () => {
        const actual = polybius("a a");
        const expected = "11 11";
        expect(actual).to.equal(expected);
    })

    it ("maintains spaces when decoding", () => {
        const actual = polybius("11 11");
        const expected = "a a";
        expect(actual).to.equal(expected);
    })

    
})
