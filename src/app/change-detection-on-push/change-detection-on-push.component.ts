import {AfterViewChecked, ChangeDetectionStrategy, Component, Input, NgZone, OnInit} from '@angular/core';

@Component({
  selector: 'app-change-detection-on-push',
  templateUrl: './change-detection-on-push.component.html',
  styleUrls: ['./change-detection-on-push.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionOnPushComponent implements AfterViewChecked, OnInit {

  @Input() user = {
    name: 'Lisa',
    surname: 'Simpson'
  }

  constructor(private ngZone: NgZone) {
  }

  ngAfterViewChecks = 0;
  ngAfterViewChecked(): void {
    this.ngAfterViewChecks++;
    console.log('app-change-detection-on-push -> AfterViewChecked', this.ngAfterViewChecks);
  }

  ngOnInit(): void {

    // setTimeout(() => {
    //   console.log('inside zone')
    // },5000)
    //
    // this.ngZone.runOutsideAngular(() => {
    //   setTimeout(() => {
    //     console.log('outside zone')
    //   },3000)
    // });
  }
}
