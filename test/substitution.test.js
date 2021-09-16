const expect = require("chai").expect;
const substitution = require("../src/substitution");

describe ("substitution cipher function", () => {

    it ("returns false if given alphabet.length < 26", () => {
        const actual = substitution("apple", "abc");
        expect(actual).to.be.false
    });

    it ("correctly translates phrase with given alphabet", () => {
        const actual = substition("abc", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal("xoy");
    });

    it ("returns false if any repeating characters in alphabet", () => {
        const actual = substitution("abc", "xoyqmcgrukswaflnthdjpzibee")
        expect(actual).to.be.false
    })

    it ("maintains spaces when encoding", () => {
        const actual = substitution("a a", "xoyqmcgrukswaflnthdjpzibev")
        const expected = "x x";
        expect(actual).to.equal(expected)
    })

    it ("maintains spaces when decoding", () => {
        const actual = substitution("x x", "xoyqmcgrukswaflnthdjpzibev")
        const expected = "a a";
        expect(actual).to.equal(expected)
    })

    it ("ignores capital letters", () => {
        const actual = substitution("AA", "xoyqmcgrukswaflnthdjpzibev");
        const expected = "x x"
        expect(actual).to.equal(expected)
    })

})

