import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UploadSpacePage } from './upload-space.page';

describe('UploadSpacePage', () => {
  let component: UploadSpacePage;
  let fixture: ComponentFixture<UploadSpacePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadSpacePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UploadSpacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
