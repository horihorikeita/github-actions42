const { TestScheduler } = require('jest');
const {add2,calcTax} = require('./script');

describe("add2のテスト", () => {
    test("引数1で3を出力", () => {
        expect(add2(1)).toEqual(3);
    });

    test('引数0で2を出力', () => {
        expect(add2(0)).toEqual(2);
    });

    test('引数が数字以外でnullを出力', () => {
        expect(add2('こんにちは')).toEqual(null);
    });

});

