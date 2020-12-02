import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddProfileModalPage } from './add-profile-modal.page';

describe('AddProfileModalPage', () => {
  let component: AddProfileModalPage;
  let fixture: ComponentFixture<AddProfileModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProfileModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddProfileModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
