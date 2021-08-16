const {sum, resta} = require('../src/sum')

describe('pruebas para sumar', () => {
    test('1 + 2 = 3', () => {
        expect(sum(1, 2)).toBe(3)
    })
    test('2 + 2 = 4', () => {
        expect(2+2).toBe(4)
    })
    test('Validacion de objectos', () => {
        const data = {name: "paul"};
        expect(data).toEqual({name: "paul"});
        expect(2+2).toBe(4)
    })
    test('null', () => {
        const n = null

        expect(n).toBeNull()
        expect(n).toBeDefined()
        // expect(n).not.toBeDefined()
        expect(n).not.toBeTruthy()
        expect(n).toBeFalsy()
    })
    test('zero', () => {
        const z = 0

        expect(z).not.toBeNull()
        // expect(z).toBeDefined()
        expect(z).not.toBeTruthy()
        expect(z).toBeFalsy()
    })
    it('esto deberia de retornar 3 con los valores de 1 + 2', () => {
        expect(sum(1, 2)).toBe(3)

        // toBeGreaterThan()
        // toBeGreaterThanOrEqual()
        // toBeLessThan()
        // toBeLessThanOrEqual()
        // toBe()
        // toBeCloseTo()
        // toEqual()
    })
});