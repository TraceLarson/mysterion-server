import { AbstractUser } from "./abstract/AbstractUser";

export class Admin extends AbstractUser {
  //#region Constructors

  constructor() {
    super();
  }

  //#endregion

  //#region Overridden Methods

  public override GetFullName(): string {
    return `${this.FirstName}, ${this.LastName}`;
  }

  //#endregion

  //#region Public Methods

  //#endregion
}
