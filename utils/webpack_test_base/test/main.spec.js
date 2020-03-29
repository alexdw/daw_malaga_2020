import {expect} from "chai";
import {init} from "../src/main.js"

describe("Start test suite", ()=> {
    it("Si ejecuto hello() debe devolver 'Hello World!'", () => {
        expect(init()).to.eq("Hello World!");
    })
})
