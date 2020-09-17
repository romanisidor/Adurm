import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Acapulco2Page } from './acapulco2.page';

describe('Acapulco2Page', () => {
  let component: Acapulco2Page;
  let fixture: ComponentFixture<Acapulco2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Acapulco2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Acapulco2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
