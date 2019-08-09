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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { appRoutes } from './routes/main.routes';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ThankyouComponent } from './shared/components/thankyou/thankyou.component';
import { ErrorpageComponent } from './shared/components/errorpage/errorpage.component';
import { RegisterComponent } from './shared/components/register/register.component';

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
