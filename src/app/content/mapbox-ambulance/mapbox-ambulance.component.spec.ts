import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapboxAmbulanceComponent } from './mapbox-ambulance.component';

describe('MapboxAmbulanceComponent', () => {
  let component: MapboxAmbulanceComponent;
  let fixture: ComponentFixture<MapboxAmbulanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapboxAmbulanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapboxAmbulanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
