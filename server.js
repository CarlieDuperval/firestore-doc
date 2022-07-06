import express from 'express';
import { getAllcars } from './cars-v8.js';

const app = express()

app.get('/cars', async (req, res)=> {
    const result = await getAllcars()
    res.send(result)
})

const port = 5001
app.listen(port,() => {
    console.log(`Wed are listening ${port}`)
})

