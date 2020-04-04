import {expect} from "chai";
import {init} from "../src/main.js"

describe("Start test suite", ()=> {
    it("Encontrar los valores mayores de 10!'", () => {
        let lista = [8, 13, 1, 10, 44];
        expect(init(lista)).to.eq(13);
    })
})
