import { Company } from "./Company";
import { CustomView } from "./CustomView";

export class CompanyView extends CustomView {
  private company: Company;

  constructor(company: Company) {
    super(company.location);
    this.company = company;
  }

  public markerContent(): string {
    return `Company Name: ${this.company.companyName}`;
  }
}
