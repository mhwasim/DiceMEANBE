const express = require('express');
const cors = require('cors');
const connectDb = require('./config/db');
const morgan = require('morgan'); // npm install --save morgan
// npm install
connectDb();
const app = express();
const jeansRouter = require('./routers/jeansRouter');
const errorHandler = require('./middlewares/error');
const port = 30000;

// Body parser
app.use(express.json());
app.use(cors());
app.use(morgan()); // added for logging requests to console 

// configure routers
app.use('/jeans', jeansRouter);
app.get('/', (req, res, next) => { res.send('default route'); })

app.use(errorHandler);

app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})