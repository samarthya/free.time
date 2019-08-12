import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, AbstractControl } from '@angular/forms';
import { Logger } from '../log.service';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
/**
 * <p>
 * Reactive form to allow user to add details to be allowed to contacted.
 * <a href="https://angular.io/guide/reactive-forms">see this link</a>
 * Reactive form is built around observable streams.
 * </p>
 * <img src="https://angular.io/generated/images/guide/forms-overview/key-diff-reactive-forms.png"/>
 */
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  /**
   * Group for the ContactForm.
   */
  public contactForm: FormGroup;

  /**
   * Name - Input element that will store the name of the commentator.
   * Email - Email identification for the person sending in the contact, only for records.
   * Comments - Actual comment supplied.
   */
  public name: FormControl = new FormControl('', [Validators.required, Validators.maxLength(50)]);
  public email: FormControl = new FormControl('', [Validators.required, Validators.email]);
  public comment: FormControl = new FormControl('', [Validators.required]);

  constructor(private logger: Logger, private route: ActivatedRoute, private router: Router) {
    this.contactForm = new FormGroup({
      comment: this.comment
    });

    this.contactForm.addControl('name', this.name);
    this.contactForm.addControl('email', this.email);

  }

  ngOnInit() {
    this.logger.log(' ngOnInit called for ContactComponent.');
  }

  /**
   * Function that is called when you submit the form.
   * @param value  string Value of form control elements binded in the form group.
   */
  public onSubmission(): void {
    const values = this.contactForm.value;

    this.logger.log(' Submit called from contactcomponent.');
    this.logger.log(' Values: ' + JSON.stringify(values));
    this.router.navigate(['/tyu'], {
      queryParams: { message: 'Your message has been sent.' }
    });
  }

  /**
   * Resets the contact form.
   */
  public onReset($event: Event): void {
    this.name.reset();
    this.email.reset();
    this.comment.reset();
    this.contactForm.reset();
  }
  /**
   * A declarative way of validating the Name is supplied and is correct to apply CSS using
   * ngClass.
   * For more information <a href="https://angular.io/api/common/NgClass#ngclass">see</a>
   */
  public isNameValid(): boolean {
    const name: AbstractControl = this.contactForm.get('name');
    if (name.touched) {
      return name.invalid;
    } else {
      return false;
    }
  }

  /**
   * Function called as part of expression condition for Email input for class application.
   */
  public isEmailValid(): boolean {
    const email: AbstractControl = this.contactForm.get('email');

    if (email.touched) {
      return email.invalid;
    }

    return false;
  }

}
