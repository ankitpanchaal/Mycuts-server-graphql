const cors = require('cors');
require('dotenv').config();
const express = require("express");
const { graphqlHTTP } = require('express-graphql');
const schema = require('./server/schema/schema')
const connectDB = require('./server/Config/db')


const port = process.env.PORT || 3000;

const app = express();

// Connect to DB
connectDB();
app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development"
}))

app.listen(port, console.log("Server listing at port : ", port))