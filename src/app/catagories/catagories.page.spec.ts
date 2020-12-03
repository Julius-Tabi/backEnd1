import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CatagoriesPage } from './catagories.page';

describe('CatagoriesPage', () => {
  let component: CatagoriesPage;
  let fixture: ComponentFixture<CatagoriesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatagoriesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CatagoriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
