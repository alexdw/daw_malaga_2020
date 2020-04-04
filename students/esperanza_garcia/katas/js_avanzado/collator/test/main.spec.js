import {expect} from "chai";
import {init} from "../src/main.js"

describe("Start test suite", ()=> {
    it("Si ejecuto init(['d', 'n', 'a', 'z', 'ñ', 'o']) debe devolver [ 'a', 'd', 'n', 'ñ', 'o', 'z' ]", () => {
        expect(init(['d', 'n', 'a', 'z', 'ñ', 'o']).join("")).to.eq("adnñoz");
    })
})
