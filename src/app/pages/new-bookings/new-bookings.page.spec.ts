import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewBookingsPage } from './new-bookings.page';

describe('NewBookingsPage', () => {
  let component: NewBookingsPage;
  let fixture: ComponentFixture<NewBookingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBookingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewBookingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
