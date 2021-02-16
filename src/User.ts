import faker from 'faker';
import { Mappable } from './CustomMap';

// Avoid Export Default
// https://basarat.gitbook.io/typescript/main-1/defaultisbad

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
