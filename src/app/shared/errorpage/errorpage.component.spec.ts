import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorpageComponent } from './errorpage.component';
import { Logger } from '../log.service';

describe('Component ErrorpageComponent', () => {
  let component: ErrorpageComponent;
  let fixture: ComponentFixture<ErrorpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorpageComponent ],
      providers: [
        Logger
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the object', () => {
    expect(component).toBeTruthy();
  });
});
