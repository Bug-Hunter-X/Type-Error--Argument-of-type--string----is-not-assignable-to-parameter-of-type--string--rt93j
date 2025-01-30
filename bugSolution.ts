function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(people: string[]): string {
  return "Hello, " + people.join(', ');
}

let user = ["Jane Doe", "John Smith"];

console.log(greeter(user[0])); // Correct: Passing the first element of the array
console.log(greeterArray(user)); // Correct: Passing the entire array to a function that handles arrays