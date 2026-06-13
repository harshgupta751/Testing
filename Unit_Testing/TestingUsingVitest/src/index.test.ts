import { describe, it, expect, vi } from 'vitest'
import request from 'supertest'
import { app } from './index'



vi.mock("./db", ()=> ({

prisma: {
    sum : {
        create : vi.fn()
    }
}

}))

describe("/add post", () => {

    it("Valid Input testing", async () => {

        const res = await request(app).post("/add").send({
            a: 2,
            b: 7
        })

        expect(res.status).toBe(200)

    })

    it("Invalid input testing", async () => {

        const res = await request(app).post("/add").send([1, 9])

        const finalAnswer = res.body.message;

        expect(res.status).toBe(411);
        expect(finalAnswer).toBe("Invalid input format");


    })

})