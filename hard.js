const Person = function () {
    let pii = {
        name : " PJ Her ",
        ssn:""
    };

    const getName = () => pii.name

    return function () {
        return{
            getName
        }
    }
}();

const person = new Person ();
console.log(Person().getName());