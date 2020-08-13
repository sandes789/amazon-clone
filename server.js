const port = 5000
const express = require('express');
const Data = require('./Data')
const cors = require('cors')
const config = require('./config')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const userRoute = require('./routes/userRoute')

dotenv.config();
const mongodbUrl = config.MONGODB_URL;

mongoose.connect(mongodbUrl, {
    userNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(error => console.log(error.reason));

const app = express();

app.use(cors());

app.use('/api/users', userRoute);
app.get('/productlist', (req, res) => {
    res.send(Data.ProductList)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})