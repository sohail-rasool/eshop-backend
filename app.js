import express from 'express'
import 'dotenv/config'
import bodyParser from 'body-parser'
import morgan from 'morgan'


const app = express()
const port = 3000
const appURL=process.env.API_URL
// Middle ware
app.use(bodyParser.json())
app.use(morgan('tiny'));

app.get(`${appURL}/products`, (req, res) => {
  const product={
    id:1,
    name:'p name',
    image:'p image'
  }
  res.send(product)
})

app.post(`${appURL}/products`,(req,res)=>{
    const product = req.body
    console.log('product',product)
    res.send(product)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})