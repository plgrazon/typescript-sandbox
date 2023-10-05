class Vehicle {
  drive(): void {
    console.log('vroom vroom');
  }

  honk(): void {
    console.log('beep')
  }
}

class Car extends Vehicle {
  // override 
  drive(): void {
    console.log('zoom zoom')
  }
}

const vehicle = new Car();
vehicle.drive();
vehicle.honk();