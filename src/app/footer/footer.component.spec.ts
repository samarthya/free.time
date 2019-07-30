import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { Logger } from '../shared/log.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

describe('Component FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent, FaIconComponent],
      providers: [ Logger ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create the object.', () => {
    expect(component).toBeTruthy();
  });

  it(' Should validate the dom hierarchy', () => {
    const htmlElement: HTMLElement = fixture.nativeElement;
    expect(htmlElement).toBeDefined();
    expect(htmlElement.childElementCount).toBe(2);

    console.log(htmlElement);
    let hrLine: DebugElement[] = debugElement.queryAll(By.css('hr'));
    expect(hrLine).toBeDefined();
    hrLine = debugElement.queryAll(By.css('.container'));
    expect(hrLine[0].name).toBe('div');
  });

  it(' Should validate the dom to have two elements in the container.', () => {
    const hrLine = debugElement.queryAll(By.css('.container'));
    expect(hrLine[0].childNodes.length).toBe(2);
  });

  it(' Should validate the presence of the copyright information', () => {
    const copyright = 'All rights reserved. Copyright @ 2019';
    const hrLine = debugElement.queryAll(By.css('#copyright'));
    expect(hrLine).toBeDefined();
    expect(hrLine.length).toBe(1);
    expect(hrLine[0].nativeElement.innerText).toBe(copyright);
  });

  it(' Should check the presence of the Social icons', () => {
    const brandIcons = debugElement.queryAll(By.css('fa-icon'));
    expect(brandIcons.length).toBe(4);
  });
});
