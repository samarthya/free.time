import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankyouComponent } from './thankyou.component';
import { Logger } from '../log.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';


describe('Component ThankyouComponent', () => {
  let component: ThankyouComponent;
  let fixture: ComponentFixture<ThankyouComponent>;
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

    mockRouteService = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [ThankyouComponent],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        Logger,
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Router, useValue: mockRouteService }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the object.', () => {
    expect(component).toBeTruthy();
  });

  it('should check for a thank you P element.', () => {
    const htmlElement: HTMLElement = fixture.nativeElement;
    expect(fixture.nativeElement.querySelectorAll('p').length).toBe(2);
    expect(fixture.nativeElement.querySelectorAll('p')[1].textContent).toContain('Thank you');
  });
});
