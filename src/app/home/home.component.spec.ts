import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { Logger } from '../shared/log.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('Component HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [Logger]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('Should create the object.', () => {
    expect(component).toBeTruthy();
  });

  it(' Should validate the dom hierarchy', () => {
    const htmlElement: HTMLElement = fixture.nativeElement;
    expect(htmlElement).toBeDefined();
    expect(htmlElement.childElementCount).toBe(1);

    const introSection = debugElement.queryAll(By.css('#intro'));
    expect(introSection).toBeDefined();
  });

  it('Should validate the dom section content', () => {
    const htmlElement: HTMLElement = fixture.nativeElement;
    expect(fixture.nativeElement.firstChild.tagName).toContain(
      'SECTION'.toLocaleUpperCase()
    );
    expect(fixture.nativeElement.firstChild.id).toContain('intro');
    expect(htmlElement.firstChild.firstChild.childNodes.length).toEqual(2);

    let infoNode = debugElement.queryAll(By.css('[alt=\'Card image\']'));
    expect(infoNode).toBeDefined();

    infoNode = debugElement.queryAll(By.css('card-img-overlay'));
    expect(infoNode).toBeDefined();

    console.log(htmlElement);
  });

  it('Should validate the dom text contents', () => {
    const descriptionContent = 'Some crave for the latest technologies,';
    const infoNode = debugElement.queryAll(By.css('.card-text'));
    expect(infoNode.length).toBe(2);
    expect(infoNode[1].nativeElement.innerText.toLocaleLowerCase()).toContain('@free.time');
    expect(infoNode[0].nativeElement.innerText).toContain(descriptionContent);
  });

});
