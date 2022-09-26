const express = require('express');
const app = express();
const todosRouter = require('./todos')
const cors = require('cors')

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use("/todos",todosRouter);

app.use((req,res,next)=>{
    return new Error("Not Found", 404)
})

app.use((err,req,res,next) => {
    res.status(err.status || 500);
    return res.json({
        error:err.message,
    })
})
  

app.listen(3001, ()=> console.log('server started on port 3001'))