const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates: Date[] = [new Date(), new Date()];

const carsByMake: string[][] = [
  ['f150'],
  ['corolla'],
  ['bolt']
];

// Help with inference when extracting values
const myCar = carMakers[0];
const myCarMaker = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

// Help with 'map', 'reduce', and 'forEach'
carMakers.map((car: string): string => {
  return car;
});

// Flexible types
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
// or
// const importantDates: Array<Date | string> = [new Date(), '2030-10-10'];

importantDates.push(new Date());
importantDates.push('2035-10-10');