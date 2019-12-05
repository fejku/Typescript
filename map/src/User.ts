import faker from "faker";
import { Location } from "./CustomMap";

export class User {
  public name: string;
  public location: Location;

  constructor() {
    this.name = faker.name.lastName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}
