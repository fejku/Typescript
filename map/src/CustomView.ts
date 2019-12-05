import { Location, Mappable } from "./CustomMap";

export abstract class CustomView implements Mappable {
  public location: Location;

  constructor(location: Location) {
    this.location = location;
  }

  public abstract markerContent(): string;
}
