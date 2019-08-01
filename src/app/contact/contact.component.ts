import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Logger } from '../shared/log.service';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
/**
 * Reactive form to allow user to add details to be allowed to contacted.
 * <a href="https://angular.io/guide/reactive-forms">see this link</a>
 * Reactive form is built around observable streams.
 */
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public contactForm: FormGroup;

  constructor(private logger: Logger, private route: ActivatedRoute, private router: Router) {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      comment: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
    this.logger.log(' ngOnInit called for ContactComponent.');
  }

  public onSubmission(): void {
    console.log(' Submit called from contactcomponent.');
    this.logger.log(' Values: ' + this.contactForm.value);
    this.router.navigate(['/tyu'], {
      queryParams: { message: 'Your message has been sent.'}
    });
  }


}
