import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent, Logger } from '@free-time/components/index';
import { PersonComponent } from '../person/person.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('Component AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;
  let debugElement: DebugElement;

  let spyOnDescriptionSet: any;
  let spyOnDescriptionGet: any;
  let originalContent: string;

  /**
   * Before each IT runs - initialize some properties.
   */
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AboutComponent,
        PersonComponent
      ],
      providers: [
        Logger
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // Component creation.
    fixture = TestBed.createComponent(AboutComponent);

    // Arrange
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    originalContent = component.descriptionStr;

    // Act
    spyOnDescriptionSet = spyOnProperty(component, 'descriptionStr', 'set').and.callThrough();
    spyOnDescriptionGet = spyOnProperty(component, 'descriptionStr', 'get').and.callThrough();
    fixture.detectChanges();
  });

  //////////////////////////////////////////////////////


  it('Check for description value and did the getter function get called. (Using mock value)', () => {
    // Assert
    expect(fixture.nativeElement.querySelectorAll('p')[0].textContent).not.toBeNull();
    expect(spyOnDescriptionGet).toHaveBeenCalled();
  });

  it('Check for description value in the DOM element.', () => {
    component.descriptionStr = 'should change the description';
    fixture.detectChanges();
    expect(component.descriptionStr).toContain('should change the description');
  });

  it('Check for the Description P and setter', () => {
    component.descriptionStr = 'Change value';
    fixture.detectChanges();

    expect(spyOnDescriptionSet).toHaveBeenCalled();
    expect(fixture.nativeElement.querySelectorAll('p')[0].textContent).toContain('Change value');
  });

  it('Check for the child component DOM is present, by checking the child element count.', () => {
    const htmlElement: HTMLElement = fixture.nativeElement;

    expect(htmlElement.childElementCount).toBe(1);
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

  it('Should check for the child component - PersonComponent (By directive)', () => {
    expect(debugElement.queryAll(By.directive(PersonComponent)).length).toBe(3);
  });
});
