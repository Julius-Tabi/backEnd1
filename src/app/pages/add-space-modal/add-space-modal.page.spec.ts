import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddSpaceModalPage } from './add-space-modal.page';

describe('AddSpaceModalPage', () => {
  let component: AddSpaceModalPage;
  let fixture: ComponentFixture<AddSpaceModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSpaceModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddSpaceModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
