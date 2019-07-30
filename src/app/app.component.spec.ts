import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PersonComponent } from './shared/person/person.component';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Logger } from './shared/log.service';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBlogger, faTwitter, faGit, faLinkedin } from '@fortawesome/free-brands-svg-icons';


describe('Component AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent,
        PersonComponent,
        FooterComponent
      ],
      providers: [Logger],
      imports: [RouterTestingModule, FontAwesomeModule]
    }).compileComponents();

    library.add(faBlogger);
    library.add(faTwitter);
    library.add(faGit);
    library.add(faLinkedin);

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement.componentInstance;

    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have the ft-navbar', () => {
    const htmlElement: HTMLElement = fixture.nativeElement;
    expect(htmlElement.firstElementChild.tagName).toContain('ft-navbar'.toLocaleUpperCase());
  });

  it(' Should have Minimum 2 element in the dom hierarchy', () => {
    const htmlElement: HTMLElement = fixture.nativeElement;
    expect(htmlElement).toBeDefined();
    expect(htmlElement.childElementCount).toBe(2);
    console.log(htmlElement);
  });
});
