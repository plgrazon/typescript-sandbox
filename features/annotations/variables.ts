let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();
let str: String = 'hello world';

// Array
let colors: string[] = ['red', 'green', 'blue'];
let colorsAgain: Array<string> = ['red', 'green', 'blue'];
let numbers: number[] = [1, 2, 3];

// Classes
class Car {
  honk() {
    console.log('Beep');
  }
}
const car: Car = new Car();

// Object literal
interface Point {
  x: number;
  y: number;
}
let point: Point /* {x: number; y: number} */ = {
  x: 10,
  y: 10,
}

// Function
type Logger = (n: number) => void;
const logNumber: Logger = (i) => {
  console.log(i);
}
logNumber(1);

// When to use annotations
// 1.) Functions that return 'any' type
interface Coordinates {
  x: number;
  y: number;
}
const json = '{"x": 10, "y": 20}';
const coordinates: Coordinates = JSON.parse(json); // JSON.parse returns any
console.log(coordinates); // {x: 10, y: 20};

// 2.) When we declare a variable on one line and initialize later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') foundWord = true;
}