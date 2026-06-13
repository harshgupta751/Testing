import express from 'express'
import {z} from 'zod'
import {prisma} from './db'

export const app = express();

app.use(express.json());


const InputSchema = z.object({
a : z.number(),
b: z.number()
})


app.post('/add', async (req, res)=>{
 const parsedResponse =InputSchema.safeParse(req.body);

if(!parsedResponse.success){
    res.status(411).json({
        message: "Invalid input format"
    })

    return;
}

const a = parsedResponse.data?.a as number;
const b= parsedResponse.data?.b as number;

const sum =  await prisma.sum.create({
    a : b,
    b : a, 
    sum: a + b
})

res.json(sum);


});





