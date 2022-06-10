import express from "express";
import morgan from "morgan";
import cors from 'cors'
import Api from './Api.js'
import mongoose from "mongoose";


const app = express()

// connect to db
mongoose.connect('mongodb://localhost/JWT')

// these two for post request.
app.use(express.json())
app.use(cors())

app.use('/api' , Api)

// declare our port number.
app.listen(3030)


// for display which router is called.
app.use(morgan('dev'))
