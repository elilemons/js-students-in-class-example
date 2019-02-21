let JessaStudent = {
    name: "Jessa",
    age: 124,
};

class Student {
    constructor(name, age, typeOfBackpack, classes) {
        this.name = name;
        this.age = age;
        this.typeOfBackpack = typeOfBackpack;
        this.classes = classes;
    }

    doHomework() {
        console.log("Doing homework!");
    }

    attendClass() {
        console.log("Attending class!");
    }

    whatIsStudentDoing() {
        this.doHomework();
    }
}

let jessa = new Student("Jessa", 124, "inCase", "Front End");

let humberto = new Student("Humberto");



console.log(jessa);
jessa.doHomework();
jessa.whatIsStudentDoing();
console.log(humberto);