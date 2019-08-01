import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';
import { PersonComponent } from '../shared/person/person.component';
import { Logger } from '../shared/log.service';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('Component AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [Logger]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    fixture.detectChanges();
  });

  it('Creation of the object should be performed.', () => {
    expect(component).toBeTruthy();
  });

  it('Check for the child component DOM is present, by checking the child element count.', () => {
    const htmlElement: HTMLElement = fixture.nativeElement;
    expect(htmlElement.childElementCount).toBe(1);
    console.log(debugElement);
    expect(debugElement.queryAll(By.css('h1'))).toBeDefined();
    expect(debugElement.queryAll(By.css('hr'))).toBeDefined();
  });

  it('Check for the child component DOM is valid, by checking the HTML.', () => {
    const htmlElement: HTMLElement = fixture.nativeElement;
    expect(debugElement.queryAll(By.css('h1'))).toBeDefined();
    expect(debugElement.queryAll(By.css('hr'))).toBeDefined();
    expect(debugElement.queryAll(By.css('p'))).toBeDefined();
    expect(debugElement.queryAll(By.css('.card-deck'))).toBeDefined();
  });
});
