import { faker } from "@faker-js/faker";
import { MappableEntity } from "./Map";

export class Company implements MappableEntity {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }

  markerContent() {
    return `
    <div>
      <h1>Company Name: ${this.name}</h1>
      <h3>Catch Phrase: ${this.catchPhrase}</h3>
      <h5>Location is: lat ${this.location.lat} and lng ${this.location.lng}</h5>
    </div>
    `;
  }
}
