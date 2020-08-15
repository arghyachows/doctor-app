import { Component, OnInit } from '@angular/core';
import { Map, NavigationControl, Marker } from 'mapbox-gl';
@Component({
  selector: 'app-mapbox-ambulance',
  templateUrl: './mapbox-ambulance.component.html',
  styleUrls: ['./mapbox-ambulance.component.scss']
})
export class MapboxAmbulanceComponent implements OnInit {

  map: Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat;
  lng;
  constructor() { }
  ngOnInit() {
    this.setCurrentLocation();
    // mapboxgl.accessToken = "pk.eyJ1IjoiYXJnaHlhY2hvd3MiLCJhIjoiY2tkdnI4aTI4MWV2MzJ4bnhrZnA0NWhoMSJ9.F7hiGRr217kkJ6gqSF8DbQ";

    // Add map controls
    // this.map.addControl(new NavigationControl());
  }

  setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.map = new Map({
          accessToken: "pk.eyJ1IjoiYXJnaHlhY2hvd3MiLCJhIjoiY2tkdnI4aTI4MWV2MzJ4bnhrZnA0NWhoMSJ9.F7hiGRr217kkJ6gqSF8DbQ",
          container: 'map',
          style: this.style,
          zoom: 13,
          center: [this.lng, this.lat]
        });
        this.map.addControl(new NavigationControl());
        var marker = new Marker()
          .setLngLat([this.lng, this.lat])
          .addTo(this.map);
      });
    }
  }

}
