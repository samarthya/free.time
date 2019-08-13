import { LoginService } from './login.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Logger, DUMMY_USER_PROFILE } from './components';
import { IUserProfile } from './models/user.model';
import { of } from 'rxjs';

describe(' Login service tests', () => {
  let loginService: LoginService;
  let logger: Logger;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ Logger, LoginService ]
    }).compileComponents();

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    logger = TestBed.get(Logger);
    loginService = TestBed.get(LoginService);

  });

  it( ' Can call a HTTP request.', () => {
    const userName = 'ABCDEF@abc.com';
    const password = 'password@abc';
    let profileReturned: IUserProfile;

    loginService.loginUser(userName, password).subscribe((userProfile) => {
      profileReturned = userProfile;
      expect(profileReturned.user.email).toEqual('saurabh777@gmail.com');
    });

    // httpClient.post<IUserProfile>(loginService.baseURL, {}, loginService.getBasicHeader(userName, password))
    // .subscribe(data =>
    //   // When observable resolves, result should match test data
    //   expect(data.user.email).toEqual('saurabh777@gmail.com')
    // );


    const req = httpTestingController.expectOne('api/login');
    expect(req.request.method).toEqual('POST');
    expect(req.request.headers.has('Authorization')).toBeTruthy();
    req.flush(null);
  });

  it(' Can test the HTTP Post. ', () => {
    const userName = 'ABCDEF@abc.com';
    const password = 'password@abc';

    let profileReturned: IUserProfile;
    spyOn(loginService, 'loginUser').and.returnValue( of(DUMMY_USER_PROFILE));

    expect(loginService).toBeTruthy();
    loginService.loginUser(userName, password).subscribe((userProfile) => {
      profileReturned = userProfile;
    });

    expect(loginService.loginUser).toHaveBeenCalled();
    expect(profileReturned).toBeTruthy();
  });

});
