const processor = require('./processor.js');

describe("transmission processor", function() {

    test("takes a string returns an object", function() {
        let result = processor("9701::<489584872710>");
        expect(typeof result).toEqual("object");
    });

    test("throws error if '::' not found", function() {
        const expectedError = new Error('Data is invalid ; should contain "::"');
        expect(() => { processor("9701<489584872710>"); }).toThrow(expectedError);
    });

    test("object contain 'id' as property", function() {
        let result = processor("9701::<489584872710>");
        expect(result.id).not.toEqual(undefined);
    });

    test("'id' property must be Number type", function() {
        let result = processor("9701::<489584872710>");
        expect(typeof result.id).toEqual("number");
    });

    
 
 });
