import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Logger, ErrorpageComponent } from '@free-time/components/index';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('Component ErrorpageComponent', () => {
  let component: ErrorpageComponent;
  let fixture: ComponentFixture<ErrorpageComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorpageComponent],
      providers: [
        Logger
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the object', () => {
    expect(component).toBeTruthy();
  });

  it('should check for the Dom to contain the message', () => {
    debugElement = fixture.debugElement;
    expect(debugElement.queryAll(By.css('p')).length).toBe(2);
    expect(debugElement.queryAll(By.css('p'))[1].nativeElement.textContent).
      toContain('Please consult our help for more information.');
  });
});
