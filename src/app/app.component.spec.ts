import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PersonComponent } from './person/person.component';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Logger } from './log.service';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBlogger, faTwitter, faGit, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { appRoutes } from './routes/main.routes';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';

library.add(faGit, faLinkedin, faBlogger, faTwitter);

describe('Component AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let debugElement: DebugElement;


  beforeEach(async(() => {
    /**
     * TestBed - allows running component and template together.
     * configrueTestingModule: Allows configuring a module specifically for testing.
     */
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(appRoutes),
        FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent,
        NavbarComponent,
        RegisterComponent,
        PersonComponent,
        FooterComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent,
        LoginComponent,
        ErrorpageComponent,
        ThankyouComponent
      ],
      providers: [Logger]
    }).compileComponents();
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
  });
});
