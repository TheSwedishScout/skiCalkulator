const calculateSkies = require("./calculateSkies")
// @ponicode
describe("calculateSkies.calculateSkiLength", () => {
    test("4 year old", () => {
        let result = calculateSkies.calculateSkiLength(4.0, 100, "freestyle")
        expect(result).toEqual([100, 0])
    })
    
    test("3", () => {
        let result = calculateSkies.calculateSkiLength(30, 168, "classic")
        expect(result).toEqual([188, 0])
    })

    test("Tall 7 year old classic", () => {
        let result = calculateSkies.calculateSkiLength(7, 179, "classic")
        expect(result).toEqual([189, 10]) // ski length diff would have been showing longer then manufacturing
    })
    test("Really tall 7 year old classic", () => {
        let result = calculateSkies.calculateSkiLength(7, 189, "classic")
        expect(result).toEqual([199, 8]) // ski length diff would have been showing longer then manufacturing
    })
    test("Tall 7 year old freestyle", () => {
        let result = calculateSkies.calculateSkiLength(7, 179, "freestyle")
        expect(result).toEqual([189, 3]) // ski length diff would have been showing longer then manufacturing
    })
    test("approach max length", () => {
        let result = calculateSkies.calculateSkiLength(28, 178, "freestyle")
        expect(result).toEqual([188, 4]) // ski length diff would have been showing longer then manufacturing
    })
    test("Longer then max Classic", () => {
        let result = calculateSkies.calculateSkiLength(30, 300, "classic")
        expect(result).toEqual([207, 0])
    })
    test("Longer then max FreeStyle", () => {
        let result = calculateSkies.calculateSkiLength(30, 300, "freestyle")
        expect(result).toEqual([192, 0])
    })
})
