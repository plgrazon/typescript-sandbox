class Vehicle {
  color: string;
  // or
  // color: string = 'red';

  constructor(color: string) {
    this.color = color;
  }

  // another syntax that is shorter
  // no need to initialize the property
  // constructor([modifier] color: string) {}

  public drive(): void {
    console.log('vroom vroom');
  }

  public honk(): void {
    console.log('beep');
  }

  protected reverse(): void {
    console.log('moving back');
  }

  private shift(): void {
    console.log('shifting gear');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  // override 
  // changing the access modifier wont work here because the parent modifier
  // is different
  // private drive(): void { 
  //   console.log('zoom zoom')
  // }

  // correct way:
  public drive(): void {
    // this.shift(); <- This wont work, pirate is only available in the vehicle
    console.log('zoom zoom')
  }

  startDriving(): void {
    this.drive();
  }

  startReversing(): void {
    this.reverse();
  }
}

const vehicle = new Car(4, 'orange');
// vehicle.drive(); // this wont work anymore because drive is now private
vehicle.honk();
// correct way:
vehicle.startDriving();
vehicle.startReversing();
console.log(vehicle.color);