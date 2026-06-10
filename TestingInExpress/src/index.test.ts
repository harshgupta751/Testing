import {describe, it, expect} from '@jest/globals'
import request from 'supertest'
import {app} from './index'

describe("/add post", ()=>{

it("Valid Input testing", async ()=>{

const res = await request(app).post("/add").send({
    a: 2, 
    b: 7
})

const finalAnswer= res.body.sum;

expect(res.status).toBe(200)
expect(finalAnswer).toBe(9)


})

it("Invalid input testing", async ()=>{

const res= await request(app).post("/add").send([1,9])

const finalAnswer = res.body.message;

expect(res.status).toBe(411);
expect(finalAnswer).toBe("Invalid input format");


})

})