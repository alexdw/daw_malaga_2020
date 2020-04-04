import {expect} from "chai";

import {fizzbuzz} from "../src/main.js"

describe("KATA FIZZBUZZ", ()=> {
    it("Si pasa 1 me debe develover 1 cadena", () => {
        expect(fizzbuzz(1)).to.eq("1");
    })



    it("Si pasa 2 me debe develover 2 cadena", () => {
        expect(fizzbuzz(2)).to.eq("2");
    })
    it("Si pasa 3 me debe develover FIZZ", () => {
        expect(fizzbuzz(3)).to.eq("FIZZ");
    })
    it("Si pasa 4 me debe develover 4 cadena", () => {
        expect(fizzbuzz(4)).to.eq("4");
    })
    it("Si pasa 5 me debe develover BUZZ cadena", () => {
        expect(fizzbuzz(5)).to.eq("BUZZ");
    })
    it("Si pasa 6 me debe develover FIZZ cadena", () => {
        expect(fizzbuzz(6)).to.eq("FIZZ");
    })

    it("Si pasa 7 me debe develover 7 cadena", () => {
        expect(fizzbuzz(7)).to.eq("7");
    })

    it("Si es divisible entre 3 devuelve FIZZ", () => {
        expect(fizzbuzz(3)).to.eq("FIZZ");
        expect(fizzbuzz(6)).to.eq("FIZZ");
        expect(fizzbuzz(9)).to.eq("FIZZ");
    })
    it("Si es divisible entre 5 devuelve BUZZ", () => {
        expect(fizzbuzz(5)).to.eq("BUZZ");
        expect(fizzbuzz(10)).to.eq("BUZZ");
        // expect(fizzbuzz(15)).to.eq("BUZZ");
    })
    it("Si es divisible entre 3 y 5 devuelve FIZZBUZZ", () => {
        expect(fizzbuzz(15)).to.eq("FIZZBUZZ");
        expect(fizzbuzz(30)).to.eq("FIZZBUZZ");
        expect(fizzbuzz(45)).to.eq("FIZZBUZZ");
        // expect(fizzbuzz(15)).to.eq("BUZZ");
    })

})
