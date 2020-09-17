import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cdmx2Page } from './cdmx2.page';

describe('Cdmx2Page', () => {
  let component: Cdmx2Page;
  let fixture: ComponentFixture<Cdmx2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cdmx2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cdmx2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
