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
    })
      .compileComponents();
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
  });

  /**
   * <div id="root11" _nghost-a-c15="" ng-version="8.1.2">
   * <section _ngcontent-a-c15="" id="intro">
   * <div _ngcontent-a-c15="" class="card bg-light text-black border-dark">
   * <img _ngcontent-a-c15="" alt="Card image" class="card-img card-img-bottom size-check" src="../../assets/images/Free.Time.png">
   * <div _ngcontent-a-c15="" class="card-img-overlay">
   * <h1 _ngcontent-a-c15="" class="card-title">Free.Time</h1>
   * <p _ngcontent-a-c15="" class="card-text">
   * Some crave for the latest technologies, some crave for the knowledge - free of syntax,
   * some crave for a healthy mix of hands-on and wealthy experience. In some way or the other,
   * we all are handled by the inner cravings and to decide what works for an individual,
   * it is usually a crowd copy that is employed. My friend just tried this, my friend just
   * tried that. It might work for some, but for manjority it is a futile exercise.
   * In one such new and spiritied efforts, we are trying to collate our collective energies
   * to learn and build a platform to share, highlight, and advertise the knowledge we have accumulated,
   * and to wisely build upon our professional social presence.
   * </p><hr _ngcontent-a-c15="">
   * <p _ngcontent-a-c15="" class="card-text">@Free.Time</p>
   * </div>
   */
  it(' Should validate the dom content', () => {
    const htmlElement: HTMLElement = fixture.nativeElement;
    expect(fixture.nativeElement.firstChild.tagName).toContain('SECTION'.toLocaleUpperCase());
    expect(fixture.nativeElement.firstChild.id).toContain('intro');
    expect(htmlElement.firstChild.firstChild.childNodes.length).toEqual(2);
    console.log(htmlElement);
  });

});
