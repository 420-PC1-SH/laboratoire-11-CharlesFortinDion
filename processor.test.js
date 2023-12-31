const processor = require('./processor.js');

describe("transmission processor", function () {

    test("takes a string and returns an object", function () {
        let result = processor("9701::<489584872710>");
        expect(typeof result).toEqual("object");
    });

    test("returns -1 if '::' not found", function () {
        let result = processor("9701<489584872710>");
        expect(result).toEqual(-1);
    });

    test("returns id in object", function () {
        let result = processor("9701::<489584872710>");
        expect(result.id).not.toEqual(undefined);
    });

    test("id property is a number", function () {
        let result = processor("9701::<489584872710>");
        expect(result.id).toEqual(9701);
    })

    test("returns rawData in object", function() {
        let result = processor("9701::<489584872710>");
        expect(result.rawData).not.toEqual(undefined);
    })

    test(" rawData returns -1 if does not start with < or end with >", function() {
        let result = processor("9701::489584872710>");
        expect(result.rawData).toEqual(-1);
    })
});