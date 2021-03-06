import { Component, OnInit } from '@angular/core';
import { Logger } from '@free-time/components/log.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MESSAGE } from '@free-time/components/constants/variables.constant';

@Component({
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {
  private message: string;
  // private message$: Observable<string>;

  constructor(private logger: Logger, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.logger.log(' ngOnInit called for ThankyouComponent');
    this.message = this.route.snapshot.queryParams[MESSAGE];
  }

  get messageString(): string {
    return this.message;
  }
}
