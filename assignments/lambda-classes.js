// CODE here for your Lambda Classes
//Person Class:
class Person{
    constructor(variables){
        this.name = variables.name;
        this.age = variables.age;
        this.location = variable.location;
        this.gender = variables.gender;
    }
    speak(){
        return `Hello, my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person{
    constructor(variables){
        super(variables);
        this.specialty = variables.specialty;
        this.favLanguage = variables.favLanguage;
        this.catchPhrase = variables.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`)
    }
    grade(student){
        console.log(`${student.name} recieves a perfect score on {subject}`)
    }
}

class Student extends Person{
    constructor(variables){
        super(variables);
        this.previousBackground = variables.previousBackground;
        this.className = variables.className;
        this.favSubjects = variables.favSubjects;
    }
    listsSubjects(){
        this.favSubjects.forEach(subject => console.log(`${subject}`));
    }
    PRAssignment(){
        `${student.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(){
        `${student.name} has begun sprint challenge on ${subject}`
    }
}

