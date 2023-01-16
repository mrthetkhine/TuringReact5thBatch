var express = require('express');
var router = express.Router();

/* GET todos listing. */
router.get('/', function(req, res, next) {
    console.log('ToDo Routers');
    res.json([{
        id:1,
        title: 'Task1'
    },{
        id:2,
        title: 'Task2'
    }]);
});

function getToDoById(req, res, next) {
    console.log('ToDo id ', req.params['id']);
    let todoId = req.params['id'];
    res.json({
        url: req.url,
        id: todoId
    });
};

router.get('/:id', getToDoById);
router.get('/ab+cd', function(req, res, next) {
    console.log('ToDo ab+cd Routers');
    res.json({
        url : req.url
    });
});

router.post('/', function(req, res, next) {
    console.log('ToDo Routers post ',req.body);
    res.json({
        ... req.body,
        done : true,
    });
});

module.exports = router;
