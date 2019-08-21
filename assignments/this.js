//  The four principles of "this";
//  in your own words. explain the four principle for the "this" keyword below.
//   1.if the value of 'this' is in the Window or Global  
//         -if in the global scope the value of "this"
//         is the window or console Object,
//  2.Implicit binding is when the function is being called by a dot. The object left of the dot is 'This'
//  3.  New binding -  Creates a new instance of the Constructor function using new "Name"
//  4.Explicit binding- If the function is being called  explicitly by   Call(), apply(), or bind().

//  write out a code example of each explanation above

// Principle 1

// code example for Window Binding
function petSound(){
    console.log(this.sound);
}
    petSound();
    let sound = 'roor';

// Principle 2

// code example for Implicit Binding

const newList = {
    name:'John',
    age:31,
    hobby: 'Biking',
    yearsHobby:15,
    interests: function() {
        console.log(`${this.name} who is ${this.age} years old, has been ${this.hobby} for ${this.yearsHobby} `)
    }
}
newList.interests();


// Principle 3


function personPastTime(obects) {
    this.name=obects.name;
    this.age = obects.age;
    this.hobby=obects.hobby;
    this.yearsHobby=obects.yearsHobby;
    this.interests=function(){
        // console.log(this)
      return(`${this.name} who is ${this.age} years old, has been ${this.hobby} for ${this.yearsHobby} years`)
    }
  }
  
  const john = new personPastTime({name:'john', age:32, hobby:'Lacrosse',yearsHobby:10});
  const meghan = new personPastTime ({name:'meghan', age:33, hobby:'Biking',yearsHobby:12});
  
  console.log(john.interests.call(john))
  console.log(meghan.interests.call(meghan))


// Principle 4

// code example for Explicit Binding