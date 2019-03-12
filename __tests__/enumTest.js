const { enums } = require('../index');
const { NUM1, NUM2, REDUCE_ERR } = require('../consts');

describe('enums', () => {
    test('make simple enum', () => {
        expect(enums([NUM1])).toEqual({ NUM1 });
    });

    test('make two enums', () => {
        expect(enums([NUM1, NUM2])).toEqual({ NUM1, NUM2 });
    });

    test('make double enum', () => {
        expect(enums([NUM1, NUM1])).toEqual({ NUM1 });
    });

    test('make no enums', () => {
        expect(enums([])).toEqual({});
    });

    test('wrong params', () => {
        expect(() => enums(NUM1)).toThrow(REDUCE_ERR);
    });

    test('passing in object', () => {
        expect(() => enums({ NUM1 })).toThrow(REDUCE_ERR);
    });
});
