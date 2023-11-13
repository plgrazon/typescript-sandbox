export class Map {
  private map: google.maps.Map;

  constructor() {
    const htmlDiv: HTMLElement = document.getElementById("map");
    const mapOptions = { zoom: 1, center: { lat: 0, lng: 0 } };

    this.map = new google.maps.Map(htmlDiv, mapOptions);
  }

  public addMarker() {
    console.log("u can access this");
  }
}
