function greet(person) {
    //person.name = "Something";
    return "Hello " + person.name;
}
var result = greet({
    name: 'Tk'
});
console.log('Result ', result);
