import { Sum } from "../sum"

test("it should give the sum of tow numbers",()=>{
    const ans= Sum(3,4);
    expect (ans).toBe(7);
});