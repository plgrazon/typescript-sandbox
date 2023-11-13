import { faker } from "@faker-js/faker";
import { MappableEntity } from "./Map";

export class User implements MappableEntity {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.person.fullName();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }

  markerContent() {
    return `
    <div>
      <h1>User Name: ${this.name}</h1>
      <h5>Location is: lat ${this.location.lat} and lng ${this.location.lng}<h5>
    </div>
    `;
  }
}
