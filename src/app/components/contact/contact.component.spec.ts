import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { Logger } from '../log.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

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
  let spyOnNameValid: any;
  let spyOnEmailValid: any;

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
      imports: [ReactiveFormsModule],
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

    spyOnNameValid = spyOn(component, 'isNameValid').and.callThrough();
    spyOnEmailValid = spyOn(component, 'isEmailValid').and.callThrough();
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

  it(' Should check the Name class validation for touched, pristine is done.', () => {


    // Check for valid
    component.contactForm.get('name').setValue('');

    const nameN = debugElement.query(By.css('[name=\'name\']'));
    nameN.nativeElement.dispatchEvent(new Event('blur'));
    fixture.detectChanges();

    expect(component.contactForm.get('name').hasError('required')).toBeTruthy();
    expect(spyOnNameValid).toHaveBeenCalled();
    expect(component.contactForm.valid).toBeFalsy();
    expect(nameN.nativeElement.classList).toContain('errorInput');
  });


  it(' Should check the Email class validation for NgClass is done.', () => {
    component.contactForm.get('email').setValue('sau');
    const email = debugElement.query(By.css('[name=\'email\']'));
    email.nativeElement.dispatchEvent(new Event('blur'));

    fixture.detectChanges();

    expect(component.contactForm.get('email').hasError('email')).toBeTruthy();
    expect(spyOnEmailValid).toHaveBeenCalled();
    expect(component.contactForm.valid).toBeFalsy();
    expect(email.nativeElement.classList).toContain('errorInput');
  });

  it(' Should check for the Name maxlength validations violation.', () => {
    component.contactForm.get('name').setValue(`ABCDABCDABCDABCDABCDABCD
                                                ABCDABCDABCDABCDABCDABCD
                                                ABCDABCDABCDABCDABCDABCD
                                                ABCDABCD`);
    expect(component.contactForm.get('name').hasError('maxlength')).toBeTruthy();
    expect(component.contactForm.valid).toBeFalsy();
  });

  it(' Should check comments control validations indicates invalid.', () => {
    component.contactForm.get('comment').setValue('');
    expect(component.contactForm.get('comment').valid).toBeFalsy();
    expect(component.contactForm.valid).toBeFalsy();
  });


  it( ' Check for the form submission.', () => {
    spyOn(component, 'onSubmission').and.callThrough();

    const submitButton = debugElement.query(By.css('[type=\'submit\''));
    const email = debugElement.query(By.css('[name=\'email\']'));
    const nameN = debugElement.query(By.css('[name=\'name\']'));
    const comment = debugElement.query(By.css('#taComments'));
    const formContact = debugElement.query(By.css('form'));

    email.nativeElement.dispatchEvent(new Event('blur'));
    nameN.nativeElement.dispatchEvent(new Event('blur'));
    comment.nativeElement.dispatchEvent(new Event('blur'));


    component.contactForm.get('name').setValue('saurabh777@gmail.com');
    component.contactForm.get('email').setValue('saurabh777@gmail.com');
    component.contactForm.get('comment').setValue('Some dummy comment');


    fixture.detectChanges();

    submitButton.triggerEventHandler('ngSubmit', null);
    formContact.triggerEventHandler('submit', { });


    expect(component.contactForm.valid).toBeTruthy();
    expect(component.onSubmission).toHaveBeenCalled();
  });

  it( ' Check for the form reset.', () => {
    spyOn(component, 'onReset').and.callThrough();
    const submitButton = debugElement.query(By.css('[type=\'button\''));
    submitButton.triggerEventHandler('click', null);
    expect(component.onReset).toHaveBeenCalled();
  });
});
