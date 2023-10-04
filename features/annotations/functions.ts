const add = (a: number, b: number): number => {
  return a + b;
};
// type inference works with return values

const subtract = (a: number, b: number): number => {
  return a - b;
}

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = (a: number, b: number): number => {
  return a * b;
}

const logger = (message: string): void => {
  console.log(message);
  // return null / undefined <- works
}

const throwError = (message: string): never => {
  throw new Error(message);
}


const throwErrorAgain = (message: string): string => {
  if (!message) throw new Error(message);

  return message;
}

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
}

// deconstruction
const logWeather = ({ date, weather }: { date: Date, weather: string }): void => {
  console.log(date);
  console.log(weather)
}

logWeather(todaysWeather)