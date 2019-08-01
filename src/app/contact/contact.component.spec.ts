import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { Logger } from '../shared/log.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DebugElement } from '@angular/core';

/**
 * Contact compoenent displays a FORM for the user to fill in details like
 * - Name
 * - Email
 * - Comments
 * If any of these details are not present the form will not be submitted.
 */
describe('Component ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let debugElement: DebugElement;

  let mockActivatedRoute: any;
  let mockRouteService: any;

  beforeEach(async(() => {
    mockActivatedRoute = {
      snapshot: {
        queryParams: {
          message: 'Thank you for your comment.'
        }
      }
    };

    mockRouteService = jasmine.createSpyObj(['navigate']);

    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [ ContactComponent ],
      providers: [
        Logger,
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Router, useValue: mockRouteService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  /**
   * State based test.
   * Validates that the component gets created.
   */
  it('should create the component.', () => {
    expect(component).toBeTruthy();
  });

  it('should check if the Name, Email and the Comments tab are present.', () => {
    const htmlElement: HTMLElement = fixture.nativeElement;
    expect(htmlElement).toBeDefined();
    expect(htmlElement.childElementCount).toBe(1);
  });

  it('should check if the Name, Email and the Comments validations.', () => {
    // spyOn(component, 'isNameValid');

    expect(component.contactForm.get('name').valid).toBeFalsy();
    expect(component.contactForm.get('email').valid).toBeFalsy();
    expect(component.contactForm.get('comment').valid).toBeFalsy();

    component.contactForm.get('name').setValue('');
    expect(component.contactForm.get('name').hasError('required')).toBeTruthy();
    // expect(component.isNameValid).toHaveBeenCalled();

  });

  it('should check if the Name maxlength validations.', () => {
    component.contactForm.get('name').setValue('ABCDABCDABCDABCDABCDABCDABCDABCDABCDABCDABCDABCDABCDABCDABCDABCDABCDABCDABCDABCD');
    expect(component.contactForm.get('name').hasError('maxlength')).toBeTruthy();
  });

  it('should check comments control validations.', () => {
    component.contactForm.get('comment').setValue('');
    expect(component.contactForm.get('comment').valid).toBeFalsy();
  });

});
