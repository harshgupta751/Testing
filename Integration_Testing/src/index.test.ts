import { describe, it, expect } from 'vitest'
import request from 'supertest'
import { app } from './index'


describe("/subtract post", () => {

    it("Valid Input testing", async () => {

        const res = await request(app).post("/subtract").send({
            a: 2,
            b: 7
        })

expect(res.body.result).toBe(-5)
        expect(res.status).toBe(200)



    })

    it("Invalid input testing", async () => {

        const res = await request(app).post("/subtract").send([1, 9])

        const finalAnswer = res.body.message;

        expect(res.status).toBe(411);
        expect(finalAnswer).toBe("Invalid input format");


    })

})