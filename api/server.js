const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const Todo = require('./models/Todo')

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/mern-todo",{
    useNewUrlParser: true,
    useUnifiedTopology:true
})
.then(()=> console.log("connected to db"))
.catch(console.error)

app.get('/todos', async( req, res)=>{
    
})

app.listen(3000, ()=> console.log('server started on port 3000'))