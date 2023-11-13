export interface MappableEntity {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class Map {
  private map: google.maps.Map;

  constructor() {
    const htmlDiv: HTMLElement = document.getElementById("map");
    const mapOptions = { zoom: 1, center: { lat: 0, lng: 0 } };

    this.map = new google.maps.Map(htmlDiv, mapOptions);
  }

  public addMarker(entity: MappableEntity): void {
    const info = new google.maps.InfoWindow({
      content: entity.markerContent(),
    });

    const marker = new google.maps.Marker({
      map: this.map,
      position: {
        lat: entity.location.lat,
        lng: entity.location.lng,
      },
    });

    marker.addListener("click", () => {
      info.open({
        anchor: marker,
        map: this.map,
      });
    });
  }
}
