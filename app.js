console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");


function plus (number){
    return (plusNumber) => {
        return number + plusNumber;
    }
}


let plus15 = plus(15);
console.log(plus15(10));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let users = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    },
  ];

  function namePrinter (arr){
    arr.forEach(x => {
       console.log(x.name); 
    });
  }
  namePrinter(users);

  // Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");



function namePlusScores (arr){
 return arr.map(object => ({name: object.name, score: object.score}));
}
console.log(namePlusScores(users));


  // Exercise 4 Section
  console.log("EXERCISE 4:\n==========\n");

  function filteredUsers(arr){
    return arr.filter(user => user.isActive);
  }
  console.log(filteredUsers(users));

    // Exercise 5 Section
    console.log("EXERCISE 5:\n==========\n");

    function sortUsers (arr) {
        return arr.sort((a, b) => (a.score > b.score) ? 1 : ((b.score > a.score) ? -1 : 0));
    }

    console.log(sortUsers(users));

     // Exercise 6 Section
     console.log("EXERCISE 6:\n==========\n");
function reduceUsers (arr){
    let initValue = 0;
    let scoreSum = arr.reduce((a,b) => a + b.score, initValue);
    return scoreSum/(arr.length);
}
console.log(reduceUsers(users));