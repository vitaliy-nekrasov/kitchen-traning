// Change code below this line
function findMatches(...rest) {
  const matches = []; // Don't change this line
  let mass = [...rest];
  console.log(...mass[0]);
  for (const number of rest) {
    console.log(number);

    // const copyOfNumber = [...number];
    // console.log(copyOfNumber);

    // for (const numb of copyOfNumber) {
    //   console.log(numb);
    // }
  }

  // let numbers = [...number];
  // console.log(numbers);

  // Change code above this line
  return matches;
}
findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);
