import { CustomView } from "./CustomView";
import { User } from "./User";

export class UserView extends CustomView {
  private user: User;

  constructor(user: User) {
    super(user.location);
    this.user = user;
  }

  public markerContent(): string {
    return `User Name: ${this.user.name}`;
  }
}
