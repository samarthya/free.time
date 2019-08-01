import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankyouComponent } from './thankyou.component';
import { Logger } from '../log.service';
import { ActivatedRoute, Router } from '@angular/router';


describe('ThankyouComponent', () => {
  let component: ThankyouComponent;
  let fixture: ComponentFixture<ThankyouComponent>;
  let mockActivatedRoute, mockRouteService;

  beforeEach(async(() => {
    mockActivatedRoute = {
      snapshot: {
        queryParams: {
          message: 'Thank you for your comment.'
        }
      }
    };

    TestBed.configureTestingModule({
      declarations: [ThankyouComponent],
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
