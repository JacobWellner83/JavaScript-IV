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

class ProjectManager extends Instructor{
    constructor(variables){
        super(variables);
        this.gradClassName = variables.graClassName;
        this.favInstructor = variables.favInstructor;
    }
    standUp(){
        `${name} announces to ${channel}, @channel StandUp times!`
    }
    debugsCode(){
        `${name} debugs ${student.name}'s code on ${subject}`
    }
}

//Checks

const Fredo = new Instructor({
    name: 'Fredo',
    location: 'Malta',
    age: 42,
    gender: 'Male',
    favLanguage: 'C++',
    specialty: 'Web Design',
    catchPhrase: 'Sic Semper Tyranus!'
})

const Alex = new Student({
    name: 'Alex',
    age: 19,
    location: 'Boston',
    gender: 'Female',
    previousBackground: 'Waitress',
    className: 'WebPT4',
    favSubjects: [
        'CS',
        'Environmental Science',
    ],
})

const Charlie = new ProjectManager({
    name: 'Charlie',
    age: 38,
    location: 'Miami',
    gender: female,
    gradClassName: 'CS8',
    favInstructor: 'Cam',
    favLanguage: 'JavaScript',
    specialty: 'Back-End',
    catchPhrase: 'Silence is golden.'
})

