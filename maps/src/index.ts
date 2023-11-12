// to start working use parcel
// npx parcel [entry file]

import { Company } from "./Company";
import { User } from "./User";

const htmlDiv: HTMLElement = document.getElementById("map");
const mapOptions = { zoom: 1, center: {lat: 0, lng: 0} };

new google.maps.Map(htmlDiv, mapOptions);