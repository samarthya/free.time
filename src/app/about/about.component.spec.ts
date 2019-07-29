import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';
import { PersonComponent } from '../shared/person/person.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let personComponent: PersonComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutComponent, PersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Creation of the object should be performed.', () => {
    expect(component).toBeTruthy();
  });
});