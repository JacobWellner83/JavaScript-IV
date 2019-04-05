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