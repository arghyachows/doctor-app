import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { LayoutComponent } from './layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AmbulanceComponent } from './content/ambulance/ambulance.component';
import { LocationService } from './services/location.service';
import { AgmCoreModule } from '@agm/core';
import { MainMenuComponent } from './content/main-menu/main-menu.component';
import { MapboxAmbulanceComponent } from './content/mapbox-ambulance/mapbox-ambulance.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    LayoutComponent,
    AmbulanceComponent,
    MainMenuComponent,
    MapboxAmbulanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatCardModule,
    MatGridListModule,
    MatSnackBarModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyCULRBvKpMyHRTaoXcuNP2KW8VVQP2yq1M',
      libraries: ["places"]
    })
  ],
  providers: [LocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
