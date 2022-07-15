const express = require('express');
const app = express()
const port = 8000;
const userRouter = require('./country/routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/v1/country', userRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});