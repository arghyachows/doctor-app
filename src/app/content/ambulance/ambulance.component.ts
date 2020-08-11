import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-ambulance',
  templateUrl: './ambulance.component.html',
  styleUrls: ['./ambulance.component.scss']
})
export class AmbulanceComponent implements OnInit {

  latitude: number;
  longitude: number;
  zoom: number;
  @ViewChild('search') searchElementRef: ElementRef;
  address: string;
  web_site: string;
  name: string;
  zip_code: string;

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone, private _snackbar: MatSnackBar) { }
  ngAfterViewInit() {
    this.findAdress();
  }
  ngOnInit() {
    this.setCurrentLocation();
  }

  // Get Current Location Coordinates
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 15;
      });
    }
  }

  findAdress() {
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          // some details
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          if (place.address_components == undefined) {
            this.openSnackBar("Please Enter a Valid Address", "OK")
          } else {
            this.address = place.formatted_address;
            this.web_site = place.website;
            this.name = place.name;
            this.zip_code = place.address_components[place.address_components.length - 1].long_name;
            //set latitude, longitude and zoom
            this.latitude = place.geometry.location.lat();
            this.longitude = place.geometry.location.lng();
            this.zoom = 12;
          }

        });
      });
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackbar.open(message, action, {
      duration: 2000,
    });
  }

}
