import { CoPrime } from "../CoPrime";

describe("Probando algoritmo 'Co-Prime'", () => {
    it("Tiene que estar definido", () => {
        expect(CoPrime(2, 3)).toBeDefined();
    });
    it("Tiene que devolver un booleano", () => {
        expect(typeof CoPrime(2, 3)).toBe("boolean");
    });
    it("Tiene que devolver true si los números son 'Co-Primos'", () => {
        expect(CoPrime(15, 28)).toBe(true);
    });
    it("Tiene que devolver false si los números no son 'Co-Primos'", () => {
        expect(CoPrime(15, 20)).toBe(false);
    });
});