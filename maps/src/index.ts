// to start working use parcel
// npx parcel [entry file]

import { Company } from "./Company";
import { User } from "./User";
import { Map } from "./Map";

const companyOne = new Company();
const userOne = new User();

const customMap = new Map();
customMap.addMarker(companyOne);
customMap.addMarker(userOne);
