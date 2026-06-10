import {describe, it, expect} from '@jest/globals'
import request from 'supertest'
import {app} from './index'

describe("/add post", ()=>{

it("Positives input testing", async ()=>{

const res = await request(app).post("/add").send({
    a: 2, 
    b: 7
})

const finalAnswer= res.body.sum;

expect(finalAnswer).toBe(9)


})

it("Negative input testing", async ()=>{

const res= await request(app).post("/add").send({
    a: -19,
    b: -17
})

const finalAnswer = res.body.sum;

expect(finalAnswer).toBe(-36);


})



})