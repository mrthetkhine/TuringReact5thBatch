const R = require('ramda');
const students = [
    {
        name: 'Abby', 
        score: 84,
        gender:'Male',
        city:'Yangon',
    },

    {
        name: 'Eddy', 
        score: 58,
        gender:'Female',
        city:'Mandalay',
    },
    {
        name: 'Another', 
        score: 81,
        gender:'Male',
        city:'Yangon',
    },
    {
        name: 'Jack', 
        score: 69,
        gender:'Female',
        city:'Tokyo',
    }
];
let studentWithSameCity = R.collectBy(R.prop('city'), students);
console.log('SameCity ',studentWithSameCity);
console.log("R.compose ",R.compose);