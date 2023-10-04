const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
}

// name is used by the window hence the error
const { age, /* name */ }: { age: number; name: string } = profile;
const { coords: { lat, lng } }: { coords: { lat: number; lng: number } } = profile;