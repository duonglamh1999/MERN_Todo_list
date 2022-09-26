const { Router } = require('express');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const cors = require('cors')
const Todo = require('./models/Todo')

router.use(express.json())
router.use(express.urlencoded({ extended: true }))
router.use(cors());
//connect database
mongoose.connect("mongodb://127.0.0.1:27017/mern-todo",{
    useNewUrlParser: true,
    useUnifiedTopology:true
})
.then(()=> console.log("connected to db"))
.catch(console.error)

//route handle todos
router.route('/')
    .get(async(req,res)=>{
        const todos = await Todo.find();
        res.json({message:'here is your todo',todos})
    })
    .post((req,res)=>{
        const todo = new Todo({
            text: req.body.text
        });
        todo.save();

        res.json(todo)
    })
//route handle todos/:id
router.route('/:id')
    .delete( async (req, res) =>{
        const result = await Todo.findByIdAndDelete(req.params.id);
        res.json(result)
    })
    .patch(async (req, res) =>{
        const todo = await Todo.findById(req.params.id);
        todo.complete = !todo.complete
        todo.save();
        res.json(todo)
    })
module.exports = router;