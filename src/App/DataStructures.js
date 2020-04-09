/*
WHAT DO THEY DO?
Data structures are collections of values,
the relationships among them,
and the functions or operations that can be
applied to the data
*/

/*
Classes in ES2015
The method to create new objects MUST be called 'constructor'

example
*/
class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    this.scores = [];
  }
  fullName() {
    return 'Your full name is ${this.firstName} ${this.lastName}';
  }
  markLate() {
    this.tardies += 1;
    return '${this.firstName} has been late ${this.tardies} times'
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  calculateAverage() {
   let sum = this.scores.reduce(function(a,b){return a + b})
   return sum/this.scores.length;
  }

  static EnrollStudents() {
    return "Enrolling Students";
  }
}

let firstStudent = new Student("Greg", "Stephen");

/*
'Instance Method' provides functionality for each individual instance
'Class Method' uses the static keyword. Used to create a utility function for an application.
Call the class method by ClassName.Method
*/