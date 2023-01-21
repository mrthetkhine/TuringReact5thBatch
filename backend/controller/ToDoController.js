var todoService = require('./../service/TodoService');
function getToDoById(req, res, next) {
    console.log('ToDo id ', req.params['id']);
    console.log('Request time get todobyId ',req.requestTime);
    let todoId = req.params['id'];

    let todo = todoService.getToDoById(todoId);

    res.json(todo);
};
function getAllToDos(req, res, next) {
    console.log('ToDo Routers');
    res.json([{
        id: 1,
        title: 'Task1'
    }, {
        id: 2,
        title: 'Task2'
    }]);
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
function createTodo(req, res, next) {
    console.log('ToDo Routers post ',req.body);
    res.json({
        ... req.body,
        done : true,
    });
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
    todoWildCard,
    multipleRoute1,
    multipleRoute2,
    createTodo,
    downloadFile,
    responseEnd,
    todoRedirect,
}
