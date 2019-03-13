// Code your solutions in this file

const employees =[];

function printBadges(employees){
  for (let i = 0; i < employees.length; i++) {
    console.log(`Welcome ${employees[i]}! You are employee #${i + 1}.`)
  }
  return employees
}

printBadges(employees);


function maybeTails(){
  return Math.random() >= 0.5;
}


function tailsNeverFails(){
  let tailCount = 0;

  while (maybeTails()) {
    tailCount++
  }
  return(`You got ${tailCount} tails in a row!`)
}
