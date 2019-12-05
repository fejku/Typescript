import faker from "faker";
import { Location } from "./CustomMap";

export class Company {
  public companyName: string;
  public catchPhrase: string;
  public location: Location;

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}
