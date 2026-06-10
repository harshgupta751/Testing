import express from 'express'

export const app = express();

app.use(express.json());


app.post('/add', (req, res)=>{
const a  = req.body.a;
const b= req.body.b;

res.json({
a,
b, 
sum: a + b
})


});





