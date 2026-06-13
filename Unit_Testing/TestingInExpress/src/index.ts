import express from 'express'
import {z} from 'zod'
export const app = express();

app.use(express.json());


const InputSchema = z.object({
a : z.number(),
b: z.number()
})


app.post('/add', (req, res)=>{
 const parsedResponse =InputSchema.safeParse(req.body);

if(!parsedResponse.success){
    res.status(411).json({
        message: "Invalid input format"
    })
}

const a = parsedResponse.data?.a as number;
const b= parsedResponse.data?.b as number;

res.json({
a,
b, 
sum: a + b
})


});





