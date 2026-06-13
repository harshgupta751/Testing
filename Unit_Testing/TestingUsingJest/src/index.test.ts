import {it, describe, expect} from '@jest/globals'
import {sum, multiply} from './index';

describe("Sum function testing", ()=>{

    it("positive input testing", ()=>{
        const finalAnswer = sum(1,3);

        expect(finalAnswer).toBe(4);


    })

    it("Negative Input Testing", ()=>{
        const finalAnswer = sum(-9, -53);

        expect(finalAnswer).toBe(-62);
    })

});

describe("Multiply Function testing", ()=>{

it("Zero input testing", ()=>{
const finalAnswer = multiply(0, 5);

expect(finalAnswer).toBe(0);


})


})