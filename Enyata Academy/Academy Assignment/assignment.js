// class Car {
//     constructor(name, year) {
//       this.name = name;
//       this.year = year;
  
//     }
//     age() {
//       const date = new Date();
//       return date.getFullYear() - this.year;
//     }
//   }


//  constructor name: string, age:number, score:number, courses:[string]


//   Methods
//   name() = return name of the student
//   age() = return the age
//   increaseAge() = increase the students age by 1
//   addCourse() = adds a course to courses



// class student{
//     constructor(stdtName,stdtAge, stdtScore, stdtCourse){
//       this.name = function(stdtName){
//         return this.stdtName
//       };
//       this.age = function(stdtAge){
//         return this.age
//       };
//       this.score = function(stdtScore){
//          {let index = 4; index <=10;index ++ }
//          if (this.score += 1)
//         return this.score
//         else(this.course = music)
//       };
//       this.course = function(stdtCourse){
//         return this.course
//       };
     
//     }

//     const class.student = new student('Ghazi',26, 11, dancing)


class student{
    constructor(stdtName,stdtAge, stdtScore, stdtCourses){
     this.name = stdtName;
     this.age = stdtAge;
     this.score = stdtScore; 
     this.courses = stdtCourses
    }
    name(){
      return this.name
    }
    age(){
     return this.age
    }
    ageIncrease (){
     this.age+=1
 }
 
 addCourse(moreCourses){
     this.courses.push(moreCourses)
 }
 }
 const student1 = new student('Ghazi',26, 11, ['dancing'])
 console.log(student1.name);
 console.log(student1.age);
 student1.ageIncrease();
 console.log(student1.age);
 console.log(student1.score);
 console.log(student1.courses);
 student1.addCourse("music");
 console.log(student1.courses);
 