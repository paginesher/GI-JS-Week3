class Person {                                             
    constructor(name, job, age) {
        this.name = name;
        this.job = job;
        this.age = age;
    }
    exercise() {
        console.log("Running is NOT fun!");
    }
    getJob() {
        console.log(`${this.name} is a ${this.job}`);
    }



}

const person = new Person("Pj", "Programer", 25)
person.exercise()
person.getJob();


//*******//

class Programmer extends Person {

    constructor(name, job, age, languages) {
        super(name, job, age);
        this.languages = [languages];
        this.busy = true;

    };


    completeTask() {
        this.busy = false;

    };

    acceptNewTask() {
        this.busy = true;

    };



    offerNewTask() {
        if (this.busy) {
            console.log(`${this.name} Sorry, I can not accept any task right now.`);
        }
        else {
            console.log(`${this.name} I would love to take on new responsibiliteis`);
        };
    };


    learnLanguages(lang) {
        this.languages.push(lang)
    };

    listLanguages() {
        console.log(`${this.name} knows this languages ${this.languages}`);
    };


};

const programmer = new Programmer("Pj", "programer", 25, "javascript");
programmer.listLanguages();
programmer.offerNewTask();


const programmer1 = new Programmer("Daniel", "Coder", 31, "Python");
programmer1.listLanguages();
programmer1.offerNewTask();
programmer1.learnLanguages('java');

const programmer2 = new Programmer("Kyle", "Doctor", 24, "C-sharp")
programmer2.listLanguages();
programmer2.offerNewTask();




