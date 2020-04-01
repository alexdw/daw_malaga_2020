import {expect} from "chai";
import {init} from "../src/main.js"

describe("Start test suite", ()=> {
    it("Si ejecuto init(1,2,9,30) debe devolver 42", () => {
        expect(init(1,2,9,30)).to.eq(42);
    })
})
