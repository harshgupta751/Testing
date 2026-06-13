import { describe, it, expect, vi } from 'vitest'
import request from 'supertest'
import { app } from './index'
import {prisma} from './__mocks__/db'

vi.mock("./db")



describe("/add post", () => {

    it("Valid Input testing", async () => {
            prisma.sum.create.mockResolvedValue({
                id: 1,
                a: 2,
                b: 7,
                sum: 9
            })
        const res = await request(app).post("/add").send({
            a: 2,
            b: 7
        })

        expect(res.status).toBe(200)
        expect(res.body) .toEqual({
            id: 1,
            a: 2,
            b: 7,
            sum: 9
        })


    })

    it("Invalid input testing", async () => {

        const res = await request(app).post("/add").send([1, 9])

        const finalAnswer = res.body.message;

        expect(res.status).toBe(411);
        expect(finalAnswer).toBe("Invalid input format");


    })

})