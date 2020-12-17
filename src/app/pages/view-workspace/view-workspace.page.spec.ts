import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewWorkspacePage } from './view-workspace.page';

describe('ViewWorkspacePage', () => {
  let component: ViewWorkspacePage;
  let fixture: ComponentFixture<ViewWorkspacePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewWorkspacePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewWorkspacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
