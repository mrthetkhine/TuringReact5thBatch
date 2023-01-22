var todoService = require('./../service/TodoService');
async function getToDoById(req, res, next) {
    console.log('ToDo id ', req.params['id']);
    console.log('Request time get todobyId ',req.requestTime);
    let todoId = req.params['id'];

    try
    {
        let todo = await todoService.getToDoById(todoId);
        if(!todo)
        {
            res.status(400).json({
                error:'ToDo not found'
            });
        }
        else
        {
            res.json(todo);
        }
    }
    catch(e)
    {
        res.status(400).json({
            error:'ToDo not found'
        });
    }


};
async function getAllToDos(req, res, next) {
    console.log('ToDo Routers');
    let todos = await todoService.getAllToDos();
    console.log('All todo from db ',todos);
    res.json(todos);
};
async function getAllCompletedToDos(req, res, next) {
    console.log('ToDo Routers');
    let todos = await todoService.getAllCompletedToDos();
    console.log('All todo from db ',todos);
    res.json(todos);
};
function todoWildCard(req, res, next) {
    console.log('ToDo ab+cd Routers');
    res.json({
        url : req.url
    });
}
function multipleRoute1(req, res, next) {
    console.log('Multiple first route');
    next();
}
function multipleRoute2(req, res, next) {
    console.log('Multiple second route');
    res.json({
        data : 'Data from another'
    });
}
async function createTodo(req, res, next) {
    console.log('ToDo Routers post ',req.body);
    try {
        const todo = await todoService.saveTodo(req.body);
        if(!todo) throw Error('Cannot save todo');
        await res.status(201).json(todo);

    }catch(err)
    {
        console.log(err);
        await res.status(400).json({message: err})
    }

}
async function updateTodo(req, res, next) {

    try {
        let todoId = req.params['id'];
        console.log('Id ',todoId, ' todo ',req.body)
        const todo = await todoService.updateTodo(todoId,req.body);
        if(!todo) throw Error('Cannot update todo');
        await res.status(200).json(todo);

    }catch(err)
    {
        console.log(err);
        await res.status(400).json({message: err})
    }

}
async function deleteTodo(req, res, next) {

    try {
        let todoId = req.params['id'];
        console.log('Id ',todoId, ' todo ',req.body)
        const todo = await todoService.deleteTodo(todoId);
        if(!todo) throw Error('Cannot delete todo');
        await res.status(200).json(todo);

    }catch(err)
    {
        console.log(err);
        await res.status(400).json({message: err})
    }

}
function downloadFile(req, res, next) {
    console.log('ToDo download ',req.body);
    res.download('./public/images/download.txt');
}
function responseEnd(req, res, next) {
    res.status(401).end();
}
function todoRedirect(req, res, next) {
    console.log('Redirect');
    res.redirect('/todos/');
}
module.exports = {
    getToDoById,
    getAllToDos,
    getAllCompletedToDos,
    todoWildCard,
    multipleRoute1,
    multipleRoute2,
    createTodo,
    updateTodo,
    deleteTodo,
    downloadFile,
    responseEnd,
    todoRedirect,
}
