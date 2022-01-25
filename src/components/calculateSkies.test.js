import {calculateSkiLength, skiLengthDiff} from './calculateSkies'
// @ponicode
describe("calculateSkiLength", () => {
    test("4 year old", () => {
        const result = calculateSkiLength(4.0, 100, "freestyle")
        expect(result).toEqual([100, 0])
    })

    test("standard", () => {
        const result = calculateSkiLength(30, 168, "classic")
        expect(result).toEqual([188, 0])
    })

    test("lenth written in meters", () => {
        const result = calculateSkiLength(30, 1.68, "classic")
        expect(result).toEqual([188, 0])
    })

    test("Tall 7 year old classic", () => {
        const result = calculateSkiLength(7, 179, "classic")
        expect(result).toEqual([189, 10])
    })

    test("Really tall 7 year old classic", () => {
        const result = calculateSkiLength(7, 189, "classic")
        expect(result).toEqual([199, 8])
    })

    test("Tall 7 year old freestyle", () => {
        const result = calculateSkiLength(7, 179, "freestyle")
        expect(result).toEqual([189, 3])
    })

    test("approach max length", () => {
        const result = calculateSkiLength(28, 178, "freestyle")
        expect(result).toEqual([188, 4])
    })

    test("Longer then max Classic", () => {
        const result = calculateSkiLength(30, 300, "classic")
        expect(result).toEqual([207, 0])
    })

    test("Longer then max FreeStyle", () => {
        const result = calculateSkiLength(30, 300, "freestyle")
        expect(result).toEqual([192, 0])
    })
})

// @ponicode
describe("skiLengthDiff", () => {
    test("weird input but 0 diff", () => {
        const result = skiLengthDiff(256, 10, 0)
        expect(result).toBe(0)
    })
    test("weird input with 1 diff due to skies is longer then max then return 0", () => {
        const result = skiLengthDiff(256, 10, 1)
        expect(result).toBe(0)
    })

    test("max diff reached", () => {
        const result = skiLengthDiff(140, 160, 5)
        expect(result).toBe(5)
    })

    test("half way to max length", () => {
        const result = skiLengthDiff(140, 150, 20)
        expect(result).toBe(10)
    })
})
