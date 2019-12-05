import { Company } from "./Company";
import { CompanyView } from "./CompanyView";
import { CustomMap } from "./CustomMap";
import { User } from "./User";
import { UserView } from "./UserView";

const user = new User();
const company = new Company();
const map = new CustomMap("mapDiv");

const userView = new UserView(user);
const companyView = new CompanyView(company);

map.addMarker(userView);
map.addMarker(companyView);
