import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';
import { PersonComponent } from '../shared/person/person.component';
import { Logger } from '../shared/log.service';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

describe('Component AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutComponent, PersonComponent, FaIconComponent ],
      providers: [Logger]
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
