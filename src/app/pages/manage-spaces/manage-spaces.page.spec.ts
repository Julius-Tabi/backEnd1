import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManageSpacesPage } from './manage-spaces.page';

describe('ManageSpacesPage', () => {
  let component: ManageSpacesPage;
  let fixture: ComponentFixture<ManageSpacesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageSpacesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManageSpacesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
