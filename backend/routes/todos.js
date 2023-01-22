var express = require('express');
const todos = require("../controller/ToDoController");
var router = express.Router();


/* GET todos listing. */
router.get('/', todos.getAllToDos);
router.get('/completed', todos.getAllCompletedToDos);
router.get('/:id', todos.getToDoById);
router.put('/:id', todos.updateTodo);
router.delete('/:id', todos.deleteTodo);
router.get('/ab+cd',todos.todoWildCard );

router.get('/download/file', todos.downloadFile);
router.get('/response/end', todos.responseEnd);
router.get('/response/redirect', todos.todoRedirect);

router.get('/multiple/another',todos.multipleRoute1);
router.get('/multiple/another',todos.multipleRoute2);

router.post('/', todos.createTodo);

module.exports = router;
