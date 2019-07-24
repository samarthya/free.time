import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonComponent } from './person.component';
import { DebugElement } from '@angular/core';
import { userProfile1 } from 'src/app/data/test/data.values';
import { By } from '@angular/platform-browser';


/**
 * Jasmine
 * 1. Describe : Desscribes a test suite.
 * Helpful Link - https://onehungrymind.com/writing-basic-component-test-angular-testing-utilities/
 */
describe('PersonComponent', () => {
  let component: PersonComponent;
  let fixture: ComponentFixture<PersonComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    /**
     * We use TestBed.configureTestingModule to define the environment
     * that we want our component under test to live in
     */
    TestBed.configureTestingModule({
      declarations: [ PersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonComponent);
    component = fixture.componentInstance;
    /**
     * Added a dummy profile component value.
     */
    component.profile = userProfile1;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  /**
   * Spec defintion.
   */
  it('Component Person should be created.', () => {
    expect(component).toBeTruthy();
  });

  it('The profile 1 should match the dummy profile created.', () => {
    expect(component.profile.title).toBeDefined();
    expect(component.profile.title).toBe(userProfile1.title);
  });

  it(' Presence of Icons span - Test', () => {
    const spanFace = de.queryAll(By.css('a'));
    expect(spanFace.length).toEqual(2);

    spanFace.forEach(element => {
      expect(element.attributes.class).toEqual('card-link');
      element.childNodes.forEach( node => {
        expect(node.nativeNode.childElementCount()).toEqual(1);
        console.log(node + '\n');
      });
    });

    expect(spanFace).toBeTruthy();
  });
});
