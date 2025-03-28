import { sum } from "../Sum"

test("adding of 2 number",()=>{
    const result = sum(3,4);

    expect(result).toBe(7);

})