let Todos = require('../model/ToDo');
async function getToDoById(id)
{
    let todo = await Todos.findById(id);
    console.log('get Todo by id ',todo);
    return todo;
}
async function getAllToDos()
{
    return Todos.find();
}
async function getAllCompletedToDos()
{
    return Todos.find({
        completed:true
    });
}
async function saveTodo(todo)
{
    let newToDo = new Todos(todo);
    return newToDo.save();
}
async function updateTodo(todoId,todo)
{
    let updateTodo = await Todos.findByIdAndUpdate(todoId,todo,{new:true});
    return updateTodo;
}
async function deleteTodo(todoId)
{
    let deletedTodo = await Todos.findByIdAndDelete(todoId);
    return deletedTodo;
}
module.exports = {
    getToDoById,
    getAllCompletedToDos,
    getAllToDos,
    saveTodo,
    updateTodo,
    deleteTodo,

}
