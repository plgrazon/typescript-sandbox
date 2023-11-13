import { Company } from "./Company";
import { User } from "./User";

interface MappableEntity {
  location: {
    lat: number;
    lng: number;
  };
}

export class Map {
  private map: google.maps.Map;

  constructor() {
    const htmlDiv: HTMLElement = document.getElementById("map");
    const mapOptions = { zoom: 1, center: { lat: 0, lng: 0 } };

    this.map = new google.maps.Map(htmlDiv, mapOptions);
  }

  public addMarker(entity: MappableEntity) {
    new google.maps.Marker({
      map: this.map,
      position: {
        lat: entity.location.lat,
        lng: entity.location.lng,
      },
    });
  }
}
