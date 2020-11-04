const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const imageRouter = require('./routes/image');

const app = express();
const port = process.env.PORT || 3000;


// app.use(bodyParser.urlencoded());
app.use(cors({credentials: true, origin: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(imageRouter);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
})
