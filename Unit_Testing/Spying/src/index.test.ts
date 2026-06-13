import { describe, it, expect, vi } from 'vitest'
import request from 'supertest'
import { app } from './index'
import {prisma} from './__mocks__/db'

vi.mock("./db")



describe("/subtract post", () => {

    it("Valid Input testing", async () => {
            prisma.result.create.mockResolvedValue({
                id: 1,
                a: 2,
                b: 7,
                result: -5
            })
        vi.spyOn(prisma.result, "create")

        const res = await request(app).post("/subtract").send({
            a: 2,
            b: 7
        })

        expect(prisma.result.create).toHaveBeenCalledWith({
        data: {
            a: 2,
            b: 7,
            result : -5
        }
        })
expect(res.body).toEqual({
    id: 1,
    a: 2, 
    b: 7,
    result: -5
})
        expect(res.status).toBe(200)



    })

    it("Invalid input testing", async () => {

        const res = await request(app).post("/subtract").send([1, 9])

        const finalAnswer = res.body.message;

        expect(res.status).toBe(411);
        expect(finalAnswer).toBe("Invalid input format");


    })

})