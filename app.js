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
        return arr.sort((user1, user2) => (user1.score > user2.score) ? 1 : ((user2.score > user1.score) ? -1 : 0));
    }

    console.log(sortUsers(users));

     // Exercise 6 Section
     console.log("EXERCISE 6:\n==========\n");
function reduceUsers (arr){
    let initValue = 0;
    let scoreAvg = arr.reduce((totalScore,currentScore) => totalScore + currentScore.score, initValue)/arr.length;
    return scoreAvg;
}
console.log(reduceUsers(users));