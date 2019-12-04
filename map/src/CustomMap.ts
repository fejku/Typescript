import { User } from "./User";

export class CustomMap {
  private map: google.maps.Map;

  constructor(divId: string) {
    this.map = new google.maps.Map(document.getElementById(divId), {
      center: {
        lat: 0,
        lng: 0,
      },
      zoom: 1,
    });
  }

  addUserMarker() {
    // const user = new User();
    new google.maps.Marker({
      map: this.map,
      position: {
        lat: 0,
        lng: 0,
      },
    });
  }
}
